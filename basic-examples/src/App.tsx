import React from 'react';
import './App.css';
import logo from './logo.svg';
import * as Value from './constants/value';
import Header from './components/ComponentsAndProps';
import Toggle from './components/HandlingEvents';
import NumberList from './components/ListAndKeys';
import SelectForm from './components/Forms';
import WelcomeDialog from './components/CompositionVsInheritance';

function App() {
  return (
    <div className="App">
      <Header logo={logo} user={Value.user} />
      <Toggle />
      <NumberList numbers={Value.numbers} />
      <SelectForm />
      <WelcomeDialog />
    </div>
  );
}

export default App;
