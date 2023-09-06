const express=require('express')
const UsersController=require('../controller/users')
const router=express.Router()


router.post('/register',UsersController.registerUser )
router.post('/login',UsersController.loginUser )

// router.get('/checkNumberExists/:phoneNumber',UsersController.checkIfUserExists)

module.exports=router;


  