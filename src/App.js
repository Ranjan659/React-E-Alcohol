import React from 'react';
// import logo from './logo.svg';
// import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import Home from './components/Home';
import Combo from './components/Combo';
import Recepies from './components/Recepies';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Beer from './components/Beer';
import Brandy from './components/Brandy';
import Vodka from './components/Vodka';
import Wishkey from './components/Wishkey';
import Gin from './components/Gin';
import Rum from './components/Rum';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/combo"  component={Combo}/>
        <Route path="/recepies" component={Recepies}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/terms"  component={Terms}/>
        <Route path="/beer"  component={Beer}/>
        <Route path="/brandy"  component={Brandy}/>
        <Route path="/vodka"  component={Vodka}/>
        <Route path="/wishkey"  component={Wishkey}/>
        <Route path="/rum"  component={Rum}/>
        <Route path="/gin"  component={Gin}/>
      </Switch>
    </Router>
  );
}

export default App;
