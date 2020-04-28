import React from 'react';
import NavApp from './components/NavApp';
import MainApp from './components/MainApp';
import DetailApp from './components/DetailApp';
import OptionApp from './components/OptionApp';
import ConfirmApp from './components/ConfirmApp';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='wrapper-app'>
        <NavApp />
        <MainApp />
        <DetailApp />
      </div>
      < OptionApp />
      <ConfirmApp />
    </div>
  );
}

export default App;
