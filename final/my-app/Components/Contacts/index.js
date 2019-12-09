import React from "react";
import "./index.css";

class Contacts extends React.Component {

  constructor(props) {
        super(props);

        this.state = { contacts: {}};
    }

    componentDidMount() {
      fetch("https://apiexample.website/contacts", {
        "method": "GET",
        "headers": {
          "api": "abdulhak"
        }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({ contacts: data}
            )
        })

      }
export default Contacts;
