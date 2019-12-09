import React from 'react';
import "./index.css";

class Profile extends React.Component{
  constructor(props) {
        super(props);

        this.state = { profile: {}};
    }

    componentDidMount() {
      fetch("https://apiexample.website/profile", {
        "method": "GET",
        "headers": {
          "api": "abdulhak"
        }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({ profile: data}
            )
        })

      }

export default Profile;
