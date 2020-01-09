import React, { Component } from "react";
const PortContext = React.createContext({
  photos: [],
  videos: [],
  display: false,
  bio: [
      {
          id:1,
          paragraph: ` Max Kaplan is a Memphis, Tennessee based studio and touring bassist,
          guitarist, and lead/ background vocalist. Max has a degree in Music
          Performance and Theory from Rhodes College in Memphis, Tennessee.`
      },
      {
        id:2,
        paragraph: `
        Born in New York City, Max moved to New Jersey at the Age of 5. His
            mother is a fine artist, his step-mother a fashion designer, and
            his father a guitarist. He began learning blues guitar from his
            father at the age of 10. He grew up sitting in with the blues bands
            that would play at his fathers BBQ restaurant, Ruthie’s BBQ in
            Montclair, NJ. At the age of 18, Max moved to Memphis to pursue a
            degree in music, with a minor in English. Subsequently, Max decided
            to stay in Memphis to begin a career as a professional musician.`
    },
    {
        id:3,
        paragraph: `Max has shared the stage with acts such as John Németh, Mitch
        Kashmar, John Paul Keith, and currently tours with Tony Holiday, as
        well as fronts his own band.`
    }
  ],
  shows: [{
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
  }],
  setDisplay: () => {},
});
export default PortContext;

export class PortProvider extends Component {
  state = {
    photos: [],
    videos: [],
    bio: [{
      id:1,
      paragraph: ` Max Kaplan is a Memphis, Tennessee based studio and touring bassist,
      guitarist, and lead/ background vocalist. Max has a degree in Music
      Performance and Theory from Rhodes College in Memphis, Tennessee.`
  },
  {
    id:2,
    paragraph: `
    Born in New York City, Max moved to New Jersey at the Age of 5. His
        mother is a fine artist, his step-mother a fashion designer, and
        his father a guitarist. He began learning blues guitar from his
        father at the age of 10. He grew up sitting in with the blues bands
        that would play at his fathers BBQ restaurant, Ruthie’s BBQ in
        Montclair, NJ. At the age of 18, Max moved to Memphis to pursue a
        degree in music, with a minor in English. Subsequently, Max decided
        to stay in Memphis to begin a career as a professional musician.`
},
{
    id:3,
    paragraph: `Max has shared the stage with acts such as John Németh, Mitch
    Kashmar, John Paul Keith, and currently tours with Tony Holiday, as
    well as fronts his own band.`
}],
    shows: [{
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
    }],
    display: false,
  };
  setDisplay = () => {
    if(this.state.display === false){
      this.setState({display: true})
    }else{
      this.setState({display: false})
    }
  };
  render() {
    const value = {
      photos: this.state.photos,
      videos: this.state.videos,
      bio: this.state.bio,
      shows: this.state.shows,
      display: false,
      setDisplay: this.setDisplay
    };
    return (
      <PortContext.Provider value={value}>
        {this.props.children}
      </PortContext.Provider>
    );
  }
}
