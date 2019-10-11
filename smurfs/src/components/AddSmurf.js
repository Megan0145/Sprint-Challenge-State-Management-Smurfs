import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function AddSmurf({ formVals, updateInput, addSmurf }) {
  const onValueChange = evt => {
    updateInput(evt.target);
  };
  const onAddSmurf = (name, age, height) => {
    addSmurf(name, age, height);
  };
  return (
    <div>
      <form>
        <input
          placeholder="Name"
          value={formVals.name}
          onChange={onValueChange}
          name="name"
        />
        <input
          placeholder="Height"
          value={formVals.height}
          onChange={onValueChange}
          name="height"
        />
        <input
          placeholder="Age"
          value={formVals.age}
          onChange={onValueChange}
          name="age"
        />
        <button
          onClick={onAddSmurf(formVals.name, formVals.age, formVals.height)}
        >
          Add Smurf
        </button>
      </form>
    </div>
  );
}
export default connect(
  state => state,
  actionCreators
)(AddSmurf);
