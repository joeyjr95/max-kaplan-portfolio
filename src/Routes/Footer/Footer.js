import React, { Component } from "react";
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFacebook,
    faInstagram,
   } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
    render(){
        return(
            <>
      <footer className="footer">
        <div className="contact-info">
            <a href="mailto:mkappy33@gmail.com" rel="noopener noreferrer" target="_blank"> <FontAwesomeIcon icon={faEnvelope} className="icon"/></a>
            <a href="https://www.facebook.com/og.kappy/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} className="icon"/> </a> 
            <a href="https://www.instagram.com/mkappy33/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
        </div>
             
      </footer>
      </>
        )
    }
}