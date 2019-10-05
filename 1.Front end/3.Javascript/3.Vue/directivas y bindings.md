<template>
	<test mgs="Hola" />  <!-- Para pasar datos de un componente padre a hijo | en script debe recibirlo props--> 

    <h1>{{ msg }}</h1>
   	<h1>{{ user.firstName }}</h1>
   	<div v-html="myHtml"></div> <!-- directiva de vue para indicar html -->
   	<div v-text="title"></div> <!-- directiva de vue para indicar una propiedad string -->
   	<div v-if="showName"></div> <!-- si es esto, haz/pinta lo siguiente -->
   	<div v-else="title"></div> <!-- caso contrario, haz/pinta lo siguiente -->
   	<div v-for="task in task"></div>  <!-- recorrer un loop -->
   	<input type="text" v-model="title">  <!-- twoway data binding de la propiedad title-->
   	<button v-on:click="saludar">
   		click me
   	</button>
   	<form v-on:submit="addUser"></form>
   	<div>
   		{{fullName}}
   	</div>
   	<div>
   		{{msg}}
   	</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {
      	firstName : 'Perrito',
      	lastName: 'Juanes',
      },
      myHtml : '<h3>Hola mundo</h3>',
      showName: true;
      task:[
	      {title:'comer'},
	      {title:'almorzar'}
      ]
    }
  },
  methods:{
  	saludar(){
  		console.log('hola')
  	}
  },
  computed:{
  	fullName(){
  		return this.user.firstName + ' ' + this.user.lastName;
  	}
  },
  props:{
  	msg:{
  		type: Stringm
  		default:'Mensaje por defecto'
  	}
  }
}
</script>


<style scoped>
</style>
