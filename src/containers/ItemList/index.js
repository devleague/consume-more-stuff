import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Item from '../../components/Item';
import {loadItems} from '../../actions/itemActions';


export default (props) => {

  const items = props.items;

    return (
      <div className="category-list">

        {items.filter((element) => {
          return element.category_id === props.category;
        })       
        .map((element,idx) => {
          return (
            <Link to={`/item/${element.id}`} key={idx} >
              <p>{element.name}</p>
              <p>{element.price}</p>
              <p>{element.image}</p>
            </Link>

          )
        })}

      </div>
    )
}
