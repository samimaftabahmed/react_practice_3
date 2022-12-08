import React, { Component } from "react";
import Page from "./page";
import _ from "lodash";

class Pagination extends Component {
  state = {};
  render() {
    const { pageSize, totalElements, currentPage, onPageClick } = this.props;
    const totalPages = Math.ceil(totalElements / pageSize);
    const pages = _.range(1, totalPages + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((pageNo) => (
            <Page
              key={pageNo}
              pageNo={pageNo}
              onPageChange={() => onPageClick(pageNo, pageSize)}
              currentPage={currentPage}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
