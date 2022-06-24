import React from 'react';
import {addDoc, collection} from 'firebase/firestore'
import {DB} from '../Firebase/firebaseConfig'

const RickandMorty = () => {

    const url = 'https://rickandmortyapi.com/api/character/'

    const cargarApi = async (url)=>{
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data.results)
       //enviarAFirebase(data.results)

    }
    cargarApi(url)

    const enviarAFirebase = (data)=>{
        data.forEach (card => {

            const {id, name, image, episode, status}=card

            // asignar lo que estoy capturando en la apiKey a collecion de firestore

            const cargarDatos ={
                idApi: id,
                name: name,
                image: image,
                episode: episode,
                status: status, 
            }

            addDoc(collection(DB, "rickandmorty"), cargarDatos)
            .then(resp => console.log('Datos agregado'))
            .catch(error=> console.warn(error))
        })

    }

    return (
        <div>
            <h1>api</h1>
        </div>
    );
};

export default RickandMorty;