// component-container, a redux style dummy container
import React from 'react';
import Item from'./item.components';

const ItemList = ({ items }) => {
  return (
    <div id="item-list"> {
      items.map((item, idx) => {
        //renders X amount of items
        return (
          <Item
          singleItem={ item }
          key={ idx } />
        );
      })
    }
    </div>
  );
}

export default ItemList;