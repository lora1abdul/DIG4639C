import React from "react";
import"src/components/Card/index.css";

class Card extends React.Component {
  render(){
    return(<div className="card">{this.props.content}
    <Card content="This is a card!"></Card> </div>);

  }
}


export default Card;
