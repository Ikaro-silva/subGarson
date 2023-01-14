const express =require('express')
const router=express.Router()

// rota principal
    router.get('/api/subGarson',(req,res)=>{
        res.status(200).json({
            mensagem:'Seja bem vindo a nossa api de restalrantes',
            verson:'1.0.0',
            author:' Ikaro Silva e Luis Denner'
        })
    })

module.exports=router


