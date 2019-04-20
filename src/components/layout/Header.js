import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none'
  }
}

class Header extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          color="default">
          <Toolbar>
              <Link 
                className={classes.link}
                to="/">
                <Typography variant="h6" color="inherit">
                  Réstaurants
                </Typography>
              </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles) (Header)