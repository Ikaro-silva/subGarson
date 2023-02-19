import API from "./conectApi"

export default{
  async createPedidos(pedidos){
        const response=await API().post("/createPedidos",pedidos)

  },
    
}