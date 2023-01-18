const mongoose= require('mongoose')
const pedidosSchemas=new mongoose.Schema({
    pedidos:[],
   
})




const Pedidos=mongoose.model('pedidos',pedidosSchemas)

module.exports=Pedidos