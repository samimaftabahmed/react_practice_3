import React, { Component } from "react";
import DataGrid from "./grid/data-grid";
import GenreList from "./genre/genre-list";
import Pagination from "./pagination/pagination_parent";
import { getMovies } from "../services/movie-data";

class MainPage extends Component {
  state = {
    movies: getMovies(),
  };

  constructor() {
    super();
    this.genres = new Set();
    this.populateGenres();
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-1">
              <h3>Genres</h3>
              <GenreList genres={this.genres} />
            </div>
            {/* div.col-3 closed */}
            <div className="col-11">
              <h3>Movies</h3>
              <DataGrid />
            </div>
            {/* div.col-9 closed */}
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-4 offset-5">
              <Pagination />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  populateGenres() {
    getMovies().forEach((movie) => {
      const genreSplit = movie.Genre.split(",");
      genreSplit.forEach((genre) => {
        this.genres.add(genre.trim());
      });
    });
  }
}

export default MainPage;
