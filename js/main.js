const API = "https://api.github.com/users/";


// crea una instancia vue
const App = Vue.createApp({
    data(){
        return{
            message: "hello vue"
        };
    },
    //metodo para hacer la busqueda
    methods:{
        async doSearch (){
            const response = await fetch (API + 'ROBER-SALAMA') //hacemos uso de la API + nombre de usuario
            const data = await response.json()
            console.log(data);
        }
    },
})
