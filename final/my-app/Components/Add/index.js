import React, { Component } from 'react';

class Add extends React.Component {



  getValue = (event) => {


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



export default Add;
