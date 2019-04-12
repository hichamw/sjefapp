import React, { Component } from "react";
import "./ItemQuickView.css";
import leftArrow from '../../img/icons/leftArrow.svg';
import rightArrow from '../../img/icons/rightArrow.svg';
import minus from '../../img/icons/minus.svg';
import plus from '../../img/icons/plus.svg';
import reservationButton from '../../img/icons/reservationButton.svg';
import Slider from './Slider'

class itemAmountSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
          itemAmount: 0
        };
    }

    IncreaseItemAmount = () => {
        if (this.props.limit > this.state.itemAmount){
            this.setState({ itemAmount: this.state.itemAmount + 1 });
        }
    };
    DecreaseItemAmount = () => {
        if (!this.state.itemAmount <= 0) {
            this.setState({ itemAmount: this.state.itemAmount - 1 });
        }
    };




    render() {
        return (
            <div className="itemAmountSelector" style={{
                width: 51,
                display: "flex",
                justifyContent: "space-between"
            }}>
                <img
                    src={minus}
                    onClick={this.DecreaseItemAmount}
                    style={{ cursor: "pointer" }}
                    alt="Decrease Amount"
                />
                <span id={this.props.id} className="yellow">{this.state.itemAmount}</span>
                <img
                    onClick={this.IncreaseItemAmount}
                    src={plus}
                    style={{cursor:"pointer"}}
                    alt="Increase Amount"
                />
            </div>
        );
    }
}

export default itemAmountSelector;
