import API from "./conectApi"
import adcionarToken from'../ulteis'

export default{
    //matodo responsavel por criar pratos
    async createPratos(pratos){
        const pratosToken= await adcionarToken.adcionarToken(pratos)
        
        const response=await API().post("/createPratos",pratosToken)
        const{token}=response.data
    },

    //metodo responsavel por buscas pratos por id
    async consultId(id){
        const IdObjet={}
        const pratoToken= await adcionarToken.adcionarToken(IdObjet)
        const response=await API().get(`/consultPratos/:${id}`,pratoToken)
        return response.data
        
    },

    //metodo responsavel por listar todos os pratos
    async listpratos(){
        const response=await API().get('/listPratos')
        return response.data
    }

}