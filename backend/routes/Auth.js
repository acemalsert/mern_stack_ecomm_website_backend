const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const bycript  =require('bcrypt')

router.post("/register",async(req,res)  => {

    try{

        const salt = await bycript.genSalt(10)
        const password = await bycript.hash(req.body.password,salt)
        
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:password,
        })

        await newUser.save()
    }
    catch(error){
        res.status(500).send({'Error':error})
    }

    res.status(200).json("registered successfully")

})

router.post('/login',async (req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(404).send({msg:'User not found!',status:'404'})
        }
        const comparePass = await bcrypt.compare(req.body.password,user.password)

        if(!comparePass){
            return res.status(400).send({msg:'Username or password is wrong!',status:'400'})
        }

        return res.status(200).json(user)
        
    } catch (error) {
        return res.status(500).send({msg:error})
    }
})

module.exports = router
