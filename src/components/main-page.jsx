import React, { Component } from "react";
import DataGrid from "./Grid/data-grid";
import GenreList from "./genre/genre-list";
import Pagination from "./pagination/pagination_parent";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <GenreList />
            </div>
            {/* div.col-3 closed */}
            <div className="col-9">
              <DataGrid />
            </div>
            {/* div.col-9 closed */}
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-4 offset-5">
              <Pagination />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
