import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ShuffleAnimation.css'

function ShuffleAnimation({ exercises, finalExercise, onComplete }) {
  // Shuffle the exercises array once when component mounts
  const shuffledExercises = useMemo(() => {
    const shuffled = [...exercises]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [speed, setSpeed] = useState(80)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return

    const totalDuration = 2500
    const startTime = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / totalDuration, 1)

      if (progress >= 1) {
        setDone(true)
        setTimeout(onComplete, 400)
        return
      }

      const eased = progress * progress * progress
      const newSpeed = 80 + eased * 500

      setSpeed(newSpeed)
      setCurrentIndex(prev => (prev + 1) % shuffledExercises.length)
      setTimeout(tick, newSpeed)
    }

    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [])

  const displayTitle = done ? finalExercise.title : shuffledExercises[currentIndex]?.title

  return (
    <div className="shuffle-animation">
      <div className="shuffle-animation__container">
        <AnimatePresence mode="wait">
          <motion.p
            key={done ? 'final' : currentIndex}
            className={`shuffle-animation__title ${done ? 'shuffle-animation__title--final' : ''}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: done ? 1 : 0.7, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: done ? 0.4 : 0.06 }}
          >
            {displayTitle}
          </motion.p>
        </AnimatePresence>
      </div>
      {!done && (
        <p className="shuffle-animation__hint">Finding your challenge...</p>
      )}
    </div>
  )
}

export default ShuffleAnimation
