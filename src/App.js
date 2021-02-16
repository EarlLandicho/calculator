import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import ConversionPage from './pages/conversion.component';
import StandardCalculatorPage from './pages/standard.component';
import HomePage from './pages/homepage.component';

function App() {
  return (
    <div>
      <Link exact to='/standard'>Standard</Link>
      <br></br>
      <Link exact to='/scientific'>Conversion</Link>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/standard" component = {StandardCalculatorPage}/>
        <Route exact path = "/scientific" component = {ConversionPage}/>
      </Switch>
    </div>
  );
}

export default App;
