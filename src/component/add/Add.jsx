import React from 'react'
import './add.css'

function Add({closeAddModule}) {
  return (

        <div className='register'>
            <div onClick={closeAddModule} className='close-model'>
            <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <div className='reg-container'>
            <p>Hello Arthur! Add a <font style={{color:'#ff80ff'}}> dashboard user </font> here</p>
            <div className='profile-Image'>
                <img src={require('../../assets/room.jpg')} alt=''/>
            </div>
                <div className='photo-btn'>
                <i class="fa-solid fa-camera-retro "></i>
                </div>
            <input type='text' placeholder='Arthur Mwangi' autoFill={false}/>
            <input type='email' placeholder='mwangiarthur777@gmail.com'/>
            <input type='password' placeholder='Password'/>
            <input type='password' placeholder='Confirm Password'/>
            <input type='text' placeholder='0758647382'/>
            <input type='text' placeholder='Department'/>
            <button className='update-btn'>Add</button>
            </div>
    </div>
  )
}

export default Add