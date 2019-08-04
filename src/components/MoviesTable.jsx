import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      content: item => (
        <Like onClick={() => this.props.onLike(item)} liked={item.love} />
      ),
      label: "like"
    },
    {
      content: item => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(item)}
        >
          delete
        </button>
      ),
      label: "edit"
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
