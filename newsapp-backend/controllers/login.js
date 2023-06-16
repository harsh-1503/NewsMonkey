
const usersDB = require('../models/signUpUsers')
const login =async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await  usersDB.findOne({email:email});

        if(!user){
            res.status(404).send({msg:'User Not Found'})
            return
        }
        
        if(user.password !== password){
            res.status(400).send({msg:'Incorrect Password'})
            return
        }
        res.status(200).send({msg:'Logged In Successfully'})

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }


}


const signup =async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user =await usersDB.findOne({email:email});

        if(user){
            res.status(404).send({msg:'User already exists'})
            return
        }
    
        const newUser = new usersDB({
            email:email,
            password:password
        })
        await newUser.save();
        res.status(201).send({msg:"New user Added"})

    } catch (error) {
        res.status(500).send({msg:"Internal Server Error"})
    }
}


module.exports={
    login, signup
}
