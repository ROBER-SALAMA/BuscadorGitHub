const API = "https://api.github.com/users/";


// crea una instancia vue
const App = Vue.createApp({
    data() {
        return {
            // modelo search
            search: null,
            // modelo result
            result: null,
            // modelo error
            error: null
        };
    },
    //metodo para hacer la busqueda
    methods: {
        async doSearch() {
            // limpia las propiedades
            this.result = this.error = null
            try {
                const response = await fetch(API + this.search) //hacemos uso de la API + el modelo search
                // si la respuesta no es ok mostrara el error
                if(!response.ok) throw new Error("User not fout")
                const data = await response.json()
                console.log(data);
                // muestra la info del resultado
                this.result = data
            } catch (error) {
                // el this.error es la propieddd del modelo, y el "error" es lo que le vamos
                // a asignar dentro si sucede algo dentro del bloque try
                this.error = error
            }finally{
                // si se busca algo y todo sale bien se limpia la caja de busqueda
                this.search = null
            }
        }
    },
})
