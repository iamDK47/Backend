import express from 'express'
import 'dotenv/config'

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/settings' , (req,res) => {
 res.send('all settings here')
})

app.get('/main' , (req,res) => {
 res.send('<h1>main here lol</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
