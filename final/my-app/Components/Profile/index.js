import React from 'react';
import "./index.css";

class Profile extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
    }
  }

    componentDidMount() {
      fetch("https://apiexample.website/profile", {
       {
          "api": "abdulhak"
        }


export default Profile;
