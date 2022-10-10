import React from 'react'
import './hotelroom.css'

function HotelRoom({closeCreateModel}) {
    const [file, setFile] = React.useState(null)
  return (
    <div className='hotel-room'>
    <div  className='close-model' onClick={closeCreateModel}>
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        {file ? <img className='create-img' src={URL.createObjectURL(file)} alt=''/> : <img className='create-img' src={require('../../assets/b2.jpg')} alt=''/> }
        <label htmlFor='inputFile' className='photo-btn'>
              <i class="fa-solid fa-camera-retro "></i>
        </label>
        <p className='upload-photo'>Upload Photo</p>
        <input type='file' id='inputFile' style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
        <input type='text' placeholder='Title'/>
        <input type='text' placeholder='Room number eg 011'/>
        <input type='text' placeholder='Cost per night eg 35,600'/>
        <select className='select-availability'>
            <option value='available'>Available</option>
            <option value='unavailable'> Not Available</option>
        </select>
        <button className='create-btn'>Create Room</button>
    </div>
  )
}

export default HotelRoom