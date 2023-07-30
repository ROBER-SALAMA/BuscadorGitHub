const API = "https://api.github.com/users/";

// funcio para hacer la busqueda
async function doSearch (){
    const response = await fetch (API + 'ROBER-SALAMA') //hacemos uso de la API + nombre de usuario
    const data = await response.json()
    console.log(response);
}

// crea una instancia vue
const App = Vue.createApp({
    data(){
        return{
            message: "hello vue"
        };
    },
})
