import React, { Component } from 'react';

class Header extends Component {
  render() {
    const style = {
      position: 'fixed',
      zIndex: '1',
      background: 'black',
      width: '100%',
      height: '64px',
      top: '0'
    };
    return <div style={style}></div>;
  }
}

export default Header;
