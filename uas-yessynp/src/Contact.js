import React, { Component } from "react";
import c from './c.png';

class Contact extends Component {
  render() {
    return (
      <div class="card text-center">
      <div>
        <h2>Contact</h2>
        <img src={c}  width="250" height="300"/>
        <br></br>
        </div>
        <p>Email : fiyalaptop@gmail.com </p>
        <p>Phone : 088276318631</p>
        <p>Instagram : @fiyalaptop</p>
      </div>
      
    );
  }
}
 
export default Contact;