const express=require('express')
const UsersController=require('../controller/users')
const router=express.Router()


router.post('/register',UsersController.registerUser )
  
// router.get('/checkNumberExists/:phoneNumber',UsersController.checkIfUserExists)

module.exports=router;


  