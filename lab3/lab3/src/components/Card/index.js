import React from "react";
import "./index.css";
import data from "../../data.json";

class Card extends React.Component {
  render(){
    return(<div className="card">{this.props.content}</div>);

  }
}


export default Card;
