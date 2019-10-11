import * as types from "./actionTypes";

const initState = {
    smurfs: []
}

export function smurfReducer(state = initState, action){
    switch (action.type){
        case types.GET_SMURFS:
            return {...state, smurfs: action.payload }
        default: 
        return state;
    }
}