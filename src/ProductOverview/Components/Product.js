import React, { Component } from "react";
import "./Product.css";
import ItemAmountSelector from "../../Home/Components/ItemAmountSelector"
import reservationButton from "../../img/icons/reservationButton.svg";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // name: "Blueband Kookroom",
    // distance: 223,
    // itemsAvailable: 10,
    // unit: '250 ml',
    // price: 0.30,
    // lat: 51.923190,
    // long: 4.477803


    render() {
        const reserveItem = () => {
          var itemsReserved = document.getElementById(this.props.product.id).innerHTML
          if (itemsReserved > 0) {
            var itemsReserved = document.getElementById(this.props.product.id).innerHTML
            var putUrl =
              "http://localhost:3004/products/" + this.props.product.id;

            var now = new Date();
            now.setHours(now.getHours() + 26)
            now = new Date(now);

            fetch("http://localhost:3004/receipts/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: this.props.product.name,
                distance: this.props.product.distance,
                itemsReserved: itemsReserved,
                unit: this.props.product.unit,
                price: this.props.product.price,
                lat: this.props.product.lat,
                long: this.props.product.long,
                reservedUntil: now.toISOString(),
                validUntil: "",
                pickedUpAt: "",
                status: "reserved",
                productId: this.props.product.id,
              })
            })
              .then(res => res.text()) // OR res.json()
              .then(res => console.log(res));

            fetch(putUrl, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: this.props.product.name,
                distance: this.props.product.distance,
                itemsAvailable: this.props.product.itemsAvailable - itemsReserved,
                unit: this.props.product.unit,
                price: this.props.product.price,
                lat: this.props.product.lat,
                long: this.props.product.long
              })
            })
              .then(res => res.text()) // OR res.json()
              .then(res => console.log(res));
          }
        }
        return (
          <div>
            <div className="mainProductContainer">
              <div className="productListImageWrapper">
                <img
                  style={{ width: 114, height: 86 }}
                  src={"/images/" + this.props.product.id + ".png"}
                />
              </div>

              <div className="productTextContainer">
                <span className="productListName">
                  {this.props.product.name}
                </span>
                <div className="middleContainer">
                  <div className="distanceTimeContainer">
                    <span className="productListDistance">
                      <i className="fa fa-map-marker-alt" />{" "}
                      {this.props.product.distance} m
                    </span>

                    <span className="productListUnit">
                      ± {this.props.product.unit}
                    </span>
                  </div>

                  <div className="unitPriceContainer">
                    <span className="productListTimeslot">
                      <i className="far fa-clock" /> 18:00 - 21:00
                    </span>

                    <span className="productListAmount">
                      <i className="far fa-user" /> max. 1 p.p
                    </span>
                  </div>
                  <div />
                </div>

                <div className="productListUnderContainer">
                  <span className="productListPrice">
                    € {this.props.product.price.toFixed(2)}
                  </span>

                  <ItemAmountSelector
                    limit={this.props.product.itemsAvailable}
                    id={this.props.product.id}
                  />

                  <img
                    src={reservationButton}
                    className="reserveButton"
                    alt="Reserve item"
                    onClick={() => reserveItem()}
                  />
                </div>
              </div>
            </div>

            <div className="dividerLine" />
          </div>
        );
    }
}

export default Product;
