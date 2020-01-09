import React, { Component } from "react";
import PortContext from '../../Context/Context';
import "./LandingPage.scss";
export default class LandingPage extends Component {
  static contextType = PortContext;
  
  render() {
    const { shows = [], bio=[] } = this.context;
    return (
      <div>
        <div className="landing-page-bg"></div>
        <div className="landing-venue-info">
          <h3>Upcoming Dates</h3>
          {shows.map(venue => (
            <ul className={`venue-${venue.id}`}>
              <li>{venue.date}</li>
              <li>{venue.name}</li>
              <li>{venue.location}</li>
            </ul>
          ))}
        </div>
        <div className="landing-about">
          <h3>About Max</h3>
          {bio.map(para => (
            <p>{" "}{para.paragraph}</p>
          ))}
        </div>
      </div>
    );
  }
}
