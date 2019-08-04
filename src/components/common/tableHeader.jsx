import React, { Component } from 'react';

class tableHeader extends Component {

  raiseSort = path => {
    const { sortColumn: allSort, onSort } = this.props;
    const sortColumn = { ...allSort }
    if (sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';

    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    onSort(sortColumn)
  }
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th key={column.label} onClick={() => this.raiseSort(column.path)}>{column.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default tableHeader;