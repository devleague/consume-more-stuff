import React from 'react';
import Select from './Select';


const SingleItem = ({item,backToItems,edit,auth,editNow,handleName,handleUser,handleItemStatus,handleDescription,handleImage,handlePrice,handleCondition,handleCategory,handleManufacturer,handleModel,handleDimensions,handleNotes}) => {
    return (
    <div className='eachItem'>
        <div className="back-to-list">
            <button onClick={(e)=>backToItems(e)}>Back</button>
        </div>
    {!edit ? 
        <ol>
            <div className="detail-view-title">
                <h1>Item # {item ? item[0].id : null}</h1><br/>
                <h2>{item ? item[0].name : null}</h2>
                {item ? <img src={item[0].image} /> : null}<br/>
            </div>
            <div className="detail-view-details">
                {item ? item[0].description : null}<br/><br/>
                Price: $ {item ? item[0].price : null}<br/>

                Status: {item ? item[0].itemstatusId : null}<br/>

                <b>User:</b> {item ? item[0].userId : null}<br/>
                <b>Condition:</b>{item ? item[0].conditionId : null}<br/>
                <b>Category:</b>{item ? item[0].categoryId : null}<br/>
                <b>Manufacturer:</b>{item ? item[0].manufacturer : null}<br/>
                <b>Model:</b>{item ? item[0].model : null}<br/>
                <b>Dimensions:</b>{item ? item[0].dimensions : null}<br/>
                <b>Notes:</b>{item ? item[0].notes : null}<br/><br/>
                <b>Posted At: </b>{item ? item[0].createdAt : null}<br/>
                <b>Updated At: </b>{item ? item[0].updatedAt : null}<br/>
            </div>
        </ol>
            :  <div>
                <form>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={handleName}/>
                    <input 
                    type="text"
                    placeholder="Item User" 
                    onChange={handleUser}/>
                  <input 
                    type="text"
                    placeholder="Item description" 
                    onChange={handleDescription}/>
                  <input 
                    type="text" 
                    placeholder="Price" 
                    onChange={handlePrice}/>

                  <select 
                    name="category" 
                    handler={handleCategory}
                    defaultValue='select one please'> 
                    <option value="vehicle">vehicle</option>
                    <option value="computer">computer</option>
                    <option value="furniture">furniture</option>
                    <option value="appliances">appliances</option>
                    </select>

                  <select 
                    name="condition" 
                    handler={handleCondition}
                    defaultValue='select one please'> 
                    <option value="okay">okay</option>
                    <option value="good">good</option>
                    <option value="used">used</option>
                    <option value="new">new</option>
                    </select>

                  <input 
                    type="text" 
                    placeholder="Manufacturer/Make" 
                    onChange={handleManufacturer}/>
                  <input 
                    type="text" 
                    placeholder="Model" 
                    onChange={handleModel}/>
                  <input 
                    type="text" 
                    placeholder="Dimensions" 
                    onChange={handleDimensions}/>
                  <input 
                    type="text" 
                    placeholder="Notes" 
                    onChange={handleNotes}/>
                </form>
             </div> }
        {auth ? <button onClick={(e)=>editNow(item,e)}>
          {edit ? 'SUBMIT' : 'EDIT'}</button> : null}
    </div>
  )
}




export default SingleItem;