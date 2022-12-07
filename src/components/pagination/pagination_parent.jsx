import React, { Component } from "react";
import Page from "./page";
import _ from "lodash";
class Pagination extends Component {
  state = {
    currentPage: 1,
  };
  render() {
    const { pageSize, totalElements } = this.props;
    const totalPages = Math.ceil(totalElements / pageSize);
    const pages = _.range(1, totalPages + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((pageNo) => (
            <Page
              key={pageNo}
              pageNo={pageNo}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          ))}
        </ul>
      </nav>
    );
  }

  handlePageChange = (pageNo) => {
    console.log("Page No:", pageNo);
    this.setState({ currentPage: pageNo });
  };
}

export default Pagination;
