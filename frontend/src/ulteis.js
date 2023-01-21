//funçao responsavel por adcionar token a requisição
const adcionarToken=(requisição)=>{
    const token = localStorage.getItem('jwt')
       requisição.headers={
        'Authorization': token
      }
      return requisição
}

export default{
    adcionarToken
}
