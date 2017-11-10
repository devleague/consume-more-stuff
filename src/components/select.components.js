import React from 'react';

const Select = ({ list, name, label, type, handler, defaultValue }) => {
  return (
    <div className="select-options">
      <span>{ label }</span>
      <select 
        name={ name } 
        onChange={ handler }
        defaultValue={defaultValue}>
        {
          list.map(item => {
            return <option 
                      key={ item.id } 
                      value={ item.id }>{ item[type] }
                    </option>
          })
        }
      </select>
    </div>
  )
}

export default Select;