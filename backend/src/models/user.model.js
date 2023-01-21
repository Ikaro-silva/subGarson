const mongoose=require('mongoose')
const bcrypt= require('bcryptjs')
const jwt =require('jsonwebtoken')
const secret=require('../configs/db.config')

const schema=mongoose.Schema

//=>[SCHEMA REGISTER]
const userSchema=new schema({
    nome:{
        type:String,
        maxlength:50,
        require:true
    },
    email:{
        type:String,
        maxlength:50,
        require:true
    },
    senha:{
        type:String,
        require:true
    },
    tokens:[
        {
            token:{type:String}
        }
    ],
    },{

        timestamps:true,
        collection:'user'
        
    }
    )

    userSchema.pre('save',async function(){
        const user=this
        if(user.isModified('senha')){
            const salt= await bcrypt.genSalt(12)
            user.senha= await bcrypt.hash(user.senha,salt)
        }
    })
    userSchema.methods.generateAuthToken=async function(){
        const user=this
        const token=jwt.sign({_id:user._id,name:user.nome,email:user.email},secret.configToken.secretUser)
        user.tokens=user.tokens.concat({token})
    
        await user.save()
    
        return token
    
    }
    
    userSchema.statics.fidByCredentals= async (email,senha)=>{
        
        const user=await User.findOne({email})
        
    
        if(!user){
            
            return
        }
        const isPasswordMatch=await bcrypt.compare(senha,user.senha)
        if(!isPasswordMatch){
            return 
        }
    
        return user
    }


const User=mongoose.model('User',userSchema)

module.exports=User