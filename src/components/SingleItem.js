import React from 'react';



const SingleItem = ({item,backToItems,edit,auth,editNow,handleChange}) => {
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
                {item ? <img alt='Preview' src={item[0].image} /> : null}<br/>
            </div>
            <div className="detail-view-details">
                {item ? item[0].description : null}<br/><br/>
                Price: $ {item ? item[0].price : null}<br/>

                Status: {item ? item[0].itemstatus.title : null}<br/>

                <b>Condition:</b>{item ? item[0].itemcondition.title : null}<br/>
                <b>Category:</b>{item ? item[0].itemcategory.title : null}<br/>
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
                    name="name"
                    onChange={handleChange}/>
                    <input
                    type="text"
                    name="user"
                    placeholder="Item User"
                    onChange={handleChange}/>
                  <input
                    type="text"
                    name="description"
                    placeholder="Item description"
                    onChange={handleChange}/>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}/>

                  <select
                    name="category"
                    onChange={handleChange}
                    defaultValue='select one please'>
                    <option value="vehicle">vehicle</option>
                    <option value="computer">computer</option>
                    <option value="furniture">furniture</option>
                    <option value="appliances">appliances</option>
                    </select>

                  <select
                    name="condition"
                    onChange={handleChange}
                    defaultValue='select one please'>
                    <option value="okay">okay</option>
                    <option value="good">good</option>
                    <option value="used">used</option>
                    <option value="new">new</option>
                    </select>

                  <input
                    type="text"
                    name="manfucturer"
                    placeholder="Manufacturer/Make"
                    onChange={handleChange}/>
                  <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    onChange={handleChange}/>
                  <input
                    type="text"
                    name="dimensions"
                    placeholder="Dimensions"
                    onChange={handleChange}/>
                  <input
                    type="text"
                    name="notes"
                    placeholder="Notes"
                    onChange={handleChange}/>
                </form>
             </div> }
        {auth ? <button onClick={(e)=>editNow(item,e)}>
          {edit ? 'SUBMIT' : 'EDIT'}</button> : null}
    </div>
  )
}




export default SingleItem;