const Users = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const registerUser=  async(req, res) => {
  try{
      // step 1: check if user/phoneNumber already exists
      const data= await Users.findOne({phoneNumber:req.body.phoneNumber })
      if(data){
          res.status(409).json({
              msg: "Phone Number already exists",
              success: false
          })
      }else{
              //step 2: create a hash password of req.body.password
              req.body.password = await bcrypt.hash(req.body.password, saltRounds)
              //step 3: create a jwt token for the user
              const token = jwt.sign({ phoneNumber:req.body.phoneNumber}, process.env.SECRET_KEY);
              const data = await Users.create(req.body)
              if(data){
                  const {password, ...otherFields} = data._doc
                  res.json({
                      msg: "you are successfully registered",
                      success: true,
                      token,
                      userDetails: otherFields
                  })
              }
             
      }
    
  }catch(err){
      console.log(err)
  }

}

const loginUser=  async(req, res) => {
    try{
      const data = await Users.findOne({phoneNumber: req.body.phoneNumber}) 
      if(data){
        const isMatched = await bcrypt.compare(req.body.password, data.password)
        if(isMatched){
            const token = jwt.sign({ phoneNumber:req.body.phoneNumber}, process.env.SECRET_KEY);
            res.json({
                token:token,
                success: true,
                userDetails: data
            })
        }else{
            res.json({
                success: false,
                msg: "Incorrect Password"
            })
        }
      }else{
        res.json({
            success: false,
            msg: "Phone Number doesn't exist"
        })
      }
    }catch(err){
        console.log(err)
    }
  
}
module.exports = {registerUser, loginUser}
