import React, { Component } from "react";
import "./ItemQuickView.css";
import leftArrow from '../../img/icons/leftArrow.svg';
import rightArrow from '../../img/icons/rightArrow.svg';
import minus from '../../img/icons/minus.svg';
import plus from '../../img/icons/plus.svg';
import reservationButton from '../../img/icons/reservationButton.svg';
import Slider from './Slider'
import ItemAmountSelector from './ItemAmountSelector'

class ItemQuickView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCounter: 1,
      productName: "Bloemkool",
      productPrice: 0.12,
      productDistance: 294,
    };
  }

  handleNext = () => {
    if ([1, 2, 3, 4].includes(this.state.imageCounter)) {
      this.setState(prevState => ({
        imageCounter: prevState.imageCounter + 1
      }),this.getProductName);
    }
  };

  handlePrev = () => {
    if ([2, 3, 4, 5].includes(this.state.imageCounter)) {
      this.setState(prevState => ({
        imageCounter: prevState.imageCounter - 1
      }),this.getProductName);
    }
  };


  getProductName = () => {
    if(this.state.imageCounter === 1) {
        this.setState({productName:"Bloemkool"});
        this.setState({productPrice:0.12});
        this.setState({productDistance:294});
    } else if(this.state.imageCounter === 2) {
        this.setState({ productName: "Broccoli" });
        this.setState({ productPrice: 0.23 });
        this.setState({ productDistance: 456 });
    } else if(this.state.imageCounter === 3) {
        this.setState({ productName: "Prei" });
        this.setState({ productPrice: 0.15 });
        this.setState({ productDistance: 342 });
    } else if(this.state.imageCounter === 4) {
        this.setState({ productName: "Smoothie" });
        this.setState({ productPrice: 0.55 });
        this.setState({ productDistance: 456 });
    } else if(this.state.imageCounter === 5) {
        this.setState({ productName: "Ui" });
        this.setState({ productPrice: 0.31 });
        this.setState({ productDistance: 110 });
    }
  };



  render() {
    return (
      <div>
        <div className="itemQuickView">
          <img
            src={leftArrow}
            onClick={this.handlePrev}
            alt="Previous Item"
          />

          <ItemAmountSelector itemAmount={this.state.itemAmount} />

          <Slider src={this.state.imageCounter} />
          <img src={reservationButton} alt="Reserve item" />
          <img src={rightArrow} onClick={this.handleNext} alt="Next Item" />
        </div>
        <div className="productDetails">
          <span className="productName">{this.state.productName}</span>
          <div className="productLine">
            <span className="productPrice">
              € {this.state.productPrice}
            </span>
            <span className="productDistance">
              <i className="fa fa-map-marker" />{" "}
              {this.state.productDistance} m
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemQuickView;
