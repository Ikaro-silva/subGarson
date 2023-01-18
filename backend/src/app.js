const express =require('express')
const cors = require ('cors')
const app=express()

    app.use(express.urlencoded({extended:true}))
    app.use(express.json()) 
    app.use(express.json({type:'application/vnd.api+json'}))
    app.use(cors())

// =>Rotas
    const routerIndex= require('./routes/index')
    app.use(routerIndex)
    //User
    const routerUser= require('./routes/user.routes')
    app.use('/api/subGarson',routerUser)

    //Pratos
    const routerPratos=require('./routes/pratos.routes')
    app.use('/api/subGarson',routerPratos)

    //Pedidos
    const routerPedidos=require('./routes/pedidos.routes')
    app.use('/api/subGarson',routerPedidos)
    
// =>Banco de dados 
    const connectDB =require('./configs/conectDB')
    app.set('conectdb',connectDB)


module.exports= app