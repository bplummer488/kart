import React, { Component } from 'react';

class Loaded extends Component {
  render() {
    const loaded = {
      display: this.props.loaded ? 'none' : 'block'
    };
    return (
      <div style={loaded}>
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
}

export default Loaded;
