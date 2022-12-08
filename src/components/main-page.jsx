import React, { Component } from "react";
import DataGrid from "./grid/data-grid";
import GenreList from "./genre/genre-list";
import Pagination from "./pagination/pagination_parent";
import { getMovies } from "../services/movie-data";
import _ from "lodash";

class MainPage extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
  };

  constructor() {
    super();
    this.genres = new Set();
    this.populateGenres();
  }

  render() {
    const pageSize = 5;
    const paginatedMovies = this.getPaginatedData(
      this.state.currentPage,
      pageSize,
      [...getMovies()]
    );

    return (
      <React.Fragment>
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
              <DataGrid movies={paginatedMovies} />
            </div>
            {/* div.col-9 closed */}
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-4 offset-5">
              <Pagination
                pageSize={pageSize}
                totalElements={getMovies().length}
                onPageClick={this.handlePaginatedData}
                currentPage={this.state.currentPage}
              />
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

  handlePaginatedData = (pageNo, pageSize) => {
    const movies = [...getMovies()];
    const paginated_movies = this.getPaginatedData(pageNo, pageSize, movies);
    this.setState({ movies: paginated_movies, currentPage: pageNo });
  };

  getPaginatedData(pageNo, pageSize, movies) {
    const startIndex = (pageNo - 1) * pageSize;
    return _(movies).slice(startIndex).take(pageSize).value();
  }
}

export default MainPage;
