import React, { Component } from 'react';
import {
  FaSearch,
  FaCircleNotch
}
from 'react-icons/fa'
import Fuse from 'fuse.js'
import '../Assets/css/Search.css';

import Services from '../Services'


class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search : '',
      isSearching: false
    }

    this._search = this._search.bind(this)
    this._handleKeyEnter = this._handleKeyEnter.bind(this)
    this._isSearching = this._isSearching.bind(this)
    this._handleTyping = this._handleTyping.bind(this)
  }

  _isSearching(bool) {
    this.setState({ isSearching: bool })
  }
  
  async _search() {
    const { search } = this.state

    this._isSearching(true)
    var options = {
      shouldSort: true,
      threshold: 0.5,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "keywords"
      ]
    };
    var fuse = new Fuse((await Services.waste.get()), options);
    var result = fuse.search(search).map(data => ({...data, isFavorited: false}));
    
    this.props.onFiltered(result)

    this._isSearching(false)
  }

  _handleKeyEnter(e) {
    if (e.key === 'Enter') {
      this._search()
    }
  }


  _handleTyping(event) {
    const value = event.target.value

    if(value === '') {
      this.props.onClearFiltered()
    } else {
      this.setState({
        search: value
      })
    }
  }

  render() {
    const { isSearching } = this.state

    return (
      <div className="Search">
        <input type='text' onKeyPress={this._handleKeyEnter} onChange={ this._handleTyping }/>
        <button className="" onClick={this._search}>
          {
            (() => {
              if (isSearching) 
                return <FaCircleNotch className = 'Search-icon-search Search-loading' />
              else
                return <FaSearch className = 'Search-icon-search' />              
            })()
          }
        </button>
      </div>
    );
  }
}

export default Search;
