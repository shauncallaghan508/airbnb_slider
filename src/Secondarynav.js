import React, { Component } from 'react';

class SecondaryNav extends Component {
  render() {

    return (
      <nav className="nav nav-secondary">
        <ul>
          <li className="active">
            <a href="#">For You</a>
          </li>
          <li>
            <a href="#">Homes</a>
          </li>
          <li>
            <a href="#">Experiences</a>
          </li>
          <li>
            <a href="#">Places</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SecondaryNav;
