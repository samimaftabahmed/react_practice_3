import React, { Component } from "react";
import Genre from "./genre";

class GenreList extends Component {
  state = {};
  render() {
    return (
      <div className="list-group">
        <Genre />
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
