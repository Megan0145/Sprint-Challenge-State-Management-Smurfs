import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import AddSmurf from "./AddSmurf";
import styled from "styled-components";
import Village from "./Village";

const StyledApp = styled.div`
  background-image: url("village_background.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  img {
    width: 20vw;
    margin: 1rem;
  }
`;

export function App({ getSmurfs }) {
  useEffect(() => {
    getSmurfs();
  }, []);
  return (
    <StyledApp>
      <img src="Smurfs-Logo.png" />
      <AddSmurf />
      <Village />
    </StyledApp>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
