import React, { Component } from "react";
import "./LandingPage.scss";
export default class LandingPage extends Component {
  state = {
    dates: [
      {
        id: 1,
        date: "January 12th",
        name: "Huey's Georgetown",
        location: "Memphis, Tennessee"
      },
      {
        id: 2,
        date: "January 17th",
        name: "Ground Zero Blues Club",
        location: "Clarksdale, Mississippi"
      },
      {
        id: 3,
        date: "January, 29th",
        name: "Beale Street Tap Room",
        location: "Memphis, Tennessee"
      },
      {
        id: 4,
        date: "January, 30th",
        name: "Beale Street Tap Room",
        location: "Memphis, Tennessee"
      },
      {
        id: 5,
        date: "January 31st",
        name: "Blues City Cafe",
        location: "Memphis, Tennessee"
      },
      {
        id: 6,
        date: "February 1st",
        name: "Hernando's Hideaway",
        location: "Memphis, Tennessee"
      }
    ]
  };
  render() {
    const { dates = [] } = this.state;
    return (
      <div>
        <div className="landing-page-bg"></div>
        <div className="landing-venue-info">
          <h3>Upcoming Dates</h3>
          {dates.map(venue => (
            <ul className={`venue-${venue.id}`}>
              <li>{venue.date}</li>
              <li>{venue.name}</li>
              <li>{venue.location}</li>
            </ul>
          ))}
        </div>
        <div className="landing-about">
          <h3>About Max</h3>
          <p>
            {" "}
            Max Kaplan is a Memphis, Tennessee based studio and touring bassist,
            guitarist, and lead/ background vocalist. Max has a degree in Music
            Performance and Theory from Rhodes College in Memphis, Tennessee.
          </p>
          <p>
            {" "}
            Born in New York City, Max moved to New Jersey at the Age of 5. His
            mother is a fine artist, his step- mother a fashion designer, and
            his father a guitarist. He began learning blues guitar from his
            father at the age of 10. He grew up sitting in with the blues bands
            that would play at his fathers BBQ restaurant, Ruthie’s BBQ in
            Montclair, NJ. At the age of 18, Max moved to Memphis to pursue a
            degree in music, with a minor in English. Subsequently, Max decided
            to stay in Memphis to begin a career as a professional musician.
            {" "}
          </p>
          <p>
            {" "}
            Max has shared the stage with acts such as John Németh, Mitch
            Kashmar, John Paul Keith, and currently tours with Tony Holiday, as
            well as fronts his own band.
          </p>
        </div>
      </div>
    );
  }
}
