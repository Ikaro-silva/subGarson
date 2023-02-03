<template>
      <div class="containerGeral">
          <div class="container_pedido"
                    v-for="pedido in Pedidos" :key="pedido._id" >
          
                        <div class="pedido">
                            <h5>{{pedido.nome}}</h5>
                            <h6>{{pedido.ingredientes}}</h6>
                            <h6>R${{pedido.preço}}</h6>
                        </div>
          
            </div>
      </div>           

</template>
<script>
    export default{
        name:"lista_pedidos",
        data() {
            return {
                Pedidos:[]
            }
        },
        methods:{
          
            getListPedidos(){
                setInterval(() => {
                    const pedidos=localStorage.getItem('pedidos')
                    const pedido=JSON.parse(pedidos)
                    this.Pedidos=pedido
                }, 300);
               
            }
        },
        mounted() {
            this.getListPedidos()
        },
    }
</script>
<style scoped>
.containerGeral{
    background-color: #212529;
    width: 30%;
    margin-left:68%;
    margin-top:3%;
   
    position:fixed;
}
 .container_pedido{
    
    color: white;
    
 }

</style>