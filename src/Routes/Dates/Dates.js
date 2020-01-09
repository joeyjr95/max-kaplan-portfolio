import React, { Component } from "react";
import PortContext from "../../Context/Context";
export default class Dates extends Component {
  static contextType = PortContext;
  render() {
    const { shows = [] } = this.context;
    return (
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
    );
  }
}
