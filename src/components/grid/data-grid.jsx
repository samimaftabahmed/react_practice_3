import React, { Component } from "react";
import DataRow from "./data-row";

class DataGrid extends Component {
  state = {};
  render() {
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
          <DataRow />
        </tbody>
      </table>
    );
  }
}

export default DataGrid;
