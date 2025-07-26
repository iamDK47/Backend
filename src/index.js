import 'dotenv/config'
import dbConnection from './db/index.js'
import express from 'express'

const app = express()

console.log(process)

dbConnection()
.then(()=>{
 app.listen(process.env.PORT || 8000)
})