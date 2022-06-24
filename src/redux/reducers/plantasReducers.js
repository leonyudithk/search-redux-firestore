import { typesPlantas } from "../types/types"

const initialState={
    planta : []
}

export const plantasReducers =(state = initialState, action)=>{
    switch (action.type) {
        case typesPlantas.add:
            return{
                     planta : [action.payload]
            }
          
                   
    
        default:
           return state
    }
}