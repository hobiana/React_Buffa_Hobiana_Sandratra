import React, { Component } from 'react';

import SearchListLayout from '../layout/SearchList';
import RestaurantSearchComponent from './RestaurantSearch';
import RestaurantListComponent from './RestaurantList';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchName: '',
      searchCook: '',
      searchDesc: '',
      desc: []
    }
  }

  isSearched = (searchName, searchCook, desc) => {
    const t = this;
    return function (item) {
      return item.nom.toLowerCase().includes(searchName.toLowerCase()) 
              && item.cuisine.toLowerCase().includes(searchCook.toLowerCase())
              && t.doDescMacth(item.desc, desc);
    }
  }

  doDescMacth = (desc, descArray) => {
    let count = 0;
    for(let d of descArray) {
      if(desc.toLowerCase().includes(d.toLowerCase())) {
        count++;
      }
    }
    return count === descArray.length;
  }

  onChangeSearchName = (e) => {
    this.setState({ searchName: e.target.value });
  }

  onChangeSearchCook = (e) => {
    this.setState({ searchCook: e.target.value });
  }

  onChangeSearchDesc = (e) => {
    this.setState({ searchDesc: e.target.value });
  }

  addDesc = (newDesc) => {
    let { desc } = this.state;
    if(!desc.includes(newDesc) && newDesc !== '') {
      desc.push(newDesc);
      this.setState({ searchDesc: '' })
    }
  }

  deleteDesc = (index) => {
    let { desc } = this.state;
    desc.splice(index, 1);
    this.setState({ desc });
  }

  render() {
    const { searchName,
            searchCook,
            searchDesc,
            desc } = this.state;
    let { list,
          onSelectRestaurant } = this.props;
    const filtered = list.filter(this.isSearched(searchName, searchCook, desc));
    const RestaurantSearch = <RestaurantSearchComponent
                              searchName={searchName}
                              searchCook={searchCook}
                              searchDesc={searchDesc}
                              desc={desc}
                              onChangeSearchName={this.onChangeSearchName}
                              onChangeSearchCook={this.onChangeSearchCook}
                              onChangeSearchDesc={this.onChangeSearchDesc}
                              addDesc={this.addDesc}
                              deleteDesc={this.deleteDesc} />
    const RestaurantList = <RestaurantListComponent
                              list={filtered}
                              onSelectRestaurant={onSelectRestaurant} /> 
    return (
      <SearchListLayout
        searchComponent={RestaurantSearch}
        listComponent={RestaurantList} />
    );
  }
}

export default Restaurants