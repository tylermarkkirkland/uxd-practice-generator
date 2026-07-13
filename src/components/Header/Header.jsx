import './Header.css'

function Header({ completedCount, totalExercises }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })

  return (
    <header className="header">
      <div className="header__brand">
        <h1 className="header__title">UXD Practice</h1>
        <span className="header__progress">{completedCount} / {totalExercises}</span>
      </div>
      <p className="header__date">{today}</p>
    </header>
  )
}

export default Header
