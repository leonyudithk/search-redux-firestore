import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { DB } from '../../Firebase/firebaseConfig'
import {typesPlantas} from '../types/types'

//-------------------busqueda por nombre-------------------------------/
export const searchPlantaAsync = (nombre)=>{
    return async (dispatch) => {
        const collectionAListar =  collection(DB, "plantas")

        const q = query(collectionAListar, where('nombre', '>=', nombre), where('nombre', '<=', nombre + '~'))
        const datosQ = await getDocs(q)

        const planta = []
        datosQ.forEach((plantasBuscar =>{
            planta.push(plantasBuscar.data())
        }))
        dispatch(searchPlantaSync(planta))
    }
}


export const searchPlantaSync = (planta)=>{
    return{
            type: typesPlantas.search,
            payload: planta
    }
}

//------------------Listar Plantas------------------------------------/
export const listaplantaAsync = () =>{
    return async (dispatch)=>{
        const collectionListar = await getDocs(collection(DB, "plantas"))  
        console.log(collectionListar)
        const plantas= []
        collectionListar.forEach(lista =>{
            plantas.push({
                ...lista.data()
            })
        })
        console.log(plantas)
        dispatch(listaplantaSync(plantas))
    }
}
export const listaplantaSync = (planta)=>{
        return{
            type: typesPlantas.list,
            payload: planta
        }
}      
//---------------Agregar Planta-----------------------/

export const addPlantaAsync = (planta) => {
    return async (dispatch)=>{
        addDoc(collection(DB, "plantas"), planta)
        .then(resp => {
            dispatch(addPlantaSync(planta))
            //dispatch(listPlantaAsync())

        }
           )
        .catch(error => console.warn(error))

    }
}
export const addPlantaSync = (planta) => {
    return {
        type: typesPlantas.add,
        payload: planta
    }
}