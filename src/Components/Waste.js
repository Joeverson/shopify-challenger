import React, { Component } from 'react';
import he from 'he'
import '../Assets/css/Waste.css';
import { FaStar } from 'react-icons/fa'

class Waste extends Component {
  clickedStar() {
  }

  _renderData() {

    if (this.props.data.length > 0)
      return this.props.data.map((waste, index) => (
        <div className='Waste-item' key={index}>
          <div className='Waste-item-title'>
            <FaStar className={waste.isFavorited ? 'Waste-star-selected' : 'Waste-star-unselected'}
              onClick={this.props.onClickedStar(waste)}/>
            <span style={{ paddingLeft: 20}}>
              {waste.title}
            </span>
          </div>
          <div className='Waste-body'
            dangerouslySetInnerHTML={{ __html: he.decode(waste.body) }}></div>
        </div>
      ))
    else
      return <h3 className='Waste-no-data'>No data</h3>
  }

  _renderTitle() {
    if (this.props.title) {
      return <h1 className="Waste-title">{this.props.title}</h1>
    }
  }

  render() {
    return (
      <div>
        { this._renderTitle() }
        <div className="Waste">
          { this._renderData() }
        </div>
      </div>
    );
  }
}

export default Waste;
