import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { google } from "../../Firebase/firebaseConfig";
import { typesLogin } from "../types/types"

//----------------Login--------------------------------
export const loginAsync =(email, pass)=>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
        .then(({user})=>{
            console.log("Usuario Autorizado Bienvenido")
            dispatch(loginSync(email, pass))
        })
        .catch((error)=>{
            console.warn(error, "Usuario No autorizado")

        })

    }
}

export const loginSync = (email, pass)=>{
    return {
        type: typesLogin.login,
        payload: {
           email, pass
       }
    }
}
//--------------------Google--------------------------
export const GoogleLogin = ()=>{
    return (dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user})=>{
            console.log(user, user.displayName, user.email, "Usuario Autorizado")
            dispatch(registerUserSync(user.displayName, user.email, ))
        })
        .catch((error)=>{
            console.warn(error)

        })
    }
}

//---------------------Registrar usuario Nuevo--------------------------------------
export const registerUserAsync = (nombre, email, pass)=>{
        return (dispatch)=>{
            const auth = getAuth()
            console.log(auth)
            createUserWithEmailAndPassword( auth, email, pass)
            .then(async({user})=> {
                 await updateProfile(auth.currentUser, {displayName : nombre})
                dispatch(registerUserSync(nombre, email, pass))
                console.log(user, 'Usuario Registrado')
            })
            .catch(error =>console.warn(error))

        }
}


export const registerUserSync = (nombre, email, pass) => {
     return {
        type: typesLogin.register,
        payload: {
            nombre, email, pass
       }
    }
}