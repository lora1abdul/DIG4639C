import React from 'react';
import './App.css';
import CardList from '../src/components/CardList/index.js'
import Card from "./components/Card/index.js"

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <CardList content="This is content!"/>
    </div>

  );
}
}
export default App;
