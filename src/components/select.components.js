import React from 'react';

const Select = ({list, name, label, type, handler}) => {
  return (
    <div>
      <span>{label}</span>
      <select name={name} onChange={handler}>
        {
          list.map(item => {
            return <option key={item.id} value={item.id}>{item[type]}</option>
          })
        }
      </select>
    </div>
  )
}

export default Select;