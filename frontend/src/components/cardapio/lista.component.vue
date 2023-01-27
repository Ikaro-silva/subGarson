<template>
    <div class="img">
        <div class="master">
            <div class="container_cardapio"
            v-for="prato in Pratos" :key="prato._id"
            >
                <div class="prato"
                >
                    <h5>{{prato.nome}}</h5>
                    <h6>{{prato.ingredientes}}</h6>
                    <h6>{{prato.preço}}</h6>
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
        margin:auto;
        width:80%;
        height: 100vh;
        background-color:#f7e6e679;
        padding: 20px;
        
    }
    .prato{
        width:40%;
        height:100px;
        background-color:#260e0e;
    }
</style>