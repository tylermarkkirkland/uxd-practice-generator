import './CategoryBadge.css'

const CATEGORY_LABELS = {
  'redesign': 'Redesign',
  'micro-ux': 'Micro-UX',
  'product-critique': 'Critique',
  'component': 'Component',
  'accessibility': 'A11y',
  'ai-concept': 'AI',
  'what-if': 'What If',
}

function CategoryBadge({ category }) {
  return (
    <span className={`category-badge category-badge--${category}`}>
      {CATEGORY_LABELS[category] || category}
    </span>
  )
}

export default CategoryBadge
