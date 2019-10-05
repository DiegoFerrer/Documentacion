<script>
/* 
	Para hacer peticiones externas, hay que instalar el siguiente modulo
		* npm i vue-resource
	en main.js importar vue resource
		import VueResource from 'vue-resource'
		vue.use(vueResource)
*/

data() {
    return {}
    methods:{
        saludar(){
            console.log('hola')
        }
    },
    created(){ // create ejecuta algo apenas el componente es creado
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(res => this.users = res.data)
    }
}
</script>

