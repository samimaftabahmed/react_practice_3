import React, { Component } from "react";
import Page from "./page";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <Page />
        </ul>
      </nav>
    );
  }
}

export default Pagination;
