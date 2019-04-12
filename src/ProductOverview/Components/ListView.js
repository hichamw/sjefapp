import React, { Component } from "react";
import "./ListView.css";
import Product from './Product'

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {  
    var filteredProducts = this.props.data.filter(function(product) {
      return product.itemsAvailable > 0;
    });

    return (
      <div className="listViewContainer">
        <div className="dividerLine" />
        {filteredProducts.map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </div>
    );
  }
}

export default ListView;
