import React, { Component } from "react";
import Page from "./page";
import _ from "lodash";
import PropTypes from "prop-types";

class Pagination extends Component {
  state = {};
  render() {
    const { pageSize, totalElements, currentPage, onPageClick } = this.props;
    const totalPages = Math.ceil(totalElements / pageSize);
    const pages = _.range(1, totalPages + 1);

    if (totalElements <= pageSize) {
      // Hides pagination
      return null;
    } else {
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
}

// PropTypes used for type checking in development mode. Good practice to include these.
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  totalElements: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default Pagination;
