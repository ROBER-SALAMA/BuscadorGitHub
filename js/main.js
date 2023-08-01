const API = "https://api.github.com/users/";


// crea una instancia vue
const App = Vue.createApp({
    data(){
        return{
            // modelo search
            search: null
        };
    },
    //metodo para hacer la busqueda
    methods:{
        async doSearch (){
            const response = await fetch (API + this.search) //hacemos uso de la API + el modelo search
            const data = await response.json()
            console.log(data);
        }
    },
})
