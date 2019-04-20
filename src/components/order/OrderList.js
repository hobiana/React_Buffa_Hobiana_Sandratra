import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addQuantity,subQuantity,removeItem } from '../action/cartActions';

const styles = {
  list: {
    overflow: 'auto',
    maxHeight: 400
  },
  listItem: {
    color: 'white',
    background: 'white'
  },
  closeButton: {
    color: '#F00'
  }
}

class OrderList extends Component {
  render() {
    const { orders,
      onDeleteOrder,
      classes } = this.props;
    return (
      <List className={classes.list}>
        {orders.map(({ nom, prix, quantite }, index) => (
          <div key={index}>
            <ListItem
              alignItems="flex-start"
              key={index} >
              <ListItemText
                primary={<Typography style={{ color: '#FFF' }}>{nom}</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      style={{ color: '#FFF' }}
                      component={'span'}>
                      {prix + "€"}
                    </Typography>
                    <Typography style={{ color: '#FFF' }}>
                      <Button onClick={() => this.props.subQuantity(nom)} 
                        style={{ color: '#FFF' }}>-</Button>
                        {"Pour: "+quantite}
                      <Button onClick={() => this.props.addQuantity(nom)} 
                        style={{ color: '#FFF' }}
                      >+</Button>
                    </Typography>
                  </React.Fragment>
                }
              />
              <Button
                className={classes.closeButton}
                onClick={() => this.props.removeItem(nom)}  >
                <CloseIcon />
              </Button>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch)
  return {
    addQuantity: (id) => dispatch(addQuantity(id)),
    subQuantity: (id) => dispatch(subQuantity(id)),
    removeItem: (id) => dispatch(removeItem(id)),
  }
}
export default connect(null, mapDispatchToProps)(withStyles(styles)(OrderList));