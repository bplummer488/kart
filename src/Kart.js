import React, { Component } from 'react';

class Kart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false
    };
  }

  handleclick = () => {
    this.state.popup
      ? this.setState({ popup: false })
      : this.setState({ popup: true });
  };

  render() {
    const popup = {
      display: this.state.popup ? 'block' : 'none'
    };

    var total = 0;
    const getKart = this.props.kart.map(item => {
      total = total + Number(item.price);
      return (
        <div key={item.id}>
          <img className='kartlist-img' src={item.image} alt={item.title} />
          <b>
            <p>{item.title}</p>
          </b>
          <p>{item.price}</p>
          <button
            className='remove-btn'
            onClick={this.props.removeFromKart.bind(null, item.id)}
          >
            -
          </button>
          <hr />
        </div>
      );
    });

    let fixedTotal = total.toFixed(2);
    let tax = total * 0.03;
    let fixedTax = tax.toFixed(2);
    let final = total + tax;
    let getTotal = final.toFixed(2);
    return (
      <div>
        <div>
          <p className='kart-pre'>{this.props.kart.length}</p>
        </div>

        <div style={popup} className='kart-popup'>
          <h1>Your Order</h1>
          <div className='order'>
            {getKart}
            <p>Price: {fixedTotal}</p>
            <p>Tax: {fixedTax}</p>
            <hr />
            <b>
              <p>Total: {getTotal}</p>
            </b>
            <button className='checkout-btn'>Check Out</button>
          </div>
        </div>

        <button className='kart' onClick={this.handleclick}>
          <img
            className='kart-img'
            src='https://brandonplummer.com/images/kart.png'
            alt='kart'
          />
        </button>
      </div>
    );
  }
}

export default Kart;
