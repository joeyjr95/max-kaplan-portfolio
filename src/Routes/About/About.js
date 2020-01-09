import React, { Component } from "react";
import PortContext from "../../Context/Context";
import './About.scss'
export default class About extends Component {
  static contextType = PortContext;
  componentDidMount(){
    this.context.defaultDisplay()
  }
  render() {
    const { bio = [] } = this.context;
    return (
        <div className="about">
        <h3>About Max</h3>
        {bio.map(para => (
          <p key={para.id}>{" "}{para.paragraph}</p>
        ))}
      </div>
    );
  }
}