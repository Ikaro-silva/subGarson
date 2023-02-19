<template>
    <div>
        <div class="containerNavbar">
           <div class="containerLink">
               <router-link class=link to="/admRegister_User">Registrar User</router-link>
           </div>
           <div class="containerLink">
               <router-link class=link to="/admLogin">Login</router-link>
           </div>
           <div class="containerLink">
               <router-link class=link to="/admRegister_Pratos">Registrar Pratos</router-link>
           </div>
           <div class="containerLink">
               <router-link class=link to="/admLista_Pratos">Lista de Pratos</router-link>
           </div>
           
        </div>
    </div>
</template>
<script>
    export default{
        name:'Menu adm'
    }
</script>
<style scoped>
    .containerNavbar{
        display: flex;
        justify-content:space-evenly ;
        height:40px;
        text-align: center;
        background-image: linear-gradient(to bottom,#3b1616,#2e1111);
        border-top:1px rgba(255, 255, 255, 0.491) solid ;
        width:100%;
    }
    .containerLink{
        margin-top:5px;
    }
    .link{
        
        color: white;
        text-decoration: none;
    }
    .link:hover{
        font-size: 1.1em;
        color:rgb(202, 187, 187)
    }
</style>