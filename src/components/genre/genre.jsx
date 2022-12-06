import React, { Component } from "react";

class Genre extends Component {
  state = {};
  render() {
    const { genreName } = this.props;
    return (
      <a href="#" className="list-group-item list-group-item-action">
        {genreName}
      </a>
    );
  }
}

export default Genre;
