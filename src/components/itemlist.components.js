// component-container, a redux style dummy container
import React from 'react';
import Item from'./item.components';

const ItemList = ({items}) => {

  return (
    <div className="item-list"> {
      items.map((item) => {
 //renders X amount of items
        return (
          <Item
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          category={item.Category.category}
          condition={item.Condition.condition}
          owner={item.User.username}
          sold={item.Status.sold}
          key={item.id}/>
        );
      })
    }
    </div>
  );
}

export default ItemList;