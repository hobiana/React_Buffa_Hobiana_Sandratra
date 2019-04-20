import React, { Component } from 'react';

import ProfileLayout from '../layout/Profile';
import RestaurantsPlatsComponent from './RestaurantPlats'
import MenuPlat from './MenuPlat';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      restaurant: {
        plat: [],
        menu: []
      },
      filteredPlat: [],
      idmenu:-1,
      isFromMenu: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.getRestaurantByID(id)
  }

  handleMenu = (idmenu) => {
    console.log("idmenu",idmenu)
    this.setState({idmenu: idmenu});
  }

  test = (id) => {
    const isFrommenu = (id===-1)? false: true
    this.setState({idmenu: id, isFromMenu:isFrommenu})
  }

  getRestaurantByID = (id) => {
    const { restaurants } = this.props;
    let restaurant = null;
    for (let r of restaurants) {
      if (r._id === id) {
        restaurant = r
        break
      }
    }
    this.setState({
      restaurant: restaurant
    });
  }

  render() {
    //const {idmenu_reducer} = this.props.idmenu_reducer;
    const {restaurant,idmenu,isFromMenu} = this.state;
    const platfiltered = restaurant.plat.filter(function (plat) {
      if(idmenu===-1){
        return true;
      } else{
        return plat.idmenu === idmenu;
      }
    });

    const plats = <RestaurantsPlatsComponent plats={platfiltered} isFromMenu={isFromMenu} />
    console.log("sate",this.state.restaurant)
    const menus = <MenuPlat
      menu={this.state.restaurant.menu}
      restaurant={restaurant}
      test={this.test.bind(this)}
    />
    return (
      <ProfileLayout platComponent={plats} menu={menus} />
    );
  }
}
/*
const mapStateToProps = (state)=>{
  console.log("5555",state.cardReducer.idmenu)
  return {
    idmenu_reducer: state.cardReducer.idmenu
  };
}*/

//export default connect(mapStateToProps)(Restaurant);
export default (Restaurant);