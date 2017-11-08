import React, {Component} from 'react';
import ItemDetailView from '../../components/ItemDetailView'


const AllItemView = ({items}) => {
  return (
    <div className='allItemView'>
      {
        cards.map((item) => {
          return (
            <ItemDetailView
              name={item.id}
              user={item.userId}
              itemstatusId={item.itemstatusId.title}
              description={item.description}
              image={item.image}
              price={item.price}
              conditionId={item.conditionId.title}
              categoryId={item.categoryId.title}
              manufacturer={item.manufacturer}
              model={item.model}
              dimensions={item.dimensions}
              notes={item.notes}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
            />
          )
        })
      }
    </div>

  )
}


export default AllItemView;