import React, { Component } from 'react';

class Add extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
    }
  }

  handleFormSubmit( event ) {
  event.preventDefault();
  console.log(this.state);
}

  componentDidMount() {

    fetch("https://apiexample.website/contacts/add", {
     {
        "api": "abdulhak",
        },





export default Add;
