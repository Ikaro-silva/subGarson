<template>
    <navBarComponent/>
    <edite_pratosComponentVue/>
  
</template>
<script>
    import navBarComponent from '../../components/header/navBar.component.vue';
    import edite_pratosComponentVue from '../../components/Pratos/edite_pratos.component.vue';
    export default{
        name:"editar pratos views",
        components:{
            edite_pratosComponentVue,
            navBarComponent
        }
    }
</script>