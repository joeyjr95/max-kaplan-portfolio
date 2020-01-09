import React, { Component } from "react";
import PortContext from "../../Context/Context";
export default class About extends Component {
  static contextType = PortContext;
  render() {
    const { bio = [] } = this.context;
    return (
        <div className="landing-about">
        <h3>About Max</h3>
        {bio.map(para => (
          <p key={para.id}>{" "}{para.paragraph}</p>
        ))}
      </div>
    );
  }
}