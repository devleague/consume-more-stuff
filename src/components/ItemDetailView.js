import React from 'react';

const ItemDetailView = ({id, name, user, itemstatusId, desciption, image, price, conditionId, categoryId, manufacturer, model, dimensions, notes, createdAt, updatedAt}) => {
  return (
    <div className='eachItem'>
      <ol>
        Item-Id: {id}
        Name:{name}
        User: {userId}
        Item Status: {itemstatusId}
        Description:{desciption}
        Image:{image}
        Price:{price}
        Condition:{conditionId}
        Category:{categoryId}
        Manufacturer:{manufacturer}
        Model:{model}
        Dimensions:{dimensions}
        Notes:{notes}
        Posted At: {createdAt}
        Updated At: {updatedAt}
      </ol>
    </div>
  )
}




export default ItemDetailView;