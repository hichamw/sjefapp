import React, { Component } from "react";
import "./Supermarkets.css";
import Supermarket from './Supermarket';

class Supermarkets extends Component {

    render() {
        let supermarkets = [
            {
                name: "AlbertHeijn",
                distance: 294,
                itemsAvailable: 5
            },
            {
                name: "GroenteEnFruit",
                distance: 301,
                itemsAvailable: 18
            },
            {
                name: "Jumbo",
                distance: 327,
                itemsAvailable: 29
            },
            {
                name: "Plus",
                distance: 212,
                itemsAvailable: 26
            },
            {
                name: "Lidl",
                distance: 235,
                itemsAvailable: 10
            },
            {
                name: "Dirk",
                distance: 340,
                itemsAvailable: 9
            },
            {
                name: "Jumbo",
                distance: 451,
                itemsAvailable: 12
            },
            {
                name: "Coop",
                distance: 564,
                itemsAvailable: 14
            },
            {
                name: "C1000",
                distance: 708,
                itemsAvailable: 19
            }
        ];
        return (
          <div>
                <div className="separateText">
                    <span>Bij jou in de buurt</span>
                    <span className="yellow">bekijk alles</span>
                </div>
                <div className="supermarketContainer">
                    {supermarkets.map((supermarket,i) => {
                        return <Supermarket key={i} supermarket={supermarket} />
                    })}
                </div>
          </div>
        );
    }
}

export default Supermarkets;
