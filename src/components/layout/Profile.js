import React, { Component } from "react";

import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin : 15
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
   
  },
});

class Profile extends Component {
  render() {
    const { profile, menu, platComponent, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div>{profile}</div>
          </Grid>
          <Grid item xs={3}>
            <div>{menu}</div>
          </Grid>
          <Grid item xs={9}>
            <div>{platComponent}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
