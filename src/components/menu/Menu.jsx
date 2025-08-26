import React, { Component } from "react";

class Menu extends Component {
  render() {
    let { imageSrc, title, price, description } = this.props;
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={imageSrc} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">{description}</div>
        </div>
      </>
    );
  }
}

export default Menu;
