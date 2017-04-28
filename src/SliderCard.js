import React, { Component } from 'react';

class SliderCard extends Component {

  render() {
    return (
      <div className="slider-card">
        <div className="slider-card-wrap">
          <img src={ this.props.image } alt={ this.props.altText } />
        </div>
      </div>
    );
  }
}

export default SliderCard;
