<template>
    <div class="img">
        <div class="master">
            <div >
                <div class="divloja" @click="getListPedidos">
                    <font-awesome-icon icon="fa-solid fa-shop" class="loja" />
                </div>
                <div class="divscan">
                    <font-awesome-icon icon="fa-solid fa-qrcode" class="scan"/>
                </div>
                 <lista_pedidosPre class="pre_pedidos"/>
                <!-- <div class="container_pedido"
                v-for="pedido in Pedidos" :key="pedido._id">
                    
                    <div class="pedido">
                        <h5>{{pedido.nome}}</h5>
                        <h6>{{pedido.ingredientes}}</h6>
                        <h6>R${{pedido.preço}}</h6>
                    </div>
                    
                </div>    -->

            </div>
            <div class="container_cardapio"
            v-for="prato in Pratos" :key="prato._id">
                
                    <div class="prato">
                        <h5>{{prato.nome}}</h5>
                        <h6>{{prato.ingredientes}}</h6>
                        <h6>R${{prato.preço}}</h6>
                    </div>
                    <div class="btn">
                             <button @click="adcionarPedidos(prato._id)" > 
                                <font-awesome-icon icon="fa-solid fa-cart-plus" class="carrinho" alt="loja"/>
                            </button>
                    </div>
                
            </div>
           
        </div>
    </div>
</template>
<script>
    import servicesCardapio from '../../services/servicesCardapio'
    import servicePratos from '../../services/servicePratos'
    import lista_pedidosPre from './lista_pedidos _clientes.component.vue'
    export default{
        name:'lista.component',
        components:{lista_pedidosPre},
        data(){
            return{
                Pratos:[],
                // Pedidos:[],
                parsePedidos:[]
            }
        },
        methods:{
            // Mostrar lista de pratos
            async getList(){
                const response=await servicesCardapio.listpratos()
                this.Pratos=response
                
            },
            //Adcionando  na lista de pre pedidos 
            async adcionarPedidos(id){
                const response=await servicePratos.consultId(id)
                this.parsePedidos.push(response)
                const pedidoCarrinho=this.parsePedidos
                localStorage.setItem('pedidos',JSON.stringify(pedidoCarrinho))

            }
            ,//Mostrar lista de pré pedidos 
            // getListPedidos(){
            //     const pedidos=localStorage.getItem('pedidos')
            //     const pedido=JSON.parse(pedidos)
            //     this.Pedidos=pedido
                
            // }
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
        display:flex;
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
    .carrinho{
        width: 50px;
        height:30px;
    }
    .divloja{
        background-color: rgb(255, 255, 255);
        width: 70px;
        height: 70px;
        text-align: center;
        display: inline;
        margin-left:80%;
        margin-top:5%;
        position:fixed;
        border-radius: 50%;
        cursor:pointer;
    }
    .divloja:hover{
        width:72px;
        height: 72px;
        border: 2px solid rgb(0, 0, 0);
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.228);
        
    }
    .loja{
        width: 50px;
        height: 50px;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        position: absolute;
    }
    .divscan{
        background-color: rgb(255, 255, 255);
        width: 70px;
        height: 70px;
        text-align: center;
        display: inline;
        margin-left:80%;
        margin-top:13%;
        position:fixed;
        border-radius: 50%;
        cursor:pointer;
    }
    .divscan:hover{
        width:72px;
        height: 72px;
        border: 2px solid rgb(0, 0, 0);
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.228);
    }
    .scan{
        width: 50px;
        height: 50px;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        position: absolute;
    }
    h5{
        padding-bottom: 5px;
       border-bottom: 1px solid rgba(0, 0, 0, 0.194); 
    }
    .container_pedido{
        
        background-color: aliceblue;
    }
  
</style>