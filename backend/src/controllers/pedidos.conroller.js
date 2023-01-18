const Pedidos=require('../models/pedidos.model')
const middleware =require('../middlewares/createTags.middlewares')

//Metodo responsavel por criar pedidos
exports.createPedidos=async(req,res)=>{
    try{
        const NewPedidos= new Pedidos(req.body)
        const pedidos = await NewPedidos.save()
        res.status(200).json({message:"pedidos salvo com sucesso !",pedidos})
    }
    catch(err){
        res.status(400).send('falha ao salvar pedidos ',err)
    }
}

//Metdo responsavel por listar todos os pedisos
exports.listPedidos=async(req,res)=>{
    try{
        const list=await Pedidos.find({})
        res.status(200).send(list)
    }
    catch(err){
        res.status(400).send('Falha ao listar pedidos',err)
    }
}

//Metodo responsavel por excluir pedidos 
exports.deletePedidos=async(req,res)=>{
    try{
        await Pedidos.findByIdAndDelete(req.body.id)
        res.status(200).send('Pedidos deletado')
    }
    catch(err){
        res.status(400).send(err)
    }
}

//Metodo responsavel por pesquisar os pedidos 
exports.consultPratos= async (req,res)=>{
    try{
        const consulta=req.body.tags
        const query= await middleware.simplify(consulta)
        const querys= await Pratos.find({'tags.0.tag':{$all:query}})

        res.send(querys)
        
    }
    catch(err){
        res.status(400).json({falha:"falha na cosulta",Erro:err})
    }
}


//Metodo responsavel por editar os pedidos
exports.editeByIdPedidos= async(req,res)=>{
    try{
        const id= req.params.id
        const editePrato= await Pratos.findByIdAndUpdate(id,req.body)
        await editePrato.save()
        res.send(editePrato)
    }
    catch(err){
        res.status(400).send(err)
    }
}