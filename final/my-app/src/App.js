import React from 'react';
import Add from "./Components/Add/index.js";
import Contacts from "./Components/Contacts/index.js";
import Profile from "./Components/Profile/index.js";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  componentDidMount() {

    window.fetch("https://apiexample.website/contacts", {headers: {API: "abdulhak"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });

  }

  render() {
    return (
      <div>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name}</p>;
         })
       }
      </div>
    );
  }
}

export default App;
