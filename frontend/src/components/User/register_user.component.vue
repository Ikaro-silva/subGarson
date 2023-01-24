<template>
   <div class="img">
        <div class="master">
            <div class="container">
                <h1>
                    Cadastro de Usuarios
                </h1>
                <Form @submit="createUser(e)">
                    <!-- CAMPO DO NOME  -->
                    <div class="cotainerInput">
                        <label>Nome</label>
                        <Field
                            type="text"
                            name="nome"
                            id="nomes"
                            :rules="validate"
                            v-model="nome"
                        />
                        <ErrorMessage class="msgErr" name="nome"/>
                    </div>
                    <!-- CAMPO DO EMAIL -->
                    <div class="cotainerInput">
                        <label>Email</label>
                        <Field
                            type="email"
                            name="email"
                            id="email"
                            :rules="validateEmail"
                            v-model="email"
                        />
                        <ErrorMessage class="msgErr" name="email"/>
                    </div>
                    <!-- CAMPO DE SENHA -->
                    <div class="cotainerInput">
                        <label>Senha</label>
                        <Field
                            type="password"
                            name="senha"
                            id="senha"
                            :rules="validateSenha"
                            v-model="senha"
                        />
                        <ErrorMessage class="msgErr" name="senha"/>
                    </div>
                    <div class="buton">
                        <button @click="createUser">Criar</button>
                    </div>
                </Form>
            </div>
        </div>
   </div>
</template>
<script>
    import{Form,Field,validate,ErrorMessage} from "vee-validate"
    import servicesUser from "../../services/servicesUser";
    import swal from"sweetalert"
    export default{
        name:"register_user",
        components:{Form,Field,validate,ErrorMessage},
        data(){
            return{
                
                nome:null,
                email:null,
                senha:null
                
            }
        },
        methods:{
          
            async createUser(e){
                e.preventDefault();
                
                const data={
                    nome:this.nome,
                    email:this.email,
                    senha:this.senha
                }
                try{
                    await servicesUser.createUser(data)
                    swal({
                        title: 'Excelente!',
                        text: 'Usuário(a) cadastrado com sucesso!',
                        icon: 'success',
                    })
                    .then(()=>{
                        this.nome='',
                        this.email='',
                        this.senha=''
                    })
                }catch(error){
                        if(error.response.status==401){
                            swal({
                                title: 'Erro!',
                                text: 'Você não é autorizado,faça o login!!',
                                icon: 'error',
                            }).then(()=>{
                                this.$router.push('/admLogin')
                            })
                        }
                        else{
                            swal({
                                title: 'Erro!',
                                text: 'Nome ou Email ja cadastrados!!',
                                icon: 'error',
                            });
                        }
                        
                    }
                   
            },

            validateEmail(value){
                if (!value) {
                    return 'Campo obrigatorio';
                }
                
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!regex.test(value)) {
                    return 'Este tipo de Email é invalido!';
                }
                // All is good
                return true;
            },
            
            validateSenha(value){
                if(!value){
                    return 'Campo obrigatorio!'
                }
                
                if(value.includes(' ')){
                    return "Senha não pode obter espaços"
                }
                if(value.length<=8 && value.length>=6){
                    return true
                }
                return 'Senha deve ter entre 6 e 8 caracteres!'
                
            },
            validate(value){
                if(value){
                    return true
                }
                return "Campo obrigatorio"
            }
        }
    }
</script>
<style scoped>
    .img{
        height: 100%;
        background-image: url("../../../public/img/comidas-tipicas-capa2019.jpg");
        background-position: center top;
        background-repeat: no-repeat;
        background-size:cover;
        
       
    }
    .master{
        background-color: rgba(0, 0, 0, 0.629);
        height:100%;
        padding-top:100px;
        padding-bottom: 100px;
        
    }
    .container{
        margin:auto;
        width: 420px;
        background-color: rgba(32, 28, 28, 0.793);
        border-radius: 8px 8px 0 0;
        padding-bottom:20px;
        
    }
   
    .master>.container>h1{
        color: white;
        text-align: center;
        background-color: #3D0F0F;
        width:420px;
        height:50px;
        margin-left:-12px;
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
        width:380px;
        height:30px;
        margin-bottom: 5px;
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
    .buton>button{
        width: 350px;
        height:35px;
        font-size: 1.1em;
        font-weight: bold;
        color:rgb(152, 149, 149);
        background-color: #3D0F0F;
        border:groove 4px rgb(152, 149, 149);
    }
    .buton>button:hover{
        color: white;
        border-color: white;
        cursor: pointer;
    }
    .msgErr{
        color: red;
        
    }
</style>