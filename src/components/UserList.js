import React from 'react';
import UserDetailView from './UserDetailView';


const UserList = ({users,loadUser}) => {
  return (
    <div className='allItemList'>
     {
        users.map((user,idx) => {
          return (
            <UserDetailView
              loadUser={loadUser}
              key={idx}
              id={user.id}
              username={user.username}
              password={user.password}
              email={user.email}
              userstatus={user.userstatus}
            />
          )
        })
      }
    </div>

  )
}


export default UserList;


