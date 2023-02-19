<template>
    <navBarComponentVue/>
    <login_userComponent/>
</template>

<script>
    import navBarComponentVue from '../../components/heade/navBar.component.vue';
    import login_userComponent from '../../components/User/login_user.component.vue';
    export default{
        name:'Adm Views',
        components:{login_userComponent,navBarComponentVue}
    }
</script>