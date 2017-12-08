// component-container, a redux style dummy container
import React from 'react';
import Item from'./item.components';
import { Link } from 'react-router-dom';

const VehicleList = ({ items, categoryId, categoryName }) => {
  return (
    <div>
      <div className="category-header">
         <Link to={`/${categoryName}`}>{ categoryName }</Link>
      </div>

      <div className="vehicle-list" id={categoryName}>
       { items
        .filter(item => {
          return !item.deletedAt;
        })
        .filter(item => {
          return item.is_sold === 1;
        })
        .filter(item => {
          return item.category_id === categoryId;
        })
        .map((item, idx) => {
          //renders X amount of items
          return (
            <Item
            singleItem={ item }
            key={ idx } />
          );
        })
      }
      </div>
    </div>
  );
}

export default VehicleList;