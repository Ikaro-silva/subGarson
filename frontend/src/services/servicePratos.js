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
       
        const response=await API().get(`/consultPratos/${id}`)
        return response.data
        
    },

    //metodo responsavel por editar prato
    async editPratos(prato){
        const id=prato._id
        
        const response=await API().put(`/editPratos/${id}`,prato)
        
    },

    //metodo responsavel por listar todos os pratos
    async listpratos(){
        const response=await API().get('/listPratos')
        return response.data
    },

    //metodo responsavel por deletar prato
    async deletePratos(id){
    
        const response=await API().delete(`/deletePratos/${id}`)

    }

}