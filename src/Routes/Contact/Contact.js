import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFacebook,
    faInstagram,
   } from "@fortawesome/free-brands-svg-icons";
import PortContext from "../../Context/Context";
import './Contact.scss';

export default class Contact extends Component {
    static contextType = PortContext;
  componentDidMount(){
    this.context.defaultDisplay()
  }
    render(){
        return(
            <div className="contact">
                <h3>Contact</h3>
                <p>You can contact Max by messaging him on one of the links provided below:</p>
                <ul>
                <li><a href="mailto:mkappy33@gmail.com" rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faEnvelope} className="icon"/> email</a></li>
                <li><a href="https://www.facebook.com/og.kappy/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} className="icon"/> facebook</a></li> 
                <li><a href="https://www.instagram.com/mkappy33/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon"/> instagram</a></li>
                </ul>
            </div>
        )
    }
}