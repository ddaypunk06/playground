import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  var buttonText = "Learn React";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Button href="https://reactjs.org" data-test-button={buttonText} variant="contained" color="primary">
          {buttonText}
        </Button>
      </header>
    </div>
  );
}

export default App;
