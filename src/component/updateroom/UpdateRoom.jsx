import React from 'react'

function UpdateRoom({updateCreateModel}) {
  return (
    <div className='hotel-room'>
    <div  className='close-model' onClick={()=>updateCreateModel(false)}>
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <input type='text' placeholder='Title'/>
        <input type='text' placeholder='Room number eg 011'/>
        <input type='text' placeholder='Cost per night eg 35,600'/>
        <select className='select-availability'>
            <option value='available'>Available</option>
            <option value='unavailable'> Not Available</option>
        </select>
        <button className='create-btn'>Update Room</button>
    </div>
  )
}

export default UpdateRoom