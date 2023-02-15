//funçao responsavel por adcionar token a requisição
const adcionarToken=(requisição)=>{
    const token = localStorage.getItem('jwt')
       requisição.headers={
        'Authorization': token
      }
      return requisição
}


//fução responsavel por adcionar o campo quantidade de pedidos aos pedidos 
const adcionarCampo=(ArrayObjs)=>{

    for(let i=0;i<ArrayObjs.length;i++){
      
        ArrayObjs[i].quantidade=1
        
    }
    return ArrayObjs
}

//função responsavel por mudar  a quantidade dos pedidos
const mudarQuantPedidos=(id,quant)=>{
    //encontrando o objeto
    var array=localStorage.getItem('pedidos')
    let arr=JSON.parse(array)
    
    const filteredArray = arr.filter(obj => obj._id === id)
    const idItem= filteredArray[0]._id
    const index = arr.findIndex(item => item._id === idItem);
    
    //adcionando valores
    const quantidade=filteredArray[0].quantidade
    console.log(quantidade)
    const quantFinal=quantidade+quant

    filteredArray[0].quantidade=quantFinal
    
    arr.splice(index,1,filteredArray[0])
    console.log(arr)
    return arr
    // criando um novo pedido para envio 
}
export default{
    adcionarToken,
    adcionarCampo,
    mudarQuantPedidos
}
