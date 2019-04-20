import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
//import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCart from '@material-ui/icons/AddShoppingCartOutlined';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import { addToCart } from '../action/cartActions';
//import { Grid } from '@material-ui/core';



const styles = theme => ({
  card: {
    'margin-bottom': '10px',
    'overflow': 'initial'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: 'red'
  },
});

class RestaurantCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  getFirtLetter = (text) => {
    return text.charAt(0);
  }

  render() {
    const { classes, plat, isFromMenu } = this.props;
    console.log(isFromMenu)
    return (
      <Card className={classes.card + " "}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.getFirtLetter(plat.nom)}
            </Avatar>
          }
          title={plat.nom}
          subheader={plat.prix + " €"}
        />
        <CardContent>
          <div >
            <ListItem button alignItems="flex-start">
              <img
                style={{ maxWidth: 200 }}
                src={`/images/plats/${plat.photo}`}
                alt={plat.nom} />
              <ListItemText
                primary={"Type: " + plat.type}
                secondary={plat.description}
              />
            </ListItem>
            <Divider />
          </div>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {
            (isFromMenu == false) ? (
              <IconButton 
                aria-label="Ajouter au panier"
                onClick={() => this.props.addToCart(plat)}
                >
                <AddShoppingCart className={classes.actions} />
                <Typography> Ajouter au panier</Typography>
              </IconButton>
            ) : (
                ""
              )
          }
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        </Collapse>
      </Card>
    );

  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch)
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(RestaurantCard));