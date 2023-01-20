<template>
    <div id="header">
        <div class="link">
               
        </div>
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


<style >
    #header{
        display:flex;
        justify-content: space-between;
        background-image: linear-gradient(to bottom,#5d2222,#3b1616);
        align-items: center;
        height:102px;
        
        
    }   

    #nome{
        
        margin-right: 20px;
        color: white;
        
    }

</style>