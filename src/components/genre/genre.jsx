import React, { Component } from "react";

class Genre extends Component {
  state = {};
  render() {
    const { genreName, onGenreFilter, selectedGenre } = this.props;
    return (
      <a
        href="/#"
        onClick={() => onGenreFilter(genreName)}
        className={this.getGenreClasses(genreName, selectedGenre)}
      >
        {genreName}
      </a>
    );
  }

  getGenreClasses(genre, selectedGenre) {
    let cssClasses = "list-group-item list-group-item-action";
    if (genre === selectedGenre) {
      cssClasses += " active";
    }
    return cssClasses;
  }
}

export default Genre;
