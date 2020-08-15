import { createStore } from "redux";

const initialState = {
    jugadores: [{
            id: 1,
            nombre: "Rubén Cuevas",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPh0tEpWtEY68WaIlENgkIAgWsEIonf_VXf01x1t4uXAcSqvy1"
        },
        {
            id: 2,
            nombre: "César Avilés",
            foto: "https://assets.metrolatam.com/hub/2016/06/14/pulse-orlando-masacre-omar-mateen-selfie-900x600.jpg"
        },
        {
            id: 3,
            nombre: "Maribel Díaz",
            foto: "https://i.ytimg.com/vi/G0-bMmtWqPU/maxresdefault.jpg"
        },
        {
            id: 4,
            nombre: "Felipe Ramirez",
            foto: "https://www.ngenespanol.com/wp-content/uploads/2018/08/Visita-a-la-verdadera-Annabelle-de-manera-virtual.jpg"
        },
        {
            id: 5,
            nombre: "Miguel Chamorro",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS233ylft2UJ8cdTL0DxLScSvNM_jiiJOQZCb0T4KlK5vVofW73"
        },
        {
            id: 6,
            nombre: "Alexis López",
            foto: "https://static.viget.com/_960x718_crop_center-center_90_none/DYLAN-00894.jpg?mtime=20181211141117"
        },
        {
            id: 7,
            nombre: "Harold Gutierrez",
            foto: "https://images.assetsdelivery.com/compings_v2/fxquadro/fxquadro1702/fxquadro170200160.jpg"
        },
        {
            id: 8,
            nombre: "Manuel Rodriguez",
            foto: "https://cdn.lanetaneta.com/wp-content/uploads/2019/09/Annabelle-True-Story-y-lo-que-cambiaron-las-pel%C3%ADculas-de-780x405.jpg"
        },
        {
            id: 9,
            nombre: "Alejandro Rodríguez",
            foto: "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/1/6/a/3/16a3209890fd230b52a0cec58c5afbdd.jpg"
        },
        {
            id: 10,
            nombre: "Andrés Barnechea",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8XVsK9Ikt8tNAUtTzKlyEgsnrd0-I0E5e8ez6Z4DDIhri08Q-"
        },
        {
            id: 11,
            nombre: "Ricardo Varela",
            foto: "https://media.istockphoto.com/photos/portrait-of-a-handsome-oldfashioned-hipster-in-a-blue-shirt-and-picture-id1018779400?k=6&m=1018779400&s=170667a&w=0&h=VF9gAuOpo2jxtjU7p49I7fq-_H3jMMImXiQpI-nd3xw="
        },
        {
            id: 12,
            nombre: "Diego Rivera",
            foto: "https://cdn.shopify.com/s/files/1/1627/0171/products/2_icons_745eaa4c-3331-45d4-8d5e-f8d9767b916d_large.jpg?v=1577717376"
        }
    ],
    titulares: [],
    suplentes: []
};

const reducerEntrenador = (state = initialState, action) => {
    if(action.type === 'AGREGAR_TITULAR') {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === 'AGREGAR_SUPLENTE') {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    if (action.type === 'QUITAR_SUPLENTE') {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state;

};

export default createStore(reducerEntrenador);

// createStore = función de creación del store = almacén de datos
// tiene un estado inicial = inicialState
// función reductora = recibe el estado inicial y las action que actualizan el store
// paso final: asociar la creación del store con mi función encargada de actualizar el store = reducer