import React, { Component } from 'react';

import OrderList from './OrderList';

import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import RestaurantMenu from '@material-ui/icons/RestaurantMenuOutlined';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = {
  drawer: {
    width: 500,
    color: 'white',
    background: '#1b1a20'
  },
  drawerHeader: {
    padding: 5,
  },
  drawerContent: {
    height: 450,
    padding: 5
  },
  drawerFooter: {
    paper: {
      padding: 10,
      background: '#1b1a21'
    },
    checkoutButton: { 
      padding: 10,
      width: '100%',
      color: 'white',
      background: '#2A2A2A'
    }
  },
  iconButton: {
    background: '#1b1a20'
  },
  chevron: {
    color: 'white'
  },
  openButton: {
    position: 'absolute',
    right: 0,
    width: 50,
    height: 50,
    color: '#FFF',
    background: '#1b1a20',
    borderRadius: 0
  }
}

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      commands: []
    }
  }

  getTotal = (orders) => {
    let total = 0;
    for(let o of orders) {
      total += (o.prix*o.quantite);
    }
    return total;
  }

  valider = (orders) => {
    alert('Votre commande a été prise en charge.');
  }

  toggleDrawer = (status) => {
    this.setState({ open: status });
  }

  render() {
    const { open } = this.state;
    const { commands,
            onDeleteOrder,
            classes,
            items
          } = this.props;
    return (
      <div>
        <Button
          style={styles.openButton}
          onClick={() => this.toggleDrawer(true)}>
          <Badge
            badgeContent={commands.length} 
            color="primary">
            <RestaurantMenu />
          </Badge>
        </Button>
        <Drawer
          classes={{ paper: classes.drawer }}
          anchor="right"
          open={open} 
          onClose={() => this.toggleDrawer(false)}>
          <div>
            <div style={styles.drawerHeader}>
              <IconButton
                style={styles.iconButton}
                onClick={() => this.toggleDrawer(false)}>
                <ChevronRightIcon 
                  style={styles.chevron}/>
              </IconButton>
            </div>
            <div style={styles.drawerContent}>
              <div>
                <Typography
                  color="inherit"
                  variant="h5"
                  align="center" >
                  {`Mes commandes (${commands.length})`}
                </Typography>
              </div>
              <div>
                <OrderList 
                  orders={commands}
                  onDeleteOrder={onDeleteOrder} />
              </div>
            </div>
            <div>
              <Paper
                style={styles.drawerFooter.paper}
                elevation={5}
                square={true}>
                <Typography
                  style={{color: 'white'}}
                  variant="h6"
                  align="right" >
                  {`Total: ${this.getTotal(commands)}€`}
                </Typography>
                <Button 
                  onClick={this.valider}
                  style={styles.drawerFooter.checkoutButton}>
                  Valider
                </Button>
              </Paper>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  console.log("5555",state.cardReducer.addedItems)
  return {
    commands: state.cardReducer.addedItems
  };
}

export default withStyles(styles)(connect(mapStateToProps, null)(Order));