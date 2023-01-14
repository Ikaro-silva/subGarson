const app =require('./src/app')

const PORT= process.env.PORT||3000
app.listen(PORT,()=>{
    try{
        console.log('Servidor conectado na porta ',PORT)
    }
    catch(err){
        console.log('Falha ao conectar o servidor :',err)
    }
    
})

