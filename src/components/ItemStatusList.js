import React, {Component} from 'react';
import ItemDetailView from './ItemDetailView';

const ItemStatusList = ({items, statusId}) => {
  console.log('itemstatuslist', items)
  return (
    <div className='itemStatusList'>
      {
        items.filter( (item) => {
          return item.itemstatus.id === Number(statusId);
        }).map( (categoryItem) => {
          return (
            <ItemDetailView
              id={categoryItem.id}
              name={categoryItem.name}
              description={categoryItem.description}
              image={categoryItem.image}
              price={categoryItem.price}
              manufacturer={categoryItem.manufacturer}
              model={categoryItem.model}
              dimensions={categoryItem.dimensions}
              notes={categoryItem.notes}
              createdAt={categoryItem.createdAt}
              updatedAt={categoryItem.updatedAt}
              itemstatusId={categoryItem.itemstatus.title}
              userId={categoryItem.seller.username}
              conditionId={categoryItem.itemcondition.title}
              categoryId={categoryItem.itemcategory.title}
            />
          )
        })
      }
    </div>
  )
}


export default ItemStatusList;
