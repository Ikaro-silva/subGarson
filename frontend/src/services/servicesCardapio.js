import API from './conectApi'

export default{
    //metodo responsavel por listar todos os pratos
    async listpratos(){
        const response=await API().get('/listPratos')
        return response.data
    }
}
