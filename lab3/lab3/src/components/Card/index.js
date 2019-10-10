import React from "react";
import"src/components/Card/index.css";

class Card extends React.Component {
  render(){
    return(<div className="card">
    <Card content="This is a card!"></Card> </div>);

  }
}


export default Card;
