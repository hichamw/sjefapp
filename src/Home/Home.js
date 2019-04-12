import React, { Component } from "react";
import "./Home.css";
import ItemQuickView from './Components/ItemQuickView';
import Supermarkets from './Components/Supermarkets';

class Home extends Component {
    

    render() {

        return (
          <main>
            <div  className="topTextContainer">
                <span className="headText yellow">Welkom terug</span>
                <span className="headText"> Hicham!</span>
            </div>

            <div className="bottomTextContainer">
                <p>Wij hebben speciaal wat klaar gezet voor jou.</p>
                <p>Maak er vanavond weer wat lekkers van.</p>
            </div>
            
            <div className="separateText">
              <span>Speciaal voor jou</span>
              <span className="yellow">03:47:22</span>
            </div>

            <ItemQuickView />

            <Supermarkets />

          </main>
        );
    }
}

export default Home;
