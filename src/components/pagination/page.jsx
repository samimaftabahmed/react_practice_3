import React, { Component } from "react";

class Page extends Component {
  state = {};
  render() {
    const { pageNo, onPageChange, currentPage } = this.props;
    return (
      <li className={this.getPageClasses(pageNo, currentPage)}>
        <a className="page-link" href="/#" onClick={() => onPageChange(pageNo)}>
          {pageNo}
        </a>
      </li>
    );
  }

  getPageClasses = (pageNo, currentPage) => {
    return pageNo === currentPage ? "page-item active" : "page-item";
  };
}

export default Page;
