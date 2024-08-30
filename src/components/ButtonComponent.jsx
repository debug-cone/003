import React from 'react'

function ButtonComponent( {title, bgColor} ) {
  return (
    <button className='btn' style={{backgroundColor: bgColor}}>
        {title}
    </button>
  )
}

export default ButtonComponent