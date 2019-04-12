import React, { Component } from "react";
import homeIcon from "../img/icons/home.svg";
import homeActiveIcon from "../img/icons/homeActive.svg";
import sjefIcon from "../img/icons/sjef.svg";
import sjefActiveIcon from "../img/icons/sjefActive.svg";
import shoppinglistIcon from "../img/icons/shoppinglist.svg";
import shoppinglistActiveIcon from "../img/icons/shoppinglistActive.svg";
import "./BottomNavBar.css";


class BottomNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeActive: true,
      sjefActive: false,
      shoppingActive: false
    };
  }

  componentDidMount() {
      if (this.props.active === "home") {
        this.setHomeActive();
      } else if (this.props.active === "sjef") {
        this.setSjefActive();
      } else if (this.props.active === "shopping") {
        this.setShoppingActive();
      }
  }

  setHomeActive = () => {
    let home = document.querySelector(".homeIcon");
    let sjef = document.querySelector(".sjefIcon");
    let shopping = document.querySelector(".shoppingIcon");
    home.classList.add("activeNavItem");
    sjef.classList.remove("activeNavItem");
    shopping.classList.remove("activeNavItem");
    this.setState({ homeActive: true });
    this.setState({ sjefActive: false });
    this.setState({ shoppingActive: false });
    this.props.setHome();
  };

  setSjefActive = () => {
    let home = document.querySelector(".homeIcon");
    let sjef = document.querySelector(".sjefIcon");
    let shopping = document.querySelector(".shoppingIcon");
    home.classList.remove("activeNavItem");
    sjef.classList.add("activeNavItem");
    shopping.classList.remove("activeNavItem");
    this.setState({ homeActive: false });
    this.setState({ sjefActive: true });
    this.setState({ shoppingActive: false });
    this.props.setSjef();
  };

  setShoppingActive = () => {
    let home = document.querySelector(".homeIcon");
    let sjef = document.querySelector(".sjefIcon");
    let shopping = document.querySelector(".shoppingIcon");
    home.classList.remove("activeNavItem");
    sjef.classList.remove("activeNavItem");
    shopping.classList.add("activeNavItem");
    this.setState({ homeActive: false });
    this.setState({ sjefActive: false });
    this.setState({ shoppingActive: true });
    this.props.setShopping();
  };

  render() {
    return (
      <div className="bottomNavBar">
        <div className="insideBottomNavBar">
          <div className="homeIcon activeNavItem" onClick={this.setHomeActive}>
            <img
              src={this.state.homeActive ? homeActiveIcon : homeIcon}
              onClick={this.setHomeActive}
              alt="Home"
            />
          </div>
          <div className="sjefIcon" onClick={this.setSjefActive}>
            <img
              src={this.state.sjefActive ? sjefActiveIcon : sjefIcon}
              onClick={this.setSjefActive}
              alt="Sjef"
            />
          </div>
          <div className="shoppingIcon" onClick={this.setShoppingActive}>
            <img
              src={
                this.state.shoppingActive
                  ? shoppinglistActiveIcon
                  : shoppinglistIcon
              }
              onClick={this.setShoppingActive}
              alt="Shopping List"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BottomNavBar;
