import React from 'react';

const ListGroup = props => {

  const { onItemSelect, items, textProperty, valueProperty, selectedItem } = props;
  
  return (
    <nav>
      <ul className="list-group">
        {items.map(ele => (
          <li key={ele[valueProperty]}
            className={ele === selectedItem ? 'list-group-item active' : 'list-group-item'}
            onClick={() => onItemSelect(ele)}>
            {ele[textProperty]}
          </li>
        ))}

      </ul>
    </nav>
  )

}
ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default ListGroup