const User = require('../models/user.model')
//Metodo reponsavel por criar novos usuarios
exports.createUser=async(req,res)=>{
    try{
        const{name,email}=req.body

        //validação email
        const isEmail=await User.find({email})

        if(isEmail.length>=1){
            res.status(401).send('Este email ja esta em uso')
            return
        }

        // validação nome
        const isName= await User.find({name})

        if(isName.length>=1){
            res.status(401).send('Este Nome ja esta em uso')
            return   
        }

        const newUser=new User(req.body)
        const user=await newUser.save()
        const token= await newUser.generateAuthToken()

        res.status(201).json({message:'user criado com sucesso',user,token})

    }
    catch(err){
        res.status(400).json({err:err})
    }
},

exports.loginUser=async (req,res)=>{

    try{
        const{email,password}=req.body

        const user= await User.fidByCredentals(email,password)
        if(!user){
            return res.status(409).json({message:'login invalido!'})
        }
        res.status(201).json({message:'Usuario logado com sucesso',user:user})
        return user.tokens
    }   
    catch(err){
        res.status(400).json({err:err})
    }

}