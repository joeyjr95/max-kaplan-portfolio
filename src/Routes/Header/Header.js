/* eslint-disable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import PortContext from "../../Context/Context";

export default class Header extends Component {
  static contextType = PortContext;
  fullScreenMenu = display => {
    if (display === false) {
      return null;
    } else {
      return (
        <div className="fullscreen-menu">
          <ul>
            <li>
              <Link to="/shows">Upcoming Shows</Link>
            </li>
            <li>
              <Link to="/about">About Max</Link>
            </li>
            <li>
              <Link to="/Media">Media</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      );
    }
  };

  render() {
    const { display } = this.context;
    return (
      <header>
        <div className="flexBody">
          <Link exact to="/">
            <h1>Max Kaplan</h1>
          </Link>
          <a href="#" onClick={() => this.context.setDisplay()}>
            {!display ? (
              <FontAwesomeIcon icon={faBars} className="icon" />
            ) : (
              <FontAwesomeIcon icon={faTimes} className="icon" />
            )}
          </a>
        </div>
        {this.fullScreenMenu(display)}
      </header>
    );
  }
}