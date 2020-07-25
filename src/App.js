import React from 'react';
import './App.css';
import PGButton from './components/pg-button.js'
import PGButtonGroup from './components/pg-button-group.js'
import PGAppBar from './components/pg-app-bar.js'
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <PGAppBar title="Selenium Playground"></PGAppBar>
        <Grid container spacing={2}>
         <Grid item xs={3}>
            <PGButton text="Learn React"></PGButton>
          </Grid>
          <Grid item spacing={3}>
           <PGButtonGroup identifier="group1"></PGButtonGroup>
          </Grid>
        </Grid>
      </body>
    </div>
  );
}

export default App;
