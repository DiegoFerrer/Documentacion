<script >
    /* 
        npm install firebase
        npm install vuefire // es un conector de vue para firebase

        npm install firebase vuefire || para instalar los 2 juntos

    
    */

    // En main js
    import VueFire from 'vuefire';
    Vue.use(VueFire);

    // En App.vue
    import Firebase from 'firebase';
    
    // configuraicon de firebase console
    let config = {
        //firebase.md
    }

    let app = Firebase.initializeApp(config); // iniciar conexion a la base de datos
    let db = app.database();

    let linksRef = db.ref('links') // hace referencia a la colecion links en la base de datos  | si no existe, firebase la crea

    export default {
        name: 'app',
        firebase: {
            links: linksRef
        },
        data(){
            return{
                newLink:{
                    title:'',
                    autor:'',
                    url: ''
                }
            }
        },
        methods: {
            addLink(){
                linksRef.push(this.newLink)
            },
            deleteLink(link){
                linksRef.child(link['.key']).remove(); // para decir que de la coleccion de datos solo quiero el que le paso y borrarlo
            }
        }
    }
</script>

<html>
    <template>   
        <div>
            <form v-on:submit="addLink">
                <input v-model="newLink.title">
            </form>   
        </div>     
        <li><a v-bind:href="link.url"></a></li>
    </template>
</html>



<style >

</style>
