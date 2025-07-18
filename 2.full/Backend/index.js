import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

dotenv.config()

const corsOptions = {
 origin: 'http://localhost:5173'
}

app.use(cors(corsOptions))

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
