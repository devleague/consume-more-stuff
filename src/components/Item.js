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
        { name && <li>{name.toUpperCase()}</li> }
        { price && <li>$ {price}</li> }  
        { model && <li>Model / Make: {model}</li> }
        { dimensions && <li>Dimensions: {dimensions}</li> }
        { created_at && <li>Created at: {created_at}</li> }
        { updated_at && <li>Updated at: {updated_at}</li> }
        { user && <li>Posted by: {user.username}</li> }
        { category && <li> > {category.category.toUpperCase()}</li> }
        { condition && <li>Condition: {condition.condition}</li> }
        { itemStatus && <li>Status: {itemStatus.status.toUpperCase()}</li> }
        { notes && <li>Description: {notes}</li> }
        { image && <li>Image: {image}</li> }
        </ul>
      </div>
  )
}

export default Item;