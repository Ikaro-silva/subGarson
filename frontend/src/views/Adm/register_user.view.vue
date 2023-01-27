<template>
    <navBarComponentVue/>
   <register_userComponentVue/>
</template>
<script>
    import navBarComponent from '../../components/header/navBar.component.vue';
    import register_userComponentVue from '../../components/User/register_user.component.vue';
    export default{
        name:"register_user.view",
        components:{register_userComponentVue,navBarComponent}

    }
</script>