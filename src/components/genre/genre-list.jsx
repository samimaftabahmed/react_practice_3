import React, { Component } from "react";
import Genre from "./genre";

class GenreList extends Component {
  state = {};

  render() {
    const { genres, onGenreFilter, selectedGenre } = this.props;
    let i = 0;
    return (
      <div className="list-group">
        {Array.from(genres).map((genre) => (
          <Genre
            genreName={genre}
            selectedGenre={selectedGenre}
            key={++i}
            onGenreFilter={onGenreFilter}
          />
        ))}
      </div>
    );
  }
}

export default GenreList;
