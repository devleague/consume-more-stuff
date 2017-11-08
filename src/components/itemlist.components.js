// component-container, a redux style dummy container
import React from 'react';
import Item from'./item.components';

const ItemList = ({items}) => {
  console.log(items, "COMPONENTS");
  return (
    <div className="item-list"> {
      items.map((item) => { //renders X amount of items
        return (
          <Item
          name={item.name}
          description={item.description}
          price={item.price}
          category={item.category}
          condition={item.condition}
          owner={item.createdBy}
          key={item.id}/>
        );
      })
    }
    </div>
  );
}

export default ItemList;