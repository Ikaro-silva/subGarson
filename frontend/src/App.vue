<template>
  <headerComponent/>
  <RouterView id="rota"/>
  <footerComponentVue/>
</template>
<script >
   import footerComponentVue from './components/foote/foote.component.vue'; 
   import headerComponent from './components/heade/heade.component.vue';
   export default{
    components:{headerComponent,footerComponentVue}
   }
</script>
  
<style >
  body{
    background-color: black;
    margin: 0;
    padding: 0;
  }
  #rota{
    height:auto;
  }

</style>
