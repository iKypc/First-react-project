import React from 'react'
import classes from './MySelect.module.css'

function MySelect({option, defaultValue, value, onChange}) {
  return (
    <select 
      className={classes.mySelect} 
      value={value} 
      onChange={event => onChange(event.target.value)}>
          <option disabled value="value1">{defaultValue}</option>
          {option.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
  )
}

export default MySelect