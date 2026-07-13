import { useState } from 'react'
import { motion } from 'framer-motion'
import CategoryBadge from '../CategoryBadge/CategoryBadge.jsx'
import CompletionForm from '../CompletionForm/CompletionForm.jsx'
import './ExerciseCard.css'

function ExerciseCard({ exercise, onReroll, onComplete, onBack, historyEntry }) {
  const [copied, setCopied] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(exercise.postCaption)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isCompleted = historyEntry?.completed

  return (
    <div className="exercise-card__wrapper">
      <button className="exercise-card__back" onClick={onBack} aria-label="Back to generate">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M12 3L5 9L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <motion.div
        className="exercise-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        key={exercise.id}
      >
      <div className="exercise-card__header">
        <CategoryBadge category={exercise.category} />
        {isCompleted && <span className="exercise-card__done-badge">Completed</span>}
      </div>

      <h2 className="exercise-card__title">{exercise.title}</h2>
      <p className="exercise-card__brief">{exercise.brief}</p>

      <div className="exercise-card__section">
        <h3 className="exercise-card__label">Challenge</h3>
        <p className="exercise-card__challenge">{exercise.challenge}</p>
      </div>

      <div className="exercise-card__section">
        <h3 className="exercise-card__label">Exploration Directions</h3>
        <ol className="exercise-card__directions">
          {exercise.directions.map((dir, i) => (
            <li key={i}>{dir}</li>
          ))}
        </ol>
      </div>

      {exercise.constraints.length > 0 && (
        <div className="exercise-card__section">
          <h3 className="exercise-card__label">Constraints</h3>
          <ul className="exercise-card__constraints">
            {exercise.constraints.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="exercise-card__section">
        <h3 className="exercise-card__label">Post Caption</h3>
        <div className="exercise-card__caption-row">
          <p className="exercise-card__caption">{exercise.postCaption}</p>
          <button className="exercise-card__copy-btn" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="exercise-card__section exercise-card__teaches">
        <h3 className="exercise-card__label">What This Teaches</h3>
        <p>{exercise.teaches}</p>
      </div>

      <div className="exercise-card__actions">
        <button className="exercise-card__reroll" onClick={onReroll}>
          Re-roll
        </button>
        {!isCompleted && (
          <button
            className="exercise-card__complete-btn"
            onClick={() => setShowCompletion(!showCompletion)}
          >
            {showCompletion ? 'Cancel' : 'Mark Complete'}
          </button>
        )}
        {isCompleted && (
          <button className="exercise-card__another-btn" onClick={onBack}>
            Do Another!
          </button>
        )}
      </div>

      {showCompletion && (
        <CompletionForm
          onSave={(data) => {
            onComplete(data)
            setShowCompletion(false)
          }}
        />
      )}
      </motion.div>
    </div>
  )
}

export default ExerciseCard
