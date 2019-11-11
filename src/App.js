import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Loaded from './Loaded';
import Products from './Products';
import Kart from './Kart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      sides: [],
      sandwiches: [],
      desserts: [],
      kart: []
    };
  }

  componentDidMount() {
    let url =
      'https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/bplummer488/restaurant/db';

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          sides: myJson.sides,
          sandwiches: myJson.sandwiches,
          desserts: myJson.desserts
        });
        this.loggedSwitch();
      });
  }

  loggedSwitch = () => {
    this.setState({
      loaded: true
    });
  };

  addToKart = (id, title, price, image) => {
    let getKart = this.state.kart;
    let item = {
      id: id * Math.random() * 100,
      title: title,
      price: price,
      image: image
    };
    getKart.push(item);
    this.setState({
      kart: getKart
    });
  };

  removeFromKart = id => {
    let getKart = this.state.kart;
    getKart.forEach(function(element) {
      if (element.id === id) {
        getKart.splice(getKart.indexOf(element), 1);
      }
    });
    this.setState({
      kart: getKart
    });
  };

  render() {
    const loaded = {
      display: this.state.loaded ? 'block' : 'none'
    };

    return (
      <div>
        <Header />
        <Loaded loaded={this.state.loaded} />
        <div style={loaded} className='top'>
          <Kart
            loaded={this.state.loaded}
            kart={this.state.kart}
            removeFromKart={this.removeFromKart}
          />
          <div className='container'>
            <h1>Sides</h1>
            <hr />
            <Products
              products={this.state.sides}
              loaded={this.state.loaded}
              addToKart={this.addToKart}
            />
            <h1>Sandwiches</h1>
            <hr />
            <Products
              products={this.state.sandwiches}
              loaded={this.state.loaded}
              addToKart={this.addToKart}
            />
            <h1>Desserts</h1>
            <hr />
            <Products
              products={this.state.desserts}
              loaded={this.state.loaded}
              addToKart={this.addToKart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
