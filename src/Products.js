import React, { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var products = this.props.products.map(item => {
      return (
        <div key={item.id} className='col-sm-4 product-card'>
          <div className='card-margin'>
            <div className=''>
              <img className='card-image' src={item.image} alt={item.title} />
              <div className=''>
                <b>
                  <p>{item.title}</p>
                </b>
                <p>{item.price}</p>
                <button
                  className='card-btn'
                  onClick={this.props.addToKart.bind(
                    null,
                    item.id,
                    item.title,
                    item.price,
                    item.image
                  )}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });

    const loaded = {
      display: this.props.loaded ? 'block' : 'none'
    };

    const margin = {
      top: '100px'
    };

    return (
      <div style={loaded}>
        <div style={margin}>
          <div className='row text-center'>{products}</div>
        </div>
      </div>
    );
  }
}

export default Products;
