import './Navigation.css'

function Navigation({ activeView, onViewChange }) {
  return (
    <nav className="navigation">
      <button
        className={`nav-tab ${activeView === 'today' ? 'nav-tab--active' : ''}`}
        onClick={() => onViewChange('today')}
      >
        Today
      </button>
      <button
        className={`nav-tab ${activeView === 'history' ? 'nav-tab--active' : ''}`}
        onClick={() => onViewChange('history')}
      >
        History
      </button>
    </nav>
  )
}

export default Navigation
