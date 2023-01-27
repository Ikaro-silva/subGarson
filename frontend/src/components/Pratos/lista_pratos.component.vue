<template>
    <div>
        <div id="container" class="row row-cols-1 row-cols-md-5 " >
            <div class="card text-bg-light mb-3"  id="card"
            v-for="prato in Pratos" :key="prato._id">
                <div class="card-header">{{prato.nome}}</div>
                <div class="card-body">
                    <p class="card-title"><strong>INGREDIENTES:</strong> {{prato.ingredientes}}</p>
                    <p class="card-text"><strong>VALOR:</strong> {{prato.preço}}</p>
                
                </div>
                <div class="buttonContainer">
                    <div>
                        <button 
                            class="btn btn-secondary" 
                            style="margin-left: 20px;"
                            @click="editePrato(prato._id)"
                            >Editar</button>
                    </div>
                    <div>
                        <button 
                            class="btn btn-danger" 
                            style="margin-left:10px;"
                            @click="deletePratos(prato._id)"
                            >excluir</button>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
</template>
<script>
    
    import swal from "sweetalert"
    import servicePratos from "../../services/servicePratos"
    export default{
        
        name:"lista-pratos",
        data(){
            return{
                Pratos:{}
            }
        },
        methods:{
            
            async listPratos(){
                const response=await servicePratos.listpratos()
                this.Pratos=response
            },

            async deletePratos(id){
                swal({
                    title: 'Voce quer deletar esse Prato ?',
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true,
                    
                    }).then(async (result) => {
                            if (result) {
                                await servicePratos.deletePratos(id);
                                swal('Deletado', 'Prato Excluido', 'success');
                                this.listPratos();
                            } else {
                                swal('Cancelado', 'Prato Não Excluido', 'info');
                            }
                        });
            },

            editePrato(idi){
                // RESOLVER ID NÂO ESTA INDO PARA URL
                this.$router.push(`/admEdite_Pratos/${idi}`)
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
        
        padding: 10px;
        margin: 50px 10px;
    }
    p{
        text-align: justify;
    }
    .buttonContainer{
        display: flex;
        
    }
</style>
