import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  var buttonText = "Learn React";
  var titleText = "Selenium Playground"

  return (
    <div className="App">
      <header>
      </header>
      <body>
      <AppBar position="static" variant="dense" data-test-header={titleText}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              {titleText}
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button href="https://reactjs.org" data-test-button={buttonText} variant="contained" color="primary">
              {buttonText}
            </Button>
            {/* <Grid container justify="center" spacing={2}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Button href="https://reactjs.org" data-test-button={buttonText+" "+value} variant="contained" color="primary">
                    {buttonText}
                  </Button>
                </Grid>
              ))}
            </Grid> */}
          </Grid>
        </Grid>
      </body>
    </div>
  );
}

export default App;
