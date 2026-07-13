import express from 'express'
import cors from 'cors'
import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'

const app = express()
const PORT = 3001
const HISTORY_FILE = './history.json'

app.use(cors())
app.use(express.json())

async function getHistory() {
  if (!existsSync(HISTORY_FILE)) {
    return { entries: [], todaySession: null }
  }
  const data = await readFile(HISTORY_FILE, 'utf-8')
  return JSON.parse(data)
}

app.get('/api/history', async (req, res) => {
  const history = await getHistory()
  res.json(history)
})

app.post('/api/history', async (req, res) => {
  await writeFile(HISTORY_FILE, JSON.stringify(req.body, null, 2))
  res.json({ success: true })
})

app.listen(PORT, () => {
  console.log(`History server running on port ${PORT}`)
})
