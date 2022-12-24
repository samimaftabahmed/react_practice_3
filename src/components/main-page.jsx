import React, { Component } from "react";
import DataGrid from "./grid/data-grid";
import GenreList from "./genre/genre-list";
import Pagination from "./pagination/pagination_parent";
import { getMovies } from "../services/movie-data";
import _ from "lodash";

class MainPage extends Component {
  state = {
    movies: [],
    currentPage: 1,
    selectedGenre: "All Genres",
  };

  constructor() {
    super();
    this.genres = new Set();
    this.populateGenres();
  }

  render() {
    const pageSize = 5;
    const movies =
      this.state.selectedGenre !== ""
        ? this.filterByGenre(this.state.selectedGenre)
        : [...getMovies()];

    const paginatedMovies = this.getPaginatedData(
      this.state.currentPage,
      pageSize,
      movies
    );

    this.state.movies = [...movies];

    return (
      // React.Fragment alternative is <> content </>
      <>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h3>Genres</h3>
              Total genres {this.genres.size}
              <GenreList
                genres={this.genres}
                selectedGenre={this.state.selectedGenre}
                onGenreFilter={this.onGenreSelected}
              />
            </div>
            {/* div.col-3 closed */}
            <div className="col-10">
              <h3>Movies</h3>
              Total movies available {this.state.movies.length}
              <DataGrid movies={paginatedMovies} />
            </div>
            {/* div.col-9 closed */}
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-4 offset-5">
              <Pagination
                pageSize={pageSize}
                totalElements={this.state.movies.length}
                onPageClick={this.handlePaginatedData}
                currentPage={this.state.currentPage}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  populateGenres() {
    this.genres.add("All Genres");
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

  onGenreSelected = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  filterByGenre(genreToFilter) {
    if (genreToFilter === "All Genres") {
      return getMovies();
    }

    let result = new Set();
    getMovies().forEach((movie) => {
      movie.Genre.split(",").forEach((genre) => {
        if (genre.trim() === genreToFilter) {
          result.add(movie);
        }
      });
    });

    let filteredMovies = Array.from(result);
    return filteredMovies;
  }
}

export default MainPage;
