import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Restaurants from './components/restaurants/Restaurants';
import Restaurant from './components/profile/Restaurant';
import Order from './components/order/Order';
import base from './components/base/base';

import './App.css';

import restaurants, { orders } from './data';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      orders: [],
      selectedRestaurant: null
    }
  }

  componentWillMount() {
    this.ref = base.syncState("restaurant", {
      context: this,
      state: 'restaurant'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidMount() {
    this.getAllRestaurants();
    this.setState({ orders })
  }

  getAllRestaurants = () => {
    this.setState({ restaurants });
  }

  deleteOrder = (index) => {
    let { orders } = this.state;
    orders.splice(index, 1);
    this.setState({ orders });
  }

  onDeleteOrder = (index) => {
    this.deleteOrder(index);
  }
  

  render() {
    const { restaurants, orders } = this.state;
    
    return (
      <div className="App">
        <Router>
          <Header />
          <Order 
            orders={orders}
            onDeleteOrder={this.onDeleteOrder} />
          <Switch>
            <Route 
              exact
              path="/"
              render={props => <Restaurants {...props}
                list={restaurants} /> } />
            <Route 
              path="/restaurants/:id"
              render={props => <Restaurant {...props}  restaurants= {restaurants}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
