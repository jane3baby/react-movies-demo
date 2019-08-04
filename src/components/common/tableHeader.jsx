import React, { Component } from "react";

class tableHeader extends Component {
  state = {
    icon: "fa fa-angle-down"
  };

  raiseSort = path => {
    const { sortColumn: allSort, onSort } = this.props;
    const { icon } = this.state;
    const sortColumn = { ...allSort };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({
      icon: icon === "fa fa-angle-up" ? "fa fa-angle-down" : "fa fa-angle-up"
    });
    onSort(sortColumn);
  };
  render() {
    const { icon } = this.state;
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th key={column.label} onClick={() => this.raiseSort(column.path)}>
              {column.label} <i className={icon} />
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default tableHeader;
