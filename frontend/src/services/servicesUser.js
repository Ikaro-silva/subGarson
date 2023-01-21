import API from "./conectApi"

export default{
    //Metodo responsavel por criar usuarios
    async createUser(user){
        
        const response=await API().post('/createUser',user)
        
        const{token}=response.data
    },

    async loginUser(user){
        console.log(user)
        const response=await API().post('/loginUser',user)
        const{token}=response.data
    }
}