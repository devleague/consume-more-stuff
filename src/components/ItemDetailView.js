import React from 'react';

const ItemDetailView = ({id, name, userId, itemstatusId, description, image, price, conditionId, categoryId, manufacturer, model, dimensions, notes, createdAt, updatedAt,loadSingleItem,edit}) => {
  return (
    <div className='eachItem'>
      <ol>

        <span onClick={(e)=>loadSingleItem(id,e)}><b>Item-Id:{id}</b></span><br/><br/>
        <b>Name:</b>{name}<br/>
        <b>User:</b> {userId}<br/>
        <b>Item Status:</b> {itemstatusId}<br/>
        <b>Description:</b>{description}<br/>
        <b>Image:</b>{image}<br/>
        <b>Price:</b>{price}<br/>
        <b>Condition:</b>{conditionId}<br/>
        <b>Category:</b>{categoryId}<br/>
        <b>Manufacturer:</b>{manufacturer}<br/>
        <b>Model:</b>{model}<br/>
        <b>Dimensions:</b>{dimensions}<br/>
        <b>Notes:</b>{notes}<br/>
        <b>Posted At: </b>{createdAt}<br/>
        <b>Updated At: </b>{updatedAt}<br/>

        <div className="all-view-title">
            <span onClick={(e)=>loadSingleItem(id,e)}><h1>Item #{id}</h1></span>
            <h2>{name}</h2>
            <img src={image} /><br />
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