import React from "react";
import Card from "../Card/";
import data from "../../data.json";

class CardList extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {cards: data.cards};
  }


    render() {
        return(
          <div>
        
              {
                  this.state.cards.map((card, index) => {
                    return <Card 
                        key={index}
                        title={card.title} 
                        content={card.content}
                        removedog={this.removeDog}
                        />
                })
              }
             
          </div>
        );
      }
    
    
    } 


export default CardList;