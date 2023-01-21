const middleware= require('../middlewares/createTags.middlewares')
const Pratos =require("../models/pratos.model")



//==>Metodos responsaveis por CRUD dos pratos do cardapio

//=> metodo responsavel por criar novos pratos
exports.createPratos=async (req,res)=>{

    try{
        const{nome}=req.body
        const nomePrato= await Pratos.find({nome})
        console.log('q')
        //validação se ja existe um prato com o nome no banco de dados 
        if(nomePrato.length>=1){
            return res.status(400).send('Este nome ja está em uso')
        }

        //salvando o novo prato no banco de dados 
        const newPratos=new Pratos(req.body)
        const prato= await newPratos.save()
        const tags= await newPratos.generateTags(prato)
        res.status(200).json({messagem:'Prato cadastrado com sucesso',Prato:prato,Tags:tags})
    }
    catch(err){
        res.status(400).json({messagem:'Falha ao cadastrar pratos',err:err})
    }
    
}

// metodo responsavel por listar pratos
exports.allPratos=async(req,res)=>{
    try{
        const allpratos= await Pratos.find({})
        res.send(allpratos)
    }
    catch(err){
        res.status(400).send(err)
    }
}

//metodo responsavel por excluir pratos por ID
exports.deleteByIdPratos=async(req,res)=>{
    try{
        await Pratos.findByIdAndDelete(req.body.id)
        res.status(200).send('Prato deletado')
    }
    catch(err){
        res.status(400).send(err)
    }
}

//metodo responsavel por editar pratos por ID
exports.editeByIdPratos= async(req,res)=>{
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


//metodo responsavel por pesquisar pratos
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



