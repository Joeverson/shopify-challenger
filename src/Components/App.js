import React, { Component } from 'react';
import '../Assets/css/App.css';

import Banner from './Banner'
import Search from './Search'
import Waste from './Waste'

class App extends Component {
  state = {
    filtered: [],
    favorited: []
  }
  
  hasFavorited(filtered) {
    return this.state.favorited.filter(waste =>
      waste.title === filtered.title && waste.keyworks === filtered.keyworks)[0] || false
  }

  handleFiltered = (data) => {
    this.setState({
      filtered: data.map(filtered => {        
        return { ...filtered,
          isFavorited: this.hasFavorited(filtered)
        }
      })
    })
  }

  handleClearFiltered = () => {
    this.setState({
      filtered: []
    })
  }

  handleClickedStar = (waste) => {
    if(waste.isFavorited) {
      waste.isFavorited = false
      
      this.setState({
        favorited: [...this.state.favorited.filter(favorite => favorite.keywords !== waste.keywords && favorite.title !== waste.title)]
      })
    } else {
      waste.isFavorited = true
  
      this.setState({
        favorited: [...this.state.favorited, waste]
      })
    }
  }

  _listFavorites = () => {
    if (this.state.favorited.length > 0) {
      return (
        <Waste title="Favourites" data={ this.state.favorited }
          onClickedStar={ (waste) => this.handleClickedStar(waste) }></Waste>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Banner name='Toronto Weste Lookup'></Banner>
        <Search 
          onFiltered={ this.handleFiltered } 
          onClearFiltered={ this.handleClearFiltered }></Search>
        {/* waste filtered */}
        <Waste data={ this.state.filtered }
          onClickedStar={ this.handleClickedStar }></Waste>

        {/* west favorited */}
        { this._listFavorites() }
      </div>
    );
  }
}

export default App;
