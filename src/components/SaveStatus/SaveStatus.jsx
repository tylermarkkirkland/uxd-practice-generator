import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './SaveStatus.css'

/**
 * SaveStatus — a small toast that makes the save outcome visible.
 *
 * - 'saving' shows briefly while the write is in flight
 * - 'saved'  shows a confirmation that auto-dismisses
 * - 'error'  stays until the user retries, so a failed save is never silent
 */
function SaveStatus({ status, onRetry }) {
  const [showSaved, setShowSaved] = useState(false)

  // Auto-dismiss the "Saved" confirmation after a moment.
  useEffect(() => {
    if (status === 'saved') {
      setShowSaved(true)
      const t = setTimeout(() => setShowSaved(false), 2000)
      return () => clearTimeout(t)
    }
  }, [status])

  const visible =
    status === 'saving' || status === 'error' || (status === 'saved' && showSaved)

  let content = null
  if (status === 'saving') {
    content = (
      <span className="save-status__text">
        <span className="save-status__spinner" /> Saving…
      </span>
    )
  } else if (status === 'saved' && showSaved) {
    content = <span className="save-status__text">Saved ✓</span>
  } else if (status === 'error') {
    content = (
      <span className="save-status__text">
        Save failed — your work is backed up locally.
        <button className="save-status__retry" onClick={onRetry}>
          Retry
        </button>
      </span>
    )
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`save-status save-status--${status}`}
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SaveStatus
