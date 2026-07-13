import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CategoryBadge from '../CategoryBadge/CategoryBadge.jsx'
import CompletionForm from '../CompletionForm/CompletionForm.jsx'
import Modal from '../Modal/Modal.jsx'
import exercises from '../../data/exercises'
import './HistoryList.css'

function HistoryList({ entries, onUpdateEntry }) {
  const [expandedDate, setExpandedDate] = useState(null)
  const [editingDate, setEditingDate] = useState(null)
  const [viewingExercise, setViewingExercise] = useState(null)

  const sortedEntries = [...entries].sort((a, b) => b.date.localeCompare(a.date))

  if (sortedEntries.length === 0) {
    return (
      <div className="history-empty">
        <p>No history yet. Complete your first exercise to see it here.</p>
      </div>
    )
  }

  return (
    <>
      <div className="history-list">
        {sortedEntries.map(entry => (
        <div key={entry.date} className="history-item">
          <button
            className="history-item__header"
            onClick={() => {
              setExpandedDate(expandedDate === entry.date ? null : entry.date)
              setEditingDate(null)
            }}
          >
            <div className="history-item__left">
              <span className="history-item__date">
                {new Date(entry.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
              <span className="history-item__title">{entry.title}</span>
              <CategoryBadge category={entry.category} />
            </div>
            <div className="history-item__right">
              {entry.completed && <span className="history-item__status">Done</span>}
              <span className="history-item__chevron">
                {expandedDate === entry.date ? '−' : '+'}
              </span>
            </div>
          </button>

          <AnimatePresence>
            {expandedDate === entry.date && (
              <motion.div
                className="history-item__detail"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                {editingDate === entry.date ? (
                  <CompletionForm
                    compact
                    initialData={{ link: entry.link, reflection: entry.reflection }}
                    onSave={(data) => {
                      onUpdateEntry(entry.date, data)
                      setEditingDate(null)
                    }}
                  />
                ) : (
                  <>
                    <div className="history-item__field">
                      <span className="history-item__label">Link</span>
                      {entry.link ? (
                        <a href={entry.link} target="_blank" rel="noopener noreferrer" className="history-item__link-value">
                          {entry.link}
                        </a>
                      ) : (
                        <span className="history-item__empty">—</span>
                      )}
                    </div>

                    <div className="history-item__field">
                      <span className="history-item__label">Reflection</span>
                      {entry.reflection ? (
                        <p className="history-item__reflection-text">{entry.reflection}</p>
                      ) : (
                        <span className="history-item__empty">—</span>
                      )}
                    </div>

                    <div className="history-item__actions">
                      <button
                        className="history-item__edit"
                        onClick={() => setEditingDate(entry.date)}
                      >
                        Edit
                      </button>
                      {entry.completed && (
                        <button
                          className="history-item__edit"
                          onClick={() => onUpdateEntry(entry.date, { completed: false, completedAt: null })}
                        >
                          Mark incomplete
                        </button>
                      )}
                      <button
                        className="history-item__edit"
                        onClick={() => {
                          const exercise = exercises.find(ex => ex.id === entry.exerciseId)
                          setViewingExercise(exercise)
                        }}
                      >
                        View Full Exercise
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        ))}
      </div>

      <Modal isOpen={!!viewingExercise} onClose={() => setViewingExercise(null)}>
        {viewingExercise && (
          <div className="history-exercise-card">
            <div className="exercise-card__header">
              <CategoryBadge category={viewingExercise.category} />
            </div>

            <h2 className="exercise-card__title">{viewingExercise.title}</h2>
            <p className="exercise-card__brief">{viewingExercise.brief}</p>

            <div className="exercise-card__section">
              <h3 className="exercise-card__label">Challenge</h3>
              <p className="exercise-card__challenge">{viewingExercise.challenge}</p>
            </div>

            <div className="exercise-card__section">
              <h3 className="exercise-card__label">Exploration Directions</h3>
              <ol className="exercise-card__directions">
                {viewingExercise.directions.map((dir, i) => (
                  <li key={i}>{dir}</li>
                ))}
              </ol>
            </div>

            {viewingExercise.constraints.length > 0 && (
              <div className="exercise-card__section">
                <h3 className="exercise-card__label">Constraints</h3>
                <ul className="exercise-card__constraints">
                  {viewingExercise.constraints.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="exercise-card__section">
              <h3 className="exercise-card__label">Post Caption</h3>
              <div className="exercise-card__caption-row">
                <p className="exercise-card__caption">{viewingExercise.postCaption}</p>
              </div>
            </div>

            <div className="exercise-card__section exercise-card__teaches">
              <h3 className="exercise-card__label">What This Teaches</h3>
              <p>{viewingExercise.teaches}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default HistoryList
