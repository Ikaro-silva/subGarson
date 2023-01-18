const express= require('express')
const router =express.Router()
const auth= require('../middlewares/auth.middlewares')

const controller= require('../controllers/user.controller')

//=> rota responsavel por criar usuarios (mesas)(POST):localHost:3000/api/subGarson/createUser
router.post('/createUser',auth,controller.createUser)

// rota responsavel por entrar em contas do ususario(mesas)(POST):localhost:3000/api/subGarson/loginUser
router.post('/loginUser',controller.loginUser)

module.exports=router