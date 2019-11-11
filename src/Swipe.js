import React, { Component } from 'react';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';

var startingX;

handleTouchStart = e => {
  startingX = e.touches[0].clientX;
};

handleTouchMove = e => {
  let touch = e.touches[0];
  let change = StartingX;
  if (change < 0) {
    return;
  }
};

class Swipe extends Component {
  render() {
    return <div></div>;
  }
}

export default Swipe;
