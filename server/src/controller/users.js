const Users = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');


// const checkIfUserExists= async (req, res) => {
//     const data= await Users.findOne({phoneNumber:req.params.phoneNumber})
//     if(data){
//       res.json({
//         msg:"Phone Number already exists",
//         validPhoneNo: false
//       })
//     }
//     else{
//       res.json({
//         validPhoneNo:true,
//         msg:"Valid Phone Number"
//       })
//     }
//   }
  
const registerUser=async(req, res) => {
  try{
    const data= await Users.findOne({phoneNumber:req.body.phoneNumber}) //check if phoneNumber already exists
    if(data){
      res.status(409).json({
        msg:"Phone Number already exists",
        success: false
      })
    }
    else{
    req.body.password =await bcrypt.hash(req.body.password, saltRounds); //creates hashed password
    const token = jwt.sign({ phoneNumber:req.body.phoneNumber}, process.env.SECRET_KEY); //creates jwt for users

    await Users.create(req.body)
    res.json({
      msg: "Successfully Registered!",
      success: true,
      token
    })
  }}
  catch(err){
    console.log(err)
  }
  }

  module.exports={registerUser}

  
  