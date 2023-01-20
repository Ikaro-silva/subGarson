<template>
  <headerComponent/>
  <RouterView id="rota"/>
  <footerComponentVue/>
</template>
<script >
   import footerComponentVue from './components/footer/footer.component.vue'; 
   import headerComponent from './components/header/header.component.vue';
   export default{
    components:{headerComponent,footerComponentVue}
   }
</script>
  
<style>
  body{
    background-color:rgb(0, 0, 0) ;
    margin: 0;
    padding: 0;
  }
  #rota{
    height:100vh;
  }

</style>
