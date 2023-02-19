<template>
    <navBarComponent/>
    <lista_pratosComponent/>
</template>
<script>
    import navBarComponent from '../../components/heade/navBar.component.vue';
    import lista_pratosComponent from '../../components/Pratos/lista_pratos.component.vue';
    export default{
        name:'lista pratos views',
        components:{lista_pratosComponent,navBarComponent}

    }
</script>