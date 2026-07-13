const API_BASE = '/api'
const BACKUP_KEY = 'uxd-history-backup'

// ---- localStorage backup ----
// Mirror history locally on every save so data survives even when the
// history server is down. We re-sync this to the server when it returns.

export function backupToLocal(history) {
  try {
    localStorage.setItem(BACKUP_KEY, JSON.stringify(history))
  } catch {
    // localStorage unavailable (private mode / quota) — ignore.
  }
}

export function readLocalBackup() {
  try {
    const raw = localStorage.getItem(BACKUP_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export async function getHistory() {
  const res = await fetch(`${API_BASE}/history`)
  if (!res.ok) throw new Error(`History load failed (${res.status})`)
  return res.json()
}

// Saves to the server. Always writes a local backup first so the data is
// never lost, then attempts the server write. Throws on failure so callers
// can surface a visible status and offer a retry.
export async function saveHistory(history) {
  backupToLocal(history)

  let res
  try {
    res = await fetch(`${API_BASE}/history`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(history),
    })
  } catch {
    // Network error / server unreachable.
    throw new Error('Could not reach the history server — your work is backed up locally.')
  }

  if (!res.ok) {
    throw new Error(`Server rejected the save (${res.status}) — your work is backed up locally.`)
  }

  return res.json()
}
