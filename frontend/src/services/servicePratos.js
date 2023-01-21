import API from "./conectApi"

export default{
    async createPratos(pratos){
        console.log(pratos)
        const response=await API().post("/createPratos",pratos)
        const{token}=response.data
    }
}