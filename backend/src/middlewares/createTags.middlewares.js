const generateTags=(posts)=>{
    var tags = [];
    
    if(posts.nome){
        
        const pars=posts.nome.split(' ').map(tilt => simplify(tilt))
        const separ= separate(pars)
        tags = tags.concat(separ);
        
    }
    
    if(posts.ingredientes){
        
        const pars=posts.ingredientes.split(',').map(them => simplify(them))
        const separ= separate(pars)
        tags = tags.concat(separ);
        
    }
        
      
    if(posts.preço){
        const pars =posts.preço.split(' ').map(content => simplify(content));
        const separ=separate(pars)
        tags = tags.concat(separ)
    }
        
    return tags;
}

//=>responsavel por separar os nomes das tags para serem guardados
const separate=(pars)=>{
    const arr=[]
    for(var i=0;i<pars.length;i++){
        var joi=pars[i].join()
        arr.push(joi)
    }
    return arr
}



const simplify=(text)=>{
    const separators = "/[s,.;:()-'~+]/g";
    const diacritics = "/[u0300-u036f]/g";
    //capitalização e normalização
    text = text.toUpperCase().normalize("NFD").replace(diacritics, "");
    //separando e removendo repetidos
    const arr = text.split(separators).filter((item, pos, self) => self.indexOf(item) == pos);
    
    //removendo nulls, undefineds e strings vazias
    return arr.filter(item => (item));
}

module.exports={
    generateTags,
    simplify
}