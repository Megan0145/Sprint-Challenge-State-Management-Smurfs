import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from "styled-components";

const StyledSmurfCard = styled.div`
  width: 10rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin: 2rem;
`;

export function Smurf({ smurf }) {
  return (
    <StyledSmurfCard>
      <h3>Name: {smurf.name}</h3>
      <h3>Age: {smurf.age}</h3>
      <h3>Height: {smurf.height}</h3>
    </StyledSmurfCard>
  );
}
export default connect(
  state => state,
  actionCreators
)(Smurf);
