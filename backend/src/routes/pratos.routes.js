const express=require('express')
const router=express.Router()
const auth= require('../middlewares/auth.middlewares')
const controller=require('../controllers/pratos.controller')

//=> rota responsavel por criar pratosnovos (POST):localhost:3000/api/subGarson/createPratos
router.post('/createPratos',auth,controller.createPratos)

//=> rota responsavel por listar todos os pratos (GET):localhost:3000/api/subGarson/listPratos
router.get('/listPratos',controller.allPratos)

//=> rota responsavel por deletar prato por id (DELETE):localhost:3000/api/subGarson/deletePratos
router.delete('/deletePratos',auth,controller.deleteByIdPratos)

//=> rota responsavel por editar prato por id (PUT):localhost:3000/api/subGarson/editPratos:id
router.put('/editPratos/:id',auth,controller.editeByIdPratos)

//=> rota responsavel por pesquisar por tags (POST):localhost:3000/api/subGarson/consultPratos
router.post('/consultPratos',controller.consultPratos)


module.exports=router