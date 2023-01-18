const express= require('express')
const router= express.Router()
const controller = require('../controllers/pedidos.conroller')
const auth= require('../middlewares/auth.middlewares')

//rota responsavel por criar pedidos 
router.post('/createPedidos',controller.createPedidos)

//rota responsavel por listar todos os pedidos 
router.get('/listPedidos',controller.listPedidos)

//rota responsavel por excluir pedidos 
router.delete('/deletePedidos',controller.deletePedidos)

//rota responsavel por consultar pedidos
router.post('/consultPedidos',controller.consultPratos)

// rota responsavel por editar pedidos 
router.put('/editPedidos',auth,controller.editeByIdPedidos)


module.exports=router