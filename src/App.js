import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          // disabled
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            let x = window.confirm('Yes or no?');
            console.log('resp > ', x);
          }}
        >
          Hello World
        </Button>
        <Button
          variant="contained"
          color="primary"
          // size="small"
          onClick={() => {
            let x = window.confirm('Yes or no?');
            console.log('resp > ', x);
          }}
        >
          Hello World
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            let x = window.confirm('Yes or no?');
            console.log('resp > ', x);
          }}
        >
          Hello World
        </Button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
