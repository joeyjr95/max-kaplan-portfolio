/* eslint-disable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  state = {
    display: false
  };
  displayMenu() {
    if (this.state.display === false) {
      this.setState({ display: true });
    } else {
      this.setState({ display: false });
    }
  }
  fullScreenMenu = display => {
    if (display === false) {
      return null;
    } else {
      return (
        <div className="fullscreen-menu">
          <ul>
            <li>
              <Link to="/Dates">Upcoming Shows</Link>
            </li>
            <li>
              <Link to="/About">About Max</Link>
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
    const { display } = this.state;
    console.log(display);
    return (
      <header>
        <div className="flexBody">
          <Link exact to="/">
            <h1>Max Kaplan</h1>
          </Link>
          <a href="#" onClick={() => this.displayMenu()}>
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
