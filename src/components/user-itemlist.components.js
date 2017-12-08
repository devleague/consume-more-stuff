import React from 'react';
import { FormattedRelative } from 'react-intl';
import { Link } from 'react-router-dom';

const UserItemList = ({ items, soldValue, title }) => {
  return(
    <div className="single-item">
      <h2>{ title }</h2>
      {
      items
      .filter(item => {
        return item.is_sold === Number(soldValue);
      })
      .filter(item => {
        return !item.deletedAt;
      })
      .map((itemDetails, idx) => {
        const url = /^http/;
        let imageUrl = itemDetails.imageUrl;
         // if imageUrl is not an http link AND this is a request from the single item view
        if (!url.test(imageUrl)) {
          imageUrl = '/' + imageUrl;
        }

        return (
          <div className="unsold" key={idx}>
            <Link to={`/items/${itemDetails.id}`}>
              <h3>{ itemDetails.name }</h3>
              <img className="uploaded-img" src={ imageUrl } alt="not found" />
            </Link>
            <div>Price: ${ itemDetails.price } </div>
            <div>Description: { itemDetails.description } </div>
            <div>
              <h3>Posted:</h3> <FormattedRelative value={ itemDetails.createdAt } />
            </div>
         </div>
        )
      })
    }
    </div>
  )
}


export default UserItemList;