import React from 'react';

//props to be given to each select element by whichever container renders this:
//name=category, condition, item-status, etc.
//handler=the function triggered by onChange. this.handleChangeCondition, etc.
//list=the array of items to be turned into a select element. this.props.categories, this.props.conditions, etc.
//show=name of the column in the table that actually shows what it is. usually 'title' in our case.

const Select = (props) => {
  return (
    <select className="select" name={props.name} onChange={props.handler}>
      {
        props.list.map((item) => {
          return (
            <option value={item.id}> {item[props.show]} </option>
          );
        })
      }
    </select>
  )
}

export default Select;