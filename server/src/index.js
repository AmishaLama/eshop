
const express = require('express')
require('dotenv').config()
const connection = require('./dbConnect/connection')
const cors= require('cors')
const userRoute= require('./routes/users')
const productRoute=require('./routes/products')
connection()

const app = express()
app.use(cors())
const port = process.env.PORT
app.use(express.json())
app.use("/", userRoute)
app.use("/",productRoute)

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })