import React, { Component } from 'react';

export class Protest extends Component {
  render() {
    var get;

    if (this.props.loaded === true) {
      get = this.props.products[0];
      console.log(get);
    } else {
      get = {
        image: ''
      };
    }

    return (
      <div>
        <div
          id='carouselExampleInterval'
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active' data-interval='1000'>
              <img src={get.image} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h5>...</h5>
                <p>...</p>
              </div>
            </div>
            <div className='carousel-item' data-interval='2000'>
              <img src={get.image} class='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src={get.image} class='d-block w-100' alt='...' />
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleInterval'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleInterval'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Protest;
