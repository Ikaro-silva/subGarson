<template>
    <div id="header">
        <div id="img"><img src="../../../public/img/comidas-tipicas-capa2019.jpg" alt="prato de comida"></div>
        <div id="nome">
            <h1>Restaurante Coma Bem !</h1>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Header"
        
    }
</script>


<style scoped>
    #header{
        display:flex;
        justify-content: space-between;
        background-image: linear-gradient(to left,#5d2222,#000000);
        align-items: center;
        height:102px;
        
    }   
    img{
        width:200px;
    }
    #nome{
        margin-right: 20px;
        color: white;
        
    }

</style>