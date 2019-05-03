import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import red from '@material-ui/core/colors/red';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
      backgroundColor: red[500],
  }
};


const appBar = (props) => {
    const { classes } = props;
    return (
        <div>
            <AppBar>
                <Toolbar className={classes.appBar} >
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Pokedex
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

appBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(appBar);
