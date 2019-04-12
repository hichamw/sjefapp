import React, { Component } from "react";
import styles from "../ReceiptOverview.css";
import moment from "moment";
import "moment/locale/nl";

class PayQueueItem extends Component {
    render() {
        const payItem = () => {
            var now = new Date();
            now.setHours(now.getHours() + 72);
            now = new Date(now);

            var putUrl =
                "http://localhost:3004/receipts/" + this.props.product.id;

            fetch(putUrl, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: this.props.product.name,
                distance: this.props.product.distance,
                itemsReserved: this.props.product.itemsReserved,
                unit: this.props.product.unit,
                price: this.props.product.price,
                lat: this.props.product.lat,
                long: this.props.product.long,
                reservedUntil: this.props.product.reservedUntil,
                validUntil: now.toISOString(),
                pickedUpAt: "",
                status: "valid",
                productId: this.props.product.productId
              })
            })
              .then(res => res.text()) // OR res.json()
              .then(res => console.log(res));
            window.location.reload(); 
        }
        return (
          <div  onClick={() => payItem()} className={styles.scrollItem}>
            <div
              className="sideBar123"
              style={{
                height: 176,
                width: 3,
                background: "#FFE929",
                margin: 0,
                float: "left"
              }}
            />
            <div className={styles.imgAndTextDiv}>
              <img src={"/images/" + this.props.product.productId + ".png"} />
              <p className={styles.productName}>
                {this.props.product.name}
              </p>
              <p className={styles.productDatePay}>Gereserveerd:</p>
              <p className={styles.productDatePayTime}>
                {moment
                  .utc(
                    moment(this.props.product.reservedUntil).diff(
                      moment()
                    )
                  )
                  .subtract(2, "hours")
                  .format("HH:mm:ss")}
              </p>
              <div className={styles.weightPriceContainer}>
                <span className={styles.productWeight}>
                  ± {this.props.product.unit}
                </span>
                <span className={styles.productPrice}>
                  € {this.props.product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        );
    }
}


export default PayQueueItem;
