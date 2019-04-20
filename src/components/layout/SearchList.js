import React, { Component } from 'react';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    container: {
        marginTop: 10,
        paddingTop: 5
    }
}

class SearchList extends Component {
    render() {
        const { searchComponent,
                listComponent,
                classes } = this.props;
        return (
            <Grid 
                container 
                spacing={24}
                className={classes.container}>
                <Grid item sm={1} />
                <Grid 
                    item 
                    sm={3}>
                    <div>{searchComponent}</div>
                </Grid>
                <Grid 
                    item 
                    sm={7}>
                    <div>{listComponent}</div>
                </Grid>
                <Grid item sm={1} />
            </Grid>
        );
    }
}

export default withStyles(styles) (SearchList)