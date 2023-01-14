const mongoose= require('mongoose')
const createTags= require('../middlewares/createTags.middlewares')

const pratosSchema= new mongoose.Schema({
    nome:{
        type:String,
        require:true
        
    },
    ingredientes:{
        type:String,
        require:true
    },
    preço:{
        type:String,
        require:true
    },
    tags:[]
},{

    timestamps:true
    
  }
)

pratosSchema.methods.generateTags=async function(Prato){
    const prato=this
    const tag= await createTags.generateTags(Prato)
    prato.tags=prato.tags.concat({tag})

    await prato.save()
}


const Pratos=mongoose.model('pratos', pratosSchema)

module.exports=Pratos