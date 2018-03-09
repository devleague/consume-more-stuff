import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

export default (props) => {

  const items = props.items;
    return (
      <div className="status-list">

        {items.filter((element) => {
          return element.item_status_id === props.itemStatus;
        })       
        .map((element,idx) => {
          return (
            <Link to={`/item/${element.id}`} key={idx} >
              <p>{element.name}</p>
              <p>{element.itemStatus.status}</p>
              <p>{element.price}</p>
              <p>{element.image}</p>
            </Link>
          )
        })}

      </div>
    )
}
