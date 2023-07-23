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
  
  