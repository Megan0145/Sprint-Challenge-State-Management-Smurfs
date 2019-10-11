import * as types from "./actionTypes";

const initState = {
  smurfs: []
};
export function smurfReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return { ...state, smurfs: action.payload };
    default:
      return state;
  }
}

const initFormState = {
  name: "",
  age: 0,
  height: "0.0cm"
};
export function addSmurfFormReducer(state = initFormState, action) {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}
