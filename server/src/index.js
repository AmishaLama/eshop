
const express = require('express')
require('dotenv').config()
const connection = require('./dbConnect/connection')
const Users = require('./models/users')
const cors= require('cors')
connection()

const app = express()
app.use(cors())
const port = process.env.PORT
app.use(express.json())

app.get('/checkUserExists/:phoneNumber', async (req, res) => {
  const data= await Users.findOne({phoneNumber:req.params.phoneNumber})
  if(data){
    res.json({
      msg:"Phone Number already exists"
    })
  }
  else{
    res.json({
      validPhoneNo:true
      // msg:"Valid Phone Number"
    })
  }
})

app.post('/register', async (req, res) => {
  console.log(req.body)
  await Users.create(req.body)
  res.json({
    msg: "you are successfully registered"
  })
})


 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })