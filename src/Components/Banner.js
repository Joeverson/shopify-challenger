import React, { Component } from 'react';
import '../Assets/css/Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        { this.props.name }
      </div>
    );
  }
}

export default Banner;
