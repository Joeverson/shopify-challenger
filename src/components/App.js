import React, { Component } from 'react';
import '../assets/css/App.css';

import Banner from './Banner'
import Search from './Search'
import Waste from './Waste'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filtered: [],
      favorited: []
    }

    this.handleFiltered = this.handleFiltered.bind(this)
    this.handleClearFiltered = this.handleClearFiltered.bind(this)
    this.handleClickedStar = this.handleClickedStar.bind(this)
  }

  handleFiltered(data) {
    this.setState({
      filtered: data
    })
  }

  handleClearFiltered() {
    this.setState({
      filtered: []
    })
  }

  handleClickedStar(waste) {
    console.log(waste);
    
    // this.setState({
    //   favorited: [...this.state.favorited, waste]
    // })
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
        <Waste title="Favourites" data={ this.state.favorited }></Waste>
      </div>
    );
  }
}

export default App;
