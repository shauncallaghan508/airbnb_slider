import React, { Component } from 'react';
import image_1 from '../images/slider_1.jpg';
import image_2 from '../images/slider_2.jpg';
import image_3 from '../images/slider_3.jpg';
import SliderCard from './SliderCard.js';

class Slider extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      translateX: 0
    };

    this.moveLeft = this.moveLeft.bind( this );
    this.moveRight = this.moveRight.bind( this );
  }

  moveRight = () => {
    if ( this.state.translateX < 0 ) {
      this.setState({
        translateX: this.state.translateX + 20
      });
    }
  }

  moveLeft = () => {
    if ( this.state.translateX > -100 ) {
      this.setState({
        translateX: this.state.translateX - 20
      });
    }
  }

  render() {
    return (
      <section className="slider-wrap-container">
        <section className='slider-wrap'>
          <section className="slider-card-container" style={{ transform: "translateX("+ this.state.translateX + "%)" }}>
            <SliderCard
              image={image_1}
              altText={ "image 1" }
            />
            <SliderCard
              image={image_2}
              altText={ "image 2" }
            />
            <SliderCard
              image={image_3}
              altText={ "image 3" }
            />
            <SliderCard
              image={image_1}
              altText={ "image 4" }
            />
            <SliderCard
              image={image_2}
              altText={ "image 5" }
            />
            <SliderCard
              image={image_3}
              altText={ "image 6" }
            />
            <SliderCard
              image={image_1}
              altText={ "image 7" }
            />
            <SliderCard
              image={image_2}
              altText={ "image 8" }
            />
            <SliderCard
              image={image_3}
              altText={ "image 9" }
            />
            <SliderCard
              image={image_1}
              altText={ "image 10" }
            />
          </section>
        </section>
        <section className="slider-controls">
          { this.state.translateX < 0 &&
            <div className="arrowLeft">
              <span onClick={ this.moveRight }>
                <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false" className="arrow">
                  <path fillRule="evenodd" d="M13.703 16.293a1 1 0 1 1-1.415 1.414l-7.995-8a1 1 0 0 1 0-1.414l7.995-8a1 1 0 1 1 1.415 1.414L6.413 9l7.29 7.293z"></path>
                </svg>
              </span>
            </div>
          }
          { this.state.translateX > -100 &&
            <div className="arrowRight">
              <span onClick={ this.moveLeft }>
                <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false" className="arrow">
                  <path fillRule="evenodd" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z"></path>
                </svg>
              </span>
            </div>
          }
        </section>
      </section>
    );
  }
}

export default Slider;
