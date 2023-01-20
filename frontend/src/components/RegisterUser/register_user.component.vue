<template>
   <div id="master">
        <div class="container">
            <h1>
                Cadastro de Usuarios
            </h1>
            <form>
                <!-- CAMPO DO NOME  -->
                <div class="cotainerInput">
                    <label>Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id=""
                    >
                </div>
                <!-- CAMPO DO EMAIL -->
                <div class="cotainerInput">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        id=""
                    >
                </div>
                <!-- CAMPO DE SENHA -->
                <div class="cotainerInput">
                    <label>Senha</label>
                    <input
                        type="password"
                        name="email"
                        id=""
                    >
                </div>
                <div class="buton">
                    <button>Criar</button>
                </div>
            </form>
        </div>
   </div>
</template>
<script>
    export default{
        name:"register_user"
    }
</script>
<style scoped>
 
    .container{
        margin:100PX auto;
        width: 420px;
        background-color: rgba(255, 254, 254, 0.132);
        border-radius: 8px 8px 0 0;
        height:350px;
        
    }
   
    h1{
        color: white;
        text-align: center;
        margin-top:1px;
        background-color: #3D0F0F;
        height:50px;
        border-radius: 8px 8px 0 0;
    }
    label{
        color: white;
        display: block;
        margin:3px 0 8px 10px;
        text-align: justify;
        font-size:1.1em;

    }
    input{
        width:400px;
        height:30px;
        cursor: pointer;
        border: none;
        
    }
    .cotainerInput{
        text-align: center;
    }
    .buton{
        margin-top:30px;
        text-align: center;
    }
    button{
        width: 350px;
        height:35px;
        font-size: 1.1em;
        font-weight: bold;
        color:rgb(152, 149, 149);
        background-color: #3D0F0F;
        border:groove 4px rgb(152, 149, 149);
    }
    button:hover{
        color: white;
        border-color: white;
        cursor: pointer;
    }
</style>