import express from 'express'
import * as database from './database'
const app = express()

app.get('/posts', (req, res) => {
  database
    .getAll()
    .then(posts => res.json({ posts }))
    .catch(() => res.status(500).json({ message: 'Cant fetch posts.' }))
})

app.get('/posts/:id', (req, res) => {
  database
    .getById(req.params.id)
    .then(post => res.json({ post }))
    .catch(() => res.status(500).json({ message: 'Cant fetch post.' }))
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(4000, () => {
    console.log('Server start at http://localhost:4000')
  })
}

export { app }
