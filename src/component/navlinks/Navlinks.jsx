import React from 'react'
import './navlinks.css'

function Navlinks({title, icon, active, setSelected,id}) {
  return (
    <div>
     <div className={active ? 'link-holder active' :'link-holder'} onClick={() => setSelected(id)}>
        <i className={icon}></i> 
        <p className='link' >
         {title}
        </p>
    </div>
    </div>
  )
}

export default Navlinks