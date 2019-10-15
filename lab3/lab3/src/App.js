import React from 'react';
import './App.css';

import Card from "./components/Card/index.js"

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Card content="This is content!"/>
    </div>

  );
}
}
export default App;
