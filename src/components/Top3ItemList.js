import React from 'react';
import ItemDetailView from './ItemDetailView';

const Top3ItemList = ({items, categoryNumber}) => {
  return (
    <div className='allItemList'>
      {
        items.filter( (item) => {
          return item.itemcategory.id === Number(categoryNumber);
        }).map( (categoryItem,idx) => {
          return (
            <ItemDetailView
              key={idx}
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


export default Top3ItemList;
