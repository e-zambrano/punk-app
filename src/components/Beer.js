import { Component } from "react";

export default class Beer extends Component {
  render() {
    return (
      <div className="beer-container">
        {this.props.name}, {this.props.abv}
      </div>
    );
  }
}
