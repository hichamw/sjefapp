import React, { Component } from "react";
import "./MapView.css";
import Map from "pigeon-maps";
import sjef from "../../img/icons/sjefWhite.svg";



class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    

  render() {
      const DivMarker = ({ left, top, style, children }) => (
          <div  style={{
              position: 'absolute',
              left: left,
              top: top,
              padding: '6px 0',
              ...(style || {})
          }}>{children}</div>
      )
    return (
      <div style={{ height: "80vh", overflowY: "hidden", margin: "0 -9px" }}>
        <Map
          center={[51.911535, 4.472494]}
          zoom={14}
          width={360}
          height={800}
        >


          {this.props.data.map((product, i) => {
            return (
              <DivMarker
                key={i}
                anchor={[product.lat, product.long]}
                offset={[15, 30]}
                style={{
                  width: 40,
                  height: 40,
                  background: "#FFC546",
                  borderRadius: "100%"
                }}
              >
                <img
                src={sjef}
                style={{ verticalAlign: "middle" }}
                alt="Sjef"
                />
              </DivMarker>
            );
          })}
        </Map>
      </div>
    );
  }
}

export default MapView;
