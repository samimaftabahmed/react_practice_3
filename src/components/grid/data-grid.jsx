import React, { Component } from "react";
import DataRow from "./data-row";

class DataGrid extends Component {
  state = {};
  render() {
    const { movies } = this.props;
    let i = 1;

    return (
      <table className="table table-bordered">
        <thead>
          <tr className="table-primary">
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">imdbRating</th>
            <th scope="col">Type</th>
            <th scope="col">Liked</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <DataRow
              key={++i}
              slno={i}
              title={movie.Title}
              genre={movie.Genre}
              imdbRating={movie.imdbRating}
              type={movie.Type}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default DataGrid;
