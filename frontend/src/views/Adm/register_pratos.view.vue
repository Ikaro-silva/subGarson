<template>
    <navBarComponent/>
    <register_pratosComponentVue/>
</template>

<script>
    import navBarComponent from '../../components/header/navBar.component.vue';
    import register_pratosComponentVue from '../../components/Pratos/register_pratos.component.vue';
    export default{
        name:'Adm Views',
        components:{register_pratosComponentVue,navBarComponent}
    }
</script>