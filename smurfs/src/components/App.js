import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Smurf from './Smurf';
import AddSmurf from './AddSmurf';

export function App({ smurfs, getSmurfs }) {
  useEffect(() => {
    getSmurfs();
  }, []);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurf />
      <div>
        {
          smurfs.smurfs.map(smurf => {
            return <Smurf key={smurf.id} smurf={smurf}/>
          })
        }
      </div>
    </div>
  );
}

export default connect(state => state, actionCreators)(App);
