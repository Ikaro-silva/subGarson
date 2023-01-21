import API from "./conectApi"
import adcionarToken from'../ulteis'

export default{
    //Metodo responsavel por criar usuarios
    async createUser(user){
        const userToken= await adcionarToken.adcionarToken(user)
        const response=await API().post('/createUser',userToken)
        
        const{data}=response.data
    },

    async loginUser(user){
        
        const response=await API().post('/loginUser',user)
        return response.data
    }
}