import React from 'react';


const SingleUser = ({user,backToUsers,handleSubmit,handleChangeUsername,handleChangePassword,handleChangeEmail,editNow,auth,edit}) => {
    return (
    <div className='eachItem'>
      <ol>
        <button onClick={(e)=>backToUsers(e)}>Back</button>
        {!edit ?
          <form onSubmit={this.handleSubmit}>
            <b>User-Id:</b> {user ? user[0].id : null}<br/>
            <b>Username:{user ? user[0].username : null}</b><br/>
            <b>Password:</b> {user ? user[0].password : null}<br/>
            <b>email:</b> {user ? user[0].email : null}<br/>
            <b>User-Status</b> {user ? user[0].userstatus : null}<br/>
          </form>
          : <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              placeholder={user[0].username}
              onChange={handleChangeUsername}/>
            <input 
              type="text" 
              placeholder={user[0].password} 
              onChange={handleChangePassword}/>
            <input 
              type="text" 
              placeholder={user[0].email} 
              onChange={handleChangeEmail}/>
          </form>}
        {auth ? 
        <button 
          onClick={(e)=>editNow(user,e)}>
          {edit ? 'SUBMIT' : 'EDIT'}</button> : null}
      </ol>
    </div>
  )
}




export default SingleUser;