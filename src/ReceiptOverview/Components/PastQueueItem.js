import React, { Component } from "react";
import styles from "../ReceiptOverview.css";
import moment from "moment";
import "moment/locale/nl";

class PastQueueItem extends Component {
    
    render() {
        return (
            <div className={styles.scrollItem}>
                <div
                    className="sideBar123"
                    style={{
                        height: 176,
                        width: 3,
                        background: "#BFBFBF",
                        margin: 0,
                        float: "left"
                    }}
                />
                <div className={styles.imgAndTextDiv}>
                    <img
                        src={"/images/" + this.props.product.productId + ".png"}
                        className={styles.pastImage} 
                    />
                    <p className={styles.productNamePast}>
                        {this.props.product.name}
                    </p>
                    <p className={styles.productDatePay}>Afgenomen:</p>
                    <p className={styles.productDatePayTime}>
                        {
                            moment(this.props.product.pickedUpAt).isSame(moment(), 'd') ?
                            " Vandaag" :
                            moment(this.props.product.pickedUpAt).format('DD-MM-YYYY')
                        }
                    </p>
                    <div className={styles.needToPayPriceContainer}>
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


export default PastQueueItem;
