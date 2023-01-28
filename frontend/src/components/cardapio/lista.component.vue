<template>
    <div class="img">
        <div class="master">
            <div class="container_cardapio"
            v-for="prato in Pratos" :key="prato._id">
                <div class="prato">
                    <h5>{{prato.nome}}</h5>
                    <h6>{{prato.ingredientes}}</h6>
                    <h6>R${{prato.preço}}</h6>
                </div>
                <div class="btn">
                        <button>
                            Carrinho
                        </button>
                    </div>
            </div>
            <div >
                <div class="carrinho">

                </div>
                <div class="scan">

                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import servicesCardapio from '../../services/servicesCardapio'
    export default{
        name:'lista.component',
        data(){
            return{
                Pratos:[]
            }
        },
        methods:{
            async getList(){
                const response=await servicesCardapio.listpratos()
                this.Pratos=response
            }
        },
        mounted(){
            this.getList()
        }

    }
</script>
<style scoped>
    .img{
        height: 100%;
        background-image: url("../../../public/img/comida-mineira-historia-de-origem-tipos-e-simplicidade-14.jpg");
        background-position: center center;
        background-size:cover;
        background-repeat: no-repeat;
        

    }
    .master{
        background-color: rgba(0, 0, 0, 0.629);
        height:100%;
          
        
    }
    .container_cardapio{
        margin-right:15%;
        margin-left:5%;
        width:60%;
        background-color:#260e0e;
        padding: 20px;
        display: flex;
        align-items: center;   
    }
  
    .prato{
        padding:15px;
        width:70%;
        color:black;
        background-color: white;
    }
    .btn{
        margin:auto;
        
    }
    button{
        border: none;
        background-color:#222;
        color:white;
        font-size:1.1em;
        font-weight: bold;
        padding:42px;
    }
    button:hover{
        background-color:rgb(74, 74, 74);
        font-size: 1.2em;
    }
    h5{
        padding-bottom: 5px;
       border-bottom: 1px solid rgba(0, 0, 0, 0.194); 
    }

</style>