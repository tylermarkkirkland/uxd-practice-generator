import { useState } from 'react'
import { motion } from 'framer-motion'
import './CompletionForm.css'

function CompletionForm({ onSave, initialData, compact }) {
  const [link, setLink] = useState(initialData?.link || '')
  const [reflection, setReflection] = useState(initialData?.reflection || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ link, reflection })
  }

  return (
    <motion.form
      className={`completion-form ${compact ? 'completion-form--compact' : ''}`}
      onSubmit={handleSubmit}
      initial={compact ? false : { opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: compact ? 0 : 0.2 }}
    >
      <div className="completion-form__field">
        <label className="completion-form__label">{compact ? 'Link' : 'Link to your post (optional)'}</label>
        <input
          type="url"
          placeholder="https://dribbble.com/shots/..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="completion-form__field">
        <label className="completion-form__label">{compact ? 'Reflection' : 'Quick reflection (optional)'}</label>
        <textarea
          placeholder="What did you learn? What surprised you?"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          rows={3}
        />
      </div>
      <button type="submit" className="completion-form__save">
        {compact ? 'Save' : 'Save & Complete'}
      </button>
    </motion.form>
  )
}

export default CompletionForm
