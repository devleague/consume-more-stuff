import React from 'react';

const Select = ({ list, name, label, type, handler, defaultValue }) => {

  return (
    <div className="select-options">
      <span>{ label }</span>
      <select 
        name={ name } 
        onChange={ handler }
        defaultValue={ defaultValue } >

        {
          list.map((option, idx) => {
            return(
              <option 
                value={ option.id }
                key={ idx } >
                { option[type] }
              </option>
            ) 
          })
        }
      </select>
    </div>
  )
}

export default Select;