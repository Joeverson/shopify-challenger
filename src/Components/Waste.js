import React, { Component } from 'react';
import he from 'he'
import '../Assets/css/Waste.css';
import { FaStar } from 'react-icons/fa'

class Waste extends Component {
  
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
          { this.props.data.map((waste, index) => (
            <div className='Waste-item' key={index}>
              <div className='Waste-item-title'>
                <FaStar className={waste.isFavorited ? 'Waste-star-selected' : 'Waste-star-unselected'}
                  onClick={() => this.props.onClickedStar(waste)}/>
                <span style={{ paddingLeft: 20}}>
                  {waste.title}
                </span>
              </div>
              <div className='Waste-body'
                dangerouslySetInnerHTML={{ __html: he.decode(waste.body) }}></div>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

export default Waste;
