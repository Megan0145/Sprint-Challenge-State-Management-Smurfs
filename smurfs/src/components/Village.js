import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Smurf from "./Smurf";
import styled from "styled-components";

const StyledVillage = styled.div`
  width: 60vw;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  margin-bottom: 3rem;
  .smurfCount {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 10vh;
      width: 7vw;
    }
    h1 {
      font-size: 5rem;
    }
  }
  .smurfsList {
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export function Village({ smurfs }) {
  return (
    <StyledVillage>
      <div className="smurfCount">
        <img src="smurf.png" />
        <h1>{smurfs.smurfs.length}</h1>
      </div>
      <div className="smurfsList">
        {smurfs.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </div>
    </StyledVillage>
  );
}
export default connect(
  state => state,
  actionCreators
)(Village);
