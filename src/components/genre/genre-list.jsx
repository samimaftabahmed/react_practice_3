import React, { Component } from "react";
import Genre from "./genre";

class GenreList extends Component {
  state = {};

  render() {
    const { genres } = this.props;
    let i = 0;
    return (
      <div className="list-group">
        {Array.from(genres).map((genre) => (
          <Genre genreName={genre} key={++i} />
        ))}

        {/* <a
          href="#"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          The current link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A second link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A third link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A fourth link item
        </a>
        <a class="list-group-item list-group-item-action disabled">
          A disabled link item
        </a> */}
      </div>
    );
  }
}

export default GenreList;
