import React from 'react';
import { FormattedRelative } from 'react-intl';
import { Link } from 'react-router-dom';

const Item = ({ singleItem }) => {
  
  return (
    <div className="single-item">    
      <Link to={`/items/${singleItem.id}`}>
        <div>{ singleItem.name }</div>
      </Link>
      
      <div>Description: { singleItem.description }</div>
      <div>Price: ${ singleItem.price }</div>
      <div>Manufacturer: { singleItem.manufacturer }</div>
      <div>Model: { singleItem.modelname }</div>
      <div>Condition: { singleItem.Condition.condition }</div>
      <div>Category: { singleItem.Category.category }</div>
      <div>
        Updated: <FormattedRelative value={ singleItem.updatedAt } />
      </div>
      <div>
        Posted: <FormattedRelative value={ singleItem.createdAt } />
      </div>
    </div>
  );
}

export default Item;