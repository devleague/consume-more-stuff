import React from 'react';

const Item = ({ id, name, description, manufacturer, modelname, price, category, condition, sold, createdBy }) => {
    return (
    <div className="Item">
      <div> ID: {id} </div>
      <div> Name: {name} </div>
      <div> Description: {description} </div>
      <div> Manufacturer: {manufacturer} </div>
      <div> Model Name: {modelname} </div>
      <div> Price: {price} </div>
      <div> Category: {category} </div>
      <div> Condition: {condition} </div>
      <div> Sold: {sold} </div>
      <div> Owner: {createdBy} </div>
    </div>
    );
  }

export default Item;