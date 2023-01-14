const mongoose= require('mongoose')
const DB = require('./db.config')

mongoose.Promise=global.Promise
mongoose.set('strictQuery',false)


mongoose.connect(DB.configDB.uriDB)
.then(()=>{
    console.log('Conectado com banco de dados!! ')
})
.catch((erro)=>{
    console.log('Erro na canexão'+erro);
    
})
