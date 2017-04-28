import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './Header';
import SecondaryNav from './Secondarynav.js'
import Slider from './Slider.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SecondaryNav />
        <section className="container">
          <h1>Just Booked</h1>
          <Slider />
        </section>

      </div>
    );
  }
}

export default App;
