import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
      <ButtonGroup
        // orientation="vertical"
        // disableElevation
        size="large"
        variant="contained"
        color="primary"
        // disabled
      >
        <Button
          // disabled
          startIcon={<SaveIcon />}
          onClick={() => {
            let x = window.confirm('Yes or no?');
            console.log('resp > ', x);
          }}
        >
          Save
        </Button>
        <Button
          // fullWidth
          startIcon={<DeleteIcon />}
          onClick={() => {
            let x = window.confirm('Yes or no?');
            console.log('resp > ', x);
          }}
        >
          Discard
        </Button>
      </ButtonGroup>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
