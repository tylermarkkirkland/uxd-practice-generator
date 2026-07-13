import { motion } from 'framer-motion'
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown.jsx'
import './GenerateScreen.css'

function GenerateScreen({ category, onCategoryChange, onGenerate, poolExhausted }) {
  return (
    <motion.div
      className="generate-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="generate-screen__content">
        {poolExhausted ? (
          <>
            <h2 className="generate-screen__heading">You did them all!</h2>
            <p className="generate-screen__subtext">
              Amazing work — you&apos;ve completed every exercise in the pool.
              Ask Claude to add more exercises to keep going!
            </p>
            <p className="generate-screen__subtext generate-screen__subtext--small">
              You can still generate below, but you may see repeats.
            </p>
          </>
        ) : (
          <>
            <h2 className="generate-screen__heading">Ready to practice?</h2>
            <p className="generate-screen__subtext">
              Get a fresh design exercise to sharpen your skills.
            </p>
          </>
        )}

        <div className="generate-screen__controls">
          <CategoryDropdown selected={category} onSelect={onCategoryChange} />
          <button className="generate-screen__button" onClick={onGenerate}>
            Generate Challenge
          </button>
        </div>

      </div>
    </motion.div>
  )
}

export default GenerateScreen
