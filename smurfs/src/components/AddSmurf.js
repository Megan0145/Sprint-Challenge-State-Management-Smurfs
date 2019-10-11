import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from 'styled-components';

const StyledAddSmurf = styled.div`
    form {
        display: flex;
        width: 60vw;
        justify-content: space-around;
        input {
            height: 2rem;
            border-radius: 6px;
            border: none;
            
            text-align: center;
        }
        button {
            width: 8rem;
            border: none; 
            border-radius: 6px;
            background-color: #55a4c7;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
        }
    }
`;

export function AddSmurf({ formVals, updateInput, addSmurf }) {
  const onValueChange = evt => {
    updateInput(evt.target);
  };
  const onAddSmurf = (name, age, height) => {
    addSmurf(name, age, height);
  };
  return (
    <StyledAddSmurf>
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
    </StyledAddSmurf>
  );
}
export default connect(
  state => state,
  actionCreators
)(AddSmurf);
