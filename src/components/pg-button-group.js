import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class PGButtonGroup extends Component {
    
    render() {
        return <ButtonGroup data-test-button-group={this.props.identifier}>
        <Button>Test 1</Button>
        <Button>Test 2</Button>
        <Button>Test 3</Button>
      </ButtonGroup>
    }
}

export default PGButtonGroup;