import axios from "axios";
import * as types from "./actionTypes";

const smurfApi = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  axios
    .get(smurfApi)
    .then(res => {
      dispatch({ type: types.GET_SMURFS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export function updateInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: { name: target.name, value: target.value }
  };
}

export const addSmurf = (name, age, height) => dispatch => {
  axios
    .post(smurfApi, { name: name, age: age, height: height })
    .then(res => {
      // dispatch({type: types.POST_SMURF, payload: res.data})
      console.log(res);
    })
    .catch(err => console.log(err));
};
