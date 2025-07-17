import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

const port = process.env.PORT

app.get('/', (req, res) => {
 res.send('yellow!')
})

app.get('/next/jokes', (req, res) => {
 res.send(
 [
  {
   id: 1,
   joke: 'ha'
  },
  {
   id: 2,
   joke: 'haha'
  },
  {
   id: 3,
   joke: 'hahaha'
  },
  {
   id: 4,
   joke: 'hahahaha'
  },
 ]
 )
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
