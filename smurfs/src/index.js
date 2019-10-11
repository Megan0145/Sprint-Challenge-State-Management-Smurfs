import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as reducers from './state/reducers';

const monsterReducer = combineReducers({
    smurfs: reducers.smurfReducer,
    formVals: reducers.addSmurfFormReducer
  });

const store = createStore(
    monsterReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
