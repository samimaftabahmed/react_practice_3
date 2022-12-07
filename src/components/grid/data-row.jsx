import React, { Component } from "react";

class DataRow extends Component {
  state = {};
  render() {
    const { title, genre, imdbRating, type, slno } = this.props;

    return (
      <tr>
        <th scope="row">{slno}</th>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{imdbRating}</td>
        <td>{type}</td>
        <td>@mdo</td>
      </tr>
    );
  }
}

export default DataRow;
