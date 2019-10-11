import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function App({ smurfs, getSmurfs }) {
  useEffect(() => {
    getSmurfs();
  }, []);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>
        {
          smurfs.smurfs.map(smurf => {
            return <p>{smurf.name}</p>
          })
        }
      </div>
    </div>
  );
}

export default connect(state => state, actionCreators)(App);
