import React from 'react';

const ItemDetailView = ({id, name, userId, itemstatusId, description, image, price, conditionId, categoryId, manufacturer, model, dimensions, notes, createdAt, updatedAt,loadSingleItem,edit}) => {
  return (
    <div className='eachItem'>
      <ol>

        <div className="all-view-title">
            <span onClick={(e)=>loadSingleItem(id,e)}><h1>Item #{id}</h1></span>
            <h2>{name}</h2>
            <img alt='Preview' src={image}/><br />
        </div>

        <div className="all-view-details">
            {description}<br/><br/>
            Price: $ {price}<br/>
            <b>User:</b> {userId}<br/>
            <b>Item Status:</b> {itemstatusId}<br/>
            <b>Condition:</b>{conditionId}<br/>
            <b>Category:</b>{categoryId}<br/>
            <b>Manufacturer:</b>{manufacturer}<br/>
            <b>Model:</b>{model}<br/>
            <b>Dimensions:</b>{dimensions}<br/>
            <b>Notes:</b>{notes}<br/><br/>
            <b>Posted At: </b>{createdAt}<br/>
            <b>Updated At: </b>{updatedAt}<br/>
        </div>


      </ol>
    </div>
  )
}




export default ItemDetailView;