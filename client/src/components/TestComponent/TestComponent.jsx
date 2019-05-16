import React, { Component, } from 'react';
import PropTypes             from 'prop-types';
import { withStyles }        from '@material-ui/core/styles';
import AppBar                from '@material-ui/core/AppBar';
import Toolbar               from '@material-ui/core/Toolbar';
import Typography            from '@material-ui/core/Typography';
import { styles, }           from './TestComponent.style.js';

class TestComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    render() {

        const { classes } = this.props;

        return (
					<div className={classes.root}>
      			<AppBar color='primary' position="static">
        			<Toolbar>
          			<Typography variant="h6" color="inherit">
            			Discussion Board
          			</Typography>
        			</Toolbar>
      			</AppBar>
    			</div>
        );
    }

}

TestComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestComponent);