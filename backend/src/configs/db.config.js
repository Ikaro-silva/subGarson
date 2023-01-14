const dotenv = require ('dotenv')
dotenv.config()

module.exports={
    configDB:{
        uriDB:process.env.URI,
        
        
    },
    configToken:{
        secretUser:process.env.SECRET
    }
}