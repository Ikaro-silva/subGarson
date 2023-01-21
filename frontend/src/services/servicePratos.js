import API from "./conectApi"
import adcionarToken from'../ulteis'

export default{
    async createPratos(pratos){
        const pratosToken= await adcionarToken.adcionarToken(pratos)
        
        const response=await API().post("/createPratos",pratosToken)
        const{token}=response.data
    }
}