import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class PGAppBar extends Component {
    
    render() {
        return <AppBar position="static" variant="dense" data-test-header={this.props.title} margin={2}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    }
}

export default PGAppBar;