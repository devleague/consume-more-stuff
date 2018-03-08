import React from 'react';

const Item = ({
  id,
  name,
  price,
  model,
  dimensions,
  created_at,
  updated_at,
  notes,
  user,
  category,
  condition,
  itemStatus,
  image }) => {
    return (
      <div className="item">
        <ul>
        { name && <li>Name: {name}</li> }
        { price && <li>Price: {price}</li> }  
        { model && <li>Model: {model}</li> }
        { dimensions && <li>Dimensions: {dimensions}</li> }
        { created_at && <li>Created at: {created_at}</li> }
        { updated_at && <li>Updated at: {updated_at}</li> }
        { user && <li>User: {user.username}</li> }
        { category && <li>Category: {category.category}</li> }
        { condition && <li>Condition: {condition.condition}</li> }
        { itemStatus && <li>Status: {itemStatus.status}</li> }
        { notes && <li>Notes: {notes}</li> }
        { image && <li>Image: {image}</li> }
        </ul>
      </div>
  )
}

export default Item;