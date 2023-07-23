const Users = require('../models/users')

const checkIfUserExists= async (req, res) => {
    const data= await Users.findOne({phoneNumber:req.params.phoneNumber})
    if(data){
      res.json({
        msg:"Phone Number already exists",
        validPhoneNo: false
      })
    }
    else{
      res.json({
        validPhoneNo:true
        // msg:"Valid Phone Number"
      })
    }
  }
  
const registerUser=async(req, res) => {
    console.log(req.body)
    await Users.create(req.body)
    res.json({
      msg: "Successfully Registered!",
      success: true
    })
  }

  module.exports={checkIfUserExists,registerUser}

  
  