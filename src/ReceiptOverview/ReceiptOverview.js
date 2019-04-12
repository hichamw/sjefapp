import React, { Component } from "react";
import styles from "./ReceiptOverview.css";
import ValidQueueItem from "./Components/ValidQueueItem";
import PayQueueItem from "./Components/PayQueueItem";
import PastQueueItem from "./Components/PastQueueItem";

import img1 from "../img/items/1.png"

class ReceiptOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiptProducts: true,
      items : [],
      itemsLoaded : false
    };
  }

  componentDidMount() {
    fetch("http://localhost:3004/receipts")
      .then(response => response.json())
      .then(data =>
        this.setState({ items: data, itemsLoaded: true })
      );
  }

  

  render() {
    var validItems = this.state.items.filter(
      item => item.status === "valid"
    );
    var payItems = this.state.items.filter(
      item => item.status === "reserved"
    );
    var pastItems = this.state.items.filter(
      item => item.status === "pickedUp"
    );

    return (
      <div className="mainContainerProductList">
        <div className="tabBar">
          <div className="activeTab">
            <span>Vouchers (4)</span>
          </div>
          <div>
            <span>Boodschappen (3)</span>
          </div>
          <div>
            <span>Recepten (4)</span>
          </div>
        </div>
        <div className="dividerLine" />

        <div className={styles.validQueue}>
          <span className={styles.scrollerHeader}>Geldig</span>
          <div className={styles.scroller}>
            {
              validItems && validItems.length > 0 ?
              validItems.map((product, i) => {return <ValidQueueItem key={i} product={product} />}):
              <p className={styles.emptyScroller}>U heeft nog geen geldige vouchers</p>
            } 
          </div>
        </div>

        <div className={styles.payQueue}>
          <span className={styles.scrollerHeader}>Betalen</span>
          {
            payItems && payItems.length > 0 ?
            <span className={styles.scrollerHeaderRight}>Betaal alles({payItems.length})</span>:
            ""
          }
          <div className={styles.scroller}>
            {
              payItems && payItems.length > 0 ?
              payItems.map((product, i) => {return <PayQueueItem key={i} product={product} />}):
              <p className={styles.emptyScroller}>U heeft nog geen vouchers die u moet afrekenen</p>
            } 
          </div>
        </div>

        <div className={styles.pastQueue}>
          <span className={styles.scrollerHeader}>Afgehaald</span>
          <div className={styles.scroller}>
            {
              payItems && payItems.length > 0 ?
              pastItems.map((product, i) => {return <PastQueueItem key={i} product={product} />}):
              <p className={styles.emptyScroller}>U heeft nog geen vouchers die al verzilverd zijn</p>
            }
          </div>
        </div>

        <div />

        <div />
      </div>
    );
  }
}

export default ReceiptOverview;
