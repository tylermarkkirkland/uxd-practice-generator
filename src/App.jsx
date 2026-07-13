import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header/Header.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import GenerateScreen from './components/GenerateScreen/GenerateScreen.jsx'
import ShuffleAnimation from './components/ShuffleAnimation/ShuffleAnimation.jsx'
import ExerciseCard from './components/ExerciseCard/ExerciseCard.jsx'
import HistoryList from './components/HistoryList/HistoryList.jsx'
import SaveStatus from './components/SaveStatus/SaveStatus.jsx'
import { getExerciseForDate, getTodayString, isPoolExhausted } from './utils/dateSelector'
import { getHistory, saveHistory, readLocalBackup } from './utils/api'
import exercises from './data/exercises'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('today')
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [rerollOffset, setRerollOffset] = useState(0)
  const [history, setHistory] = useState({ entries: [], todaySession: null })
  const [todayState, setTodayState] = useState('loading')
  const [todayExercise, setTodayExercise] = useState(null)
  // Save status: 'idle' | 'saving' | 'saved' | 'error'. lastFailed holds the
  // payload that didn't persist so the user can retry it.
  const [saveState, setSaveState] = useState('idle')
  const [lastFailed, setLastFailed] = useState(null)

  useEffect(() => {
    const applyData = (data) => {
      setHistory(data)
      const session = data.todaySession
      if (session && session.date === getTodayString()) {
        const offset = session.rerollOffset || 0
        const cat = session.categoryFilter || null
        const ids = data.entries.map(e => e.exerciseId)
        setRerollOffset(offset)
        setCategoryFilter(cat)
        setTodayExercise(getExerciseForDate(new Date(), exercises, offset, cat, ids))
        setTodayState('revealed')
      } else {
        setTodayState('generate')
      }
    }

    getHistory().then(server => {
      // If a local backup has more entries than the server, the server
      // likely missed a save — prefer the richer local copy and re-sync it.
      const backup = readLocalBackup()
      if (backup && backup.entries.length > server.entries.length) {
        applyData(backup)
        saveHistory(backup).catch(() => {})
      } else {
        applyData(server)
      }
    }).catch(() => {
      // Server unreachable — fall back to local backup if we have one.
      const backup = readLocalBackup()
      if (backup) {
        applyData(backup)
        setSaveState('error')
        setLastFailed(backup)
      } else {
        setTodayState('generate')
      }
    })
  }, [])

  const usedIds = history.entries.map(e => e.exerciseId)
  const completedCount = history.entries.length
  const poolExhausted = isPoolExhausted(exercises, usedIds, categoryFilter)

  // Persist history with a visible status. Updates the UI immediately, then
  // awaits the server write — on failure it surfaces an error + retry instead
  // of silently dropping the data (which is already backed up to localStorage).
  const updateHistory = useCallback((newHistory) => {
    setHistory(newHistory)
    setSaveState('saving')
    saveHistory(newHistory)
      .then(() => {
        setSaveState('saved')
        setLastFailed(null)
      })
      .catch(() => {
        setSaveState('error')
        setLastFailed(newHistory)
      })
  }, [])

  const handleRetry = useCallback(() => {
    if (lastFailed) updateHistory(lastFailed)
  }, [lastFailed, updateHistory])

  const handleGenerate = () => {
    // If we already have an exercise (user clicked back), increment offset to get a new one
    const newOffset = todayExercise ? rerollOffset + 1 : rerollOffset
    setRerollOffset(newOffset)

    const exercise = getExerciseForDate(new Date(), exercises, newOffset, categoryFilter, usedIds)
    setTodayExercise(exercise)
    setTodayState('shuffle')
  }

  const handleShuffleComplete = () => {
    setTodayState('revealed')

    const newHistory = {
      ...history,
      todaySession: {
        date: getTodayString(),
        exerciseId: todayExercise.id,
        rerollOffset,
        categoryFilter
      }
    }
    updateHistory(newHistory)
  }

  const handleReroll = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const newOffset = rerollOffset + 1
    setRerollOffset(newOffset)
    const exercise = getExerciseForDate(new Date(), exercises, newOffset, categoryFilter, usedIds)
    setTodayExercise(exercise)
    setTodayState('shuffle')
  }

  const handleComplete = (data) => {
    const existingIndex = history.entries.findIndex(e => e.exerciseId === todayExercise.id)
    let newEntries
    if (existingIndex >= 0) {
      newEntries = history.entries.map((e, i) =>
        i === existingIndex ? { ...e, link: data.link, reflection: data.reflection, completed: true, completedAt: new Date().toISOString() } : e
      )
    } else {
      newEntries = [...history.entries, {
        date: getTodayString(),
        exerciseId: todayExercise.id,
        title: todayExercise.title,
        category: todayExercise.category,
        completed: true,
        link: data.link,
        reflection: data.reflection,
        completedAt: new Date().toISOString()
      }]
    }
    updateHistory({ ...history, entries: newEntries })
  }

  const handleUpdateEntry = (date, data) => {
    const newEntries = history.entries.map(e =>
      e.date === date ? { ...e, ...data } : e
    )
    updateHistory({ ...history, entries: newEntries })
  }

  const todayEntry = history.entries.find(e => e.exerciseId === todayExercise?.id)

  if (todayState === 'loading') return null

  return (
    <div className="app">
      <div className="app__container">
        <Header completedCount={completedCount} totalExercises={exercises.length} />
        <Navigation activeView={activeView} onViewChange={setActiveView} />

        {activeView === 'today' && (
          <div className="app__today">
            <AnimatePresence mode="wait">
              {todayState === 'generate' && (
                <GenerateScreen
                  key="generate"
                  category={categoryFilter}
                  onCategoryChange={setCategoryFilter}
                  onGenerate={handleGenerate}
                  poolExhausted={poolExhausted}
                />
              )}

              {todayState === 'shuffle' && (
                <ShuffleAnimation
                  key="shuffle"
                  exercises={exercises}
                  finalExercise={todayExercise}
                  onComplete={handleShuffleComplete}
                />
              )}

              {todayState === 'revealed' && todayExercise && (
                <ExerciseCard
                  key="revealed"
                  exercise={todayExercise}
                  onReroll={handleReroll}
                  onComplete={handleComplete}
                  onBack={() => setTodayState('generate')}
                  historyEntry={todayEntry}
                />
              )}
            </AnimatePresence>
          </div>
        )}

        {activeView === 'history' && (
          <div className="app__history">
            <HistoryList
              entries={history.entries}
              onUpdateEntry={handleUpdateEntry}
            />
          </div>
        )}
      </div>

      <SaveStatus status={saveState} onRetry={handleRetry} />
    </div>
  )
}

export default App
