<template>
    <div class="containerGeral">
      <div class="divBtnfechar">
          <button @click="mostrarCardapio">
               <font-awesome-icon icon="fa-solid fa-xmark" class="btnFechar"/>
          </button>
      </div>
          <div class="container_pedido"
          v-for="pedido in Pedidos" :key="pedido._id" >
      
              <div class="pedido">
                  <h6>PRATO: {{pedido.nome}}</h6>
                  <h6>INGREDIENTES: {{pedido.ingredientes}}</h6>
                  <h6>VALOR :R$ {{pedido.preço}}</h6>
              </div>

              <div class="containerBtn+-">
                  <button @click="aumentarQuantPedidos(pedido._id)">
                      <font-awesome-icon icon="fa-solid fa-plus" class="btn+" />
                  </button>
              
                  <h5>{{pedido.quantidade}}</h5>

                  <button @click="diminuirQuantPedidos(pedido._id)">
                      <font-awesome-icon icon="fa-solid fa-minus" class="btn-" />
                  </button>
              </div>
              <div>
                  <button @click="deletarPedido(pedido._id)">
                      <font-awesome-icon icon="fa-solid fa-trash-can" />
                  </button>
              </div>
                  
          </div>
          
    </div>
    <div @click="divFazerPedido" >
      <button class="divFazerPedido" >
          Fazer Pedido  <font-awesome-icon icon="fa-solid fa-check" style="height: 20px;" />
      </button>
    </div>           

</template>
<script>
import  uteis from '../../ulteis'
import servicePedidos from '../../services/servicePedidos';
  export default{
      name:"lista",
      data() {
          return {
              Pedidos:[],
              
          }
      },
      methods:{
        
          getListPedidos(){
              
              setInterval(() => {
                  const pedidos=localStorage.getItem('pedidos')
                  
                  const pedido=JSON.parse(pedidos)
                  this.Pedidos=pedido
              },200);
             
          },
          
         async aumentarQuantPedidos(id){
          const quant=1
          const array =await uteis.mudarQuantPedidos(id,quant)
          
          localStorage.setItem("pedidos",JSON.stringify(array))

         },
         async diminuirQuantPedidos(id){
          const quant=-1
          const array =await uteis.mudarQuantPedidos(id,quant)
          
          localStorage.setItem("pedidos",JSON.stringify(array))

         },

         deletarPedido(id){
          const array= uteis.deletarPedido(id)
          localStorage.setItem("pedidos",JSON.stringify(array))
         },
         
         async divFazerPedido(){
          try{
              var todosPedidos=localStorage.getItem('pedidos')
              todosPedidos=JSON.parse(todosPedidos)
              
              await servicePedidos.createPedidos(todosPedidos)
          }
          catch(err){
              console.log()
          }
          
          
      },

          mostrarCardapio(){
              this.$router.push('/')
          }
      },
      
      mounted() {
          this.getListPedidos()
      },
  }
</script>
<style scoped>
.containerGeral{
  background-color: #212529;
  
}   
.container_pedido{
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  border-bottom:1px solid rgba(211, 211, 211, 0.523);
  
}
.divBtnfechar{
  margin-left:95%;
  padding-top: 10px;
}
.pedido{
  padding: 20px 0px;
  
}
h5{
  display: inline;
  padding: 0 10px;
}
.divFazerPedido{
  background-color: #212529;
  display: inline;
  height:40px;
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 1.1em;
  border: none;

}
.divFazerPedido:hover{
  height:45px;
  background-color: #363e45;
  font-size: 1.2em;
  transition: 0.2s;
  text-shadow: 1px 1px 1px #212529;
}

</style>