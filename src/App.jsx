import React, { Component } from "react";
import menuData from "./assets/MenuData/menuData";

import "./App.css";

import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <div className="foods-container">
          {menuData.map(({ img, title, price, desc }, index) => (
            <Menu
              key={index}
              imageSrc={img}
              title={title}
              price={price}
              description={desc}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
