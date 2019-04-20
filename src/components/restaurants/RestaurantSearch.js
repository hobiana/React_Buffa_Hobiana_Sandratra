import React, { Component } from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    padding: 15
  },
  searchTitle: {
    color: 'black',
    fontSize: '25',
    fontWeight: 'bold'
  },
  keyWordFormControl: {
    display: 'row'
  },
  addKeyWordButton: {
    marginTop: 10,
    marginLeft: 5
  },
  chipContainer: {
    marginTop: 5
  },
  chip: {
    marginTop: 2,
    marginLeft: 2
  }
}

class RestaurantSearch extends Component {
  render() {
    const { searchName,
            searchCook,
            searchDesc,
            desc,
            onChangeSearchName,
            onChangeSearchCook,
            onChangeSearchDesc,
            addDesc,
            deleteDesc,
            classes } = this.props;
    return (
      <Paper
        className={ classes.container }
        elevation={2}>
        <Typography
          className={classes.searchTitle}>
          Recherche:
        </Typography>
        <FormControl>
          <TextField
              label="Nom"
              value={searchName}
              onChange={onChangeSearchName} />
        </FormControl>
        <FormControl>
          <TextField
              label="Cuisine"
              value={searchCook}
              onChange={onChangeSearchCook} />
        </FormControl>
        <div className={classes.keyWordFormControl}>
          <TextField
              label="Ajouter un mot clé"
              value={searchDesc}
              onChange={onChangeSearchDesc} />
          <Button 
            className={classes.addKeyWordButton}
            variant="outlined"
            onClick={() => addDesc(searchDesc)}>
            Ajouter
          </Button>
        </div>
        <div style={styles.chipContainer}>
          {desc.map((d, index) =>  (
            <Chip
              className={classes.chip}
              key={index}
              label={desc[index]}
              variant="outlined"
              onDelete={() => deleteDesc(index)}
            />
          ))}
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles) (RestaurantSearch)