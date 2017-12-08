import React from 'react';
import UserItemList from './user-itemlist.components';

const UserItem = ({ singleUser }) => {
  return (
    <div className="single-user">
         <UserItemList 
          items={singleUser.Items} 
          soldValue="1" 
          title="Items For Sale" />

         <UserItemList 
          items={singleUser.Items} 
          soldValue="2" 
          title="Sold Items" />

      </div>
  );
}

export default UserItem;