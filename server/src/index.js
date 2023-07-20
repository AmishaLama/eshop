
const express = require('express')
const mongoose= require('mongoose')
const cors= require('cors')
require('dotenv').config()
const connection = require('./dbConnect/connection')
const Users = require('./models/users')
connection()

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())


app.post('/register', async (req, res) => {
  Users.create(req.body)
  res.json({
    msg: "you are successfully registered"
  })
})

 app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
  })