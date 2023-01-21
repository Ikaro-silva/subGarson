<template>
    <div class="img">
         <div class="master">
             <div class="container">
                 <h1>
                     Cadastro de Pratos
                 </h1>
                 <Form @submit="createUser(e)">
                     <!-- CAMPO DO NOME  -->
                     <div class="cotainerInput">
                         <label>Nome do prato</label>
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
                         <label>ingredientes</label>
                         <Field
                             type="text"
                             name="ingredientes"
                             id="ingredientes"
                             :rules="validate"
                             v-model="ingredientes"
                         />
                         <ErrorMessage class="msgErr" name="email"/>
                     </div>
                     <!-- CAMPO DE SENHA -->
                     <div class="cotainerInput">
                         <label>Preço</label>
                         <Field
                             type="text"
                             name="preço"
                             id="preço"
                             :rules="validate"
                             v-model="preço"
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
     import servicesPratos from "../../services/servicePratos";
     import swal from"sweetalert"
     export default{
         name:"register_prtos",
         components:{Form,Field,validate,ErrorMessage},
         data(){
             return{
                 
                 nome:null,
                 ingredientes:null,
                 preço:null
                 
             }
         },
         methods:{
           
             async createUser(e){
                 e.preventDefault();
                 
                 const data={
                     nome:this.nome,
                     ingredientes:this.ingredientes,
                     preço:this.preço
                 }
                 try{
                     await servicesPratos.createPratos(data)
                     swal({
                         title: 'Excelente!',
                         text: 'Prato cadastrado com sucesso!',
                         icon: 'success',
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
                            text: 'Verifique os campos!!',
                            icon: 'error',
                        });
                    }
                }
                    
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
         
     }
     .container{
         margin:auto;
         width: 420px;
         background-color: rgba(32, 28, 28, 0.793);
         border-radius: 8px 8px 0 0;
         padding-bottom: 20px;
     }
    
     .master>.container>h1{
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