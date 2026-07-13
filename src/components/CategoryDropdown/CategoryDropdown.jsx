import './CategoryDropdown.css'

const CATEGORIES = [
  { id: null, label: 'All Categories' },
  { id: 'redesign', label: 'Redesign' },
  { id: 'micro-ux', label: 'Micro-UX' },
  { id: 'product-critique', label: 'Product Critique' },
  { id: 'component', label: 'Component' },
  { id: 'accessibility', label: 'Accessibility' },
  { id: 'ai-concept', label: 'AI Concept' },
  { id: 'what-if', label: 'What If' },
]

function CategoryDropdown({ selected, onSelect }) {
  return (
    <select
      className="category-dropdown"
      value={selected || ''}
      onChange={(e) => onSelect(e.target.value || null)}
    >
      {CATEGORIES.map(cat => (
        <option key={cat.id || 'all'} value={cat.id || ''}>
          {cat.label}
        </option>
      ))}
    </select>
  )
}

export default CategoryDropdown
