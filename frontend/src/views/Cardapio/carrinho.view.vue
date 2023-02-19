<template>
    <div>
        <lista_pedidosComponentVue/>
    </div>
</template>
<script>
    import lista_pedidosComponentVue from '../../components/cardapio/lista_pedidos.component.vue';
    export default{
        name:"carrinho",
        components:{
            lista_pedidosComponentVue
        }
    }
</script>