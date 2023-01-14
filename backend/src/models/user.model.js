const mongoose=require('mongoose')
const bcrypt= require('bcryptjs')
const jwt =require('jsonwebtoken')
const secret=require('../configs/db.config')

const schema=mongoose.Schema

//=>[SCHEMA REGISTER]
const userSchema=new schema({
    name:{
        type:String,
        maxlength:50,
        require:true
    },
    email:{
        type:String,
        maxlength:50,
        require:true
    },
    password:{
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
        collection:'users'
        
    }
    )

    userSchema.pre('save',async function(){
        const user=this
        if(user.isModified('password')){
            const salt= await bcrypt.genSalt(12)
            user.password= await bcrypt.hash(user.password,salt)
        }
    })
    userSchema.methods.generateAuthToken=async function(){
        const user=this
        const token=jwt.sign({_id:user._id,name:user.name,email:user.email},secret.configToken.secretUser)
        user.tokens=user.tokens.concat({token})
    
        await user.save()
    
        return token
    
    }
    
    userSchema.statics.fidByCredentals= async (email,password)=>{
        
        const user=await User.findOne({email})
    
        if(!user){
            
            return
        }
        const isPasswordMatch=await bcrypt.compare(password,user.password)
    
        if(!isPasswordMatch){
            return 
        }
    
        return user
    }


const User=mongoose.model('User',userSchema)

module.exports=User