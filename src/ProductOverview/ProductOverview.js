import React, { Component } from "react";
import "./ProductOverview.css";
import MapView from './Components/MapView'
import ListView from './Components/ListView'


class ProductOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapActive: true,
            items: [],
            itemsLoaded: false,
        };
    }

    setMap() {
        this.setState({
            mapActive: true
        });
    }

    setList() {
        this.setState({
            mapActive: false
        });
    }

    componentDidMount() {
      fetch("http://localhost:3004/products")
        .then(response => response.json())
        .then(data =>
          this.setState({ items: data, itemsLoaded: true })
        );
    }

    

    render() {   
        // backup als API niet meer werkt
        let products = [
          {
            name: "Boerenkool",
            distance: 294,
            itemsAvailable: 5,
            unit: '300 g',
            price: 0.18,
            lat: 51.921118,
            long: 4.472474,
            imgId: 6,
          },
          {
            name: "Blueband Kookroom",
            distance: 223,
            itemsAvailable: 10,
            unit: '250 ml',
            price: 0.30,
            lat: 51.923190, 
            long: 4.477803,
            imgId: 7,
          },
          {
            name: "Prei",
            distance: 354,
            itemsAvailable: 8,
            unit: '1 st',
            price: 0.12,
            lat: 51.925066, 
            long: 4.469515,
            imgId: 3,
          },
          {
            name: "AH Smoothie",
            distance: 294,
            itemsAvailable: 5,
            unit: '300 g',
            price: 0.50,
            lat: 51.921118,
            long: 4.472474,
            imgId: 4
          },
          {
            name: "Broccoli",
            distance: 381,
            itemsAvailable: 7,
            unit: '350 g',
            price: 0.20,
            lat: 51.913174,
            long: 4.458649,
            imgId: 2,
          },
          {
            name: "Kiwi's",
            distance: 294,
            itemsAvailable: 4,
            unit: '1 st',
            price: 0.10,
            lat: 51.916484, 
            long: 4.485768,
            imgId: 8,
          },
          {
            name: "Trostomaten",
            distance: 693,
            itemsAvailable: 4,
            unit: '5 st',
            price: 0.21,
            lat: 51.916362, 
            long: 4.470641,
            imgId: 9,
          },
          
        ];

        return (
          <div className="mainContainerProductList">
            <div className="tabBar">
              <div className="activeTab">
                <span>Alles</span>
              </div>
              <div>
                <span>Groenten & Fruit</span>
              </div>
              <div>
                <span>Vlees, Vis & Vega</span>
              </div>
              <div>
                <span>Overig</span>
              </div>
            </div>

            <div className="dividerLine" />

            <div className="filterBar">
              <div>
                <i className="fas fa-filter" />
                <span>Filters (1)</span>
              </div>
              <div>
                <i className="fas fa-times" style={{ color: "red" }} />
                <span>Aanbieder (1)</span>
                <i className="fas fa-angle-down" />
              </div>
              <div>
                <span>Afstand</span>
                <i className="fas fa-angle-down" />
              </div>
              <div>
                <span>Prijs</span>
                <i className="fas fa-angle-down" />
              </div>
            </div>

            {this.props.mapActive ? (
              <MapView data={products} />
            ) : (
              <ListView data={products} />
            )}
          </div>
        );
    }
}

export default ProductOverview;