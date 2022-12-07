import React, { Component } from "react";

class Page extends Component {
  state = {};
  render() {
    const { number, onPageChange } = this.props;
    return (
      <li className="page-item">
        <a className="page-link" onClick={() => onPageChange(number)}>
          {number}
        </a>
      </li>
    );
  }
}

export default Page;
