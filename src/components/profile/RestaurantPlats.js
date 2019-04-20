import { withStyles } from '@material-ui/core/styles';
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import RestaurantCard from './RestaurantCard';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  container: {
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10
  },
  sortContainer: {
    float: 'right',
    display: 'row',
    width: 300
  },
  sortLabel: {
    float: 'right',
    marginRight: 10
  },
  sortSelect: {
    float: 'right',
    marginTop: -5,
    width: 100
  },
  resultLabel: {
    float: 'left'
  },
  list: {
    marginTop: 30,
    overflow: 'auto',
    maxHeight: 500,
    background: ''
  }
}

class RestaurantPlats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'nom'
    }
  }

  sort = (property) => {
    switch (property) {
      case 'type':
        return (a, b) => {
          return a.type >= b.type ? 1 : -1;
        }
      default:
        return (a, b) => {
          return a.nom >= b.nom ? 1 : -1;
        }
    }
  }

  onChangeOrderBy = (e) => {
    this.setState({ orderBy: e.target.value });
  }

  render() {
    const { orderBy } = this.state;
    const { classes, plats, isFromMenu} = this.props;

    console.log("itoo", plats.sort(this.sort(this.state.orderBy)))
    return (
      <Grid item container xs={12} spacing={16}>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
            Trie et recherche
            <Select
              className={classes.sortSelect}
              name="sort"
              value={orderBy}
              onChange={this.onChangeOrderBy}
              fullWidth
              inputProps={{
                id: 'sort',
              }}>
              <MenuItem value={'nom'}>Nom</MenuItem>
              <MenuItem value={'type'}>Type</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            {
              plats.sort(this.sort(this.state.orderBy)).map((plat, index) => (
                <div key={index}>
                  <RestaurantCard plat={plat} isFromMenu={isFromMenu} />
                </div>
              ))

            }
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(RestaurantPlats);
