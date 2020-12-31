import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import ScientificCalculatorPage from './pages/scientific.component';
import StandardCalculatorPage from './pages/standard.component';
import HomePage from './pages/homepage.component';

function App() {
  return (
    <div >
      <Link exact to='/standard'>Standard</Link>
      <br></br>
      <Link exact to='/scientific'>Scientific</Link>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/standard" component = {StandardCalculatorPage}/>
        <Route exact path = "/scientific" component = {ScientificCalculatorPage}/>
      </Switch>
    </div>
  );
}

export default App;
