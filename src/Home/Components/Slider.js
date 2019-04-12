import React, { Component } from "react";
import "./Slider.css";

class Slider extends Component {
    render() {
        return (
          <div>
            <img
              className="itemImage"
              id="itemImage"
              src={"/images/" + this.props.src + ".png"}
              alt="Item"
            />
            
          </div>
        );
    }

}

export default Slider;