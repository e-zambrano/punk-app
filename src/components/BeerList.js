import { Component } from "react";
import Beer from "./Beer.js";
import axios from "axios";

export default class BeerList extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((response) => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <>
        <h2>Beer List ({this.state.beers.length})</h2>

        {this.state.beers.map((beer) => {
          return <Beer key={beer.id} name={beer.name} abv={beer.abv} />;
        })}
      </>
    );
  }
}
