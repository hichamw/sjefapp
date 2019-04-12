import React, { Component } from "react";
import "./Supermarket.css";
import sjefMini from '../../img/icons/sjefMini.svg'

class Supermarket extends Component {

    render() {
        return (
          <div className="superContainer">
            <div className="imgContainer">
                <img src={"/images/supermarkets/" + this.props.supermarket.name + ".png"} alt="Supermarket"/>
            </div>
            <div className="textContainer">
                <span className="supermarketDistance">
                    <i className="fa fa-map-marker" />{" "}
                    {this.props.supermarket.distance} m
                </span>
                <span className="supermarketItemsAvailable">
                    <img src={sjefMini}alt="Sjef"/>{" "}
                    {this.props.supermarket.itemsAvailable}
                </span> 
            </div>
            
          </div>
        );
    }
}

export default Supermarket;
