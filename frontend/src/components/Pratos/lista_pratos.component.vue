<template>
    <div>
        <div id="container" class="row row-cols-1 row-cols-md-5 " >
            <div class="card text-bg-light mb-3"  id="card"
            v-for="prato in Pratos" :key="prato._id">
                <div class="card-header">{{prato.nome}}</div>
                <div class="card-body">
                    <h5 class="card-title">Titulo: {{prato.ingredientes}}</h5>
                    <p class="card-text">Fofoca: {{prato.preço}}</p>
                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import servicePratos from "../../services/servicePratos"
    export default{
        
        name:"lista-pratos",
        data(){
            return{
                Pratos:{}
            }
        },
        methods:{
            //FAZER OS BUTÕES DE EDITAR E DELETE , DELETE VAI SER FUNÇÃO,
            //JA EDITE VAI PASSAR A INFORMAÇÃO ID "OLHAR NO EDITE COMPOENENT"
            //E VAI MANDAR PARA  ROTA RESPONSAVEL
            async listPratos(){
                const response=await servicePratos.listpratos()
                this.Pratos=response
            }
        },
        mounted(){
            this.listPratos()
        }
    }
</script>
<style>
        #container{
        margin-top: 50px;
        text-align: center;
        justify-content: center;
        margin-right:5px;
    }
    #card{
        
        display:inline-block;
        max-width: 18rem;
        min-width:18rem;
        min-height:15rem ; 
        padding: 10px;
        margin: 50px 10px;
    }
</style>
