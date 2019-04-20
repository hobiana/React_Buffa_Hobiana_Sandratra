import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCart from '@material-ui/icons/AddShoppingCartOutlined';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addToCart } from '../action/cartActions';

const styles = theme => ({
  resto: {
    paddingTop: '10px'
  }
});

class MenuPlat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idmenu: -1
    }
  }

  HandleMenu = (idmenu) => {
    console.log("idmenu", idmenu)
    this.props.changeidmenu(idmenu);
  }

  render() {
    const { menu, restaurant, classes } = this.props;

    return (

      <Paper>
        <Typography
          align="center"
          component="span"
          variant="h4"
          className={classes.resto}>
          {restaurant.nom}
        </Typography>
        <Typography
          align="center"
          component="span"
          variant="h5">
          Menus
          </Typography>
        <List>
          <div>
            <div >
              <ListItem
                button
                alignItems="flex-start">
                <ListItemText
                  onClick={this.props.test.bind(this, -1)}
                  primary={"Tous les plats"}
                />
              </ListItem>
              <Divider />
            </div>
            {menu.map(({ nom, id , prix}, index) => (
              <div key={index}>
                <ListItem
                  button
                  alignItems="flex-start"
                  key={index}
                >
                  <ListItemText
                    onClick={this.props.test.bind(this, id)}
                    primary={nom}
                  />
                  <IconButton
                    aria-label="Ajouter au panier"
                    onClick={() => this.props.addToCart({id:id,nom:nom, prix:prix})}
                  >
                    <AddShoppingCart />
                  </IconButton>
                </ListItem>
                <Divider />
              </div>
            ))}
          </div>
        </List>
      </Paper>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch)
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}


//export default connect(mapDispatchToProps)(MenuPlat);
export default withStyles(styles)(connect(null, mapDispatchToProps)(MenuPlat));