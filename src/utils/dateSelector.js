function hashDateAndOffset(date, offset) {
  const dateStr = date.toISOString().split('T')[0]
  let hash = 0
  for (const char of dateStr + String(offset)) {
    hash = ((hash << 5) - hash) + char.charCodeAt(0)
    hash |= 0
  }
  return Math.abs(hash)
}

export function getExerciseForDate(date, exercises, offset = 0, categoryFilter = null, usedIds = []) {
  let pool = categoryFilter
    ? exercises.filter(e => e.category === categoryFilter)
    : exercises

  if (pool.length === 0) return exercises[0]

  const unusedPool = pool.filter(e => !usedIds.includes(e.id))
  const activePool = unusedPool.length > 0 ? unusedPool : pool

  const seed = hashDateAndOffset(date, offset)
  const index = seed % activePool.length
  return activePool[index]
}

export function isPoolExhausted(exercises, usedIds, categoryFilter = null) {
  const pool = categoryFilter
    ? exercises.filter(e => e.category === categoryFilter)
    : exercises
  const unused = pool.filter(e => !usedIds.includes(e.id))
  return unused.length === 0
}

export function getTodayString() {
  return new Date().toISOString().split('T')[0]
}

export function getDayNumber() {
  const start = new Date('2026-06-04')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  start.setHours(0, 0, 0, 0)
  return Math.max(1, Math.floor((today - start) / 86400000) + 1)
}
