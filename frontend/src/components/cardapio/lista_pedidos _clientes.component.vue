<template>
    <div class="container_cardapio"
            v-for="pedido in pedidos" :key="pedido._id">
                
                    <div class="pedido">
                        <h5>{{pedido.nome}}</h5>
                        <h6>{{pedido.ingredientes}}</h6>
                        <h6>R${{pedido.preço}}</h6>
                    </div>
                    
    </div>            

</template>
<script>
    export default{
        name:"lista_pedidos",
        data() {
            return {
                
            }
        },
        methods:{
            getList(){
                const pedidos=localStorage.getItem('pedidos')
                console.log(pedidos)
            }
        },
        mounted() {
            
        },
    }
</script>