import React, { Component } from 'react';

class Add extends React.Component {



  getValue = (event) => {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const number = document.querySelector("#number").value;

    this.setState({"name": name, "number": number});

  }

  componentDidMount() {

    fetch("https://apiexample.website/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "abdulhak",
        },
        
      "body": JSON.stringify({
        "name": this.state.added.name,
        "number": this.state.added.number
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({added: data.added}) )
    });

  }


export default Add;
