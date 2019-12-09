import React from "react";
import "./index.css";

class Contacts extends React.Component {

  <p>Contact Me</p>
  <div>
  <form action="/action_page.php">
  <label>First Name</label>
  <inputtype="text"id="fname"name="firstname"placeholder="Your name.."/>
  <label>Last Name</label>
  <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>


  <label>Email</label>
  <inputtype="email"id="email"name="email"placeholder="Your email"/>


  <label>Subject</label>
  <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
  <input type="submit"value="Submit"/>
  </form>
  </div>
export default Contacts;
