import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { plantasReducers } from "../reducers/plantasReducers";
import { registerReducers } from "../reducers/registerReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers= combineReducers({
    login: registerReducers,
    plantas: plantasReducers,

})
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

);