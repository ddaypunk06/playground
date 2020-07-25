import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class PGButton extends Component {
    
    render() {
        return <Button href="https://reactjs.org" data-test-button={this.props.text} variant="contained" color="primary">
        {this.props.text}
      </Button>
    }
}

export default PGButton;