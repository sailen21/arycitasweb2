import React from 'react';
import './App.css';
import Formulario from "./componentes/formulario";
import Lugares from './componentes/lugares';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TablaCitas from './componentes/tablaCitas';
function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/formulario">
            <Formulario></Formulario>
          </Route>
      
          <Route path="/citas">
              <TablaCitas></TablaCitas>
          </Route>
          <Route path="/lugares">
            
              <Lugares></Lugares>
          </Route>
          <Route path="/">
            <Formulario></Formulario>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
