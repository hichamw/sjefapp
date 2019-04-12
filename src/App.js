import React, { Component } from 'react';
import logo from './img/logo.svg';
import Map from './img/icons/map.svg';
import MapActive from './img/icons/mapActive.svg';
import ProductList from './img/icons/productList.svg';
import ProductListActive from './img/icons/productListActive.svg';
import sjef from './img/sjef.svg';

import BottomNavBar from "./Components/BottomNavBar"

import Home from "./Home/Home"
import ProductOverview from "./ProductOverview/ProductOverview"
import ReceiptOverview from "./ReceiptOverview/ReceiptOverview"

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "shopping",
      mapActive: false,
      firstTime: true,
    };
    this.setHome = this.setHome.bind(this);
    this.setSjef = this.setSjef.bind(this);
    this.setShopping = this.setShopping.bind(this);
    this.setMapView = this.setMapView.bind(this);
    this.setListView = this.setListView.bind(this);
  }

  setHome() {
    this.setState({
      activeTab: "home"
    });
  }

  setSjef() {
    this.setState({
      activeTab: "sjef"
    });
  }

  setShopping() {
    this.setState({
      activeTab: "shopping"
    });
  }

  setMapView() {
    this.setState({
      mapActive: true
    });
  }

  setListView() {
    this.setState({
      mapActive: false
    });
  }

  render() {
    return (
      <div className="App">
        <div className="topNavBar">
          <div className="dummy" />
          <img className="sjef" src={sjef} alt="Sjef" />
          {this.state.activeTab === "home" ? (
            <div className="gearContainer">
              {" "}
              <img className="gear" src={logo} alt="Settings" />{" "}
            </div>
          ) : null}
          {this.state.activeTab === "sjef" ? (
            <div className="productOverviewSwitcher">
              {
                this.state.mapActive ? 
                  <img
                    className=""
                    src={ProductList}
                    alt="ProductList"
                    onClick={this.setListView}
                  />
                  :
                  <img
                    className=""
                    src={ProductListActive}
                    alt="ProductList"
                    onClick={this.setListView}
                  />
              }

              <div style={{ border: "1px solid #333333" }} />

              {this.state.mapActive ?
                <img
                  className=""
                  src={MapActive}
                  alt="Map"
                  onClick={this.setMapView}
                />
                :
                <img
                  className=""
                  src={Map}
                  alt="Map"
                  onClick={this.setMapView}
                />
              }
            </div>
          ) : null}
        </div>

        {this.state.activeTab === "home" ? <Home /> : null}
        {this.state.activeTab === "sjef" ? (
          <ProductOverview mapActive={this.state.mapActive} />
        ) : null}
        {this.state.activeTab === "shopping" ? <ReceiptOverview /> : null}
        <BottomNavBar
          active={this.state.activeTab}
          setHome={this.setHome}
          setSjef={this.setSjef}
          setShopping={this.setShopping}
        />
      </div>
    );
  }
}

export default App;
