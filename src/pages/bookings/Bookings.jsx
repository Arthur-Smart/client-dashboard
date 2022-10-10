import React from 'react'
import HotelRoom from '../../component/addroom/HotelRoom'
import RoomBooked from '../../component/roomsbooked/RoomBooked'
import axios from 'axios'
import './bookings.css'
import { useDispatch } from 'react-redux'
import { addCash } from '../../redux/costSlice'
import UpdateRoom from '../../component/updateroom/UpdateRoom'

function Bookings() {
   const [create,setCreate] = React.useState(false);
   const [update, setUpdate] = React.useState(false)
   const [bookings, setBookings] = React.useState()
   React.useEffect(() => {
   const fetchBookings = async () =>{
   const Roombookings = await axios.get('https://relaxhotel.herokuapp.com/api/booking');
   setBookings(Roombookings.data)
   }
   fetchBookings()
},[bookings])

const totalPrice = bookings?.reduce((acc, item) => (acc +=item.totalPrice),0);
console.log(totalPrice)

const dispatch = useDispatch()

//dispatch(addCash(totalPrice))

const closeCreateModel = () => {
   setCreate(false)
   }

const updateCreateModel = () => {
   setUpdate(false)
   }   
  return (
    <div className='bookings'>
        <div className='booking-info'>
        <div className='right-infor'>
       <i className="fa-solid fa-file-pen"></i>
        <p className='link' >Bookings</p>
        </div>
        <div className='left-info'>

        <div className='bell'>
          <i class="fa-solid fa-bell"></i>
          <p>1</p>
          </div>

          <div className='comment'>
          <i class="fa-solid fa-comments"></i>
          <p>3</p>
          </div>
        </div>
        </div>
         <p className='availability'>Rooms Availability</p>
         {/*Room availability */}
       <div className='rooms-section'>
      <div className='dashboard-rooms'>
         <div className='dashboard-room'>
            <img src={require('../../assets/b1.jpg')} alt=''/>
            <h2>Superior Rooms</h2>
            <p>3 superior room remaining</p>
            <button className='dash-room-btn' onClick={() =>setUpdate(true)}>Update availability</button>
         </div>
         <div className='dashboard-room'>
            <img src={require('../../assets/b2.jpg')} alt=''/>
            <h2>Junior Rooms</h2>
            <p>10 superior room remaining</p>
            <button className='dash-room-btn' onClick={() =>setUpdate(true)}>Update availability</button>
         </div>
         <div className='dashboard-room'>
            <img src={require('../../assets/b3.jpg')} alt=''/>
            <h2>Executive Rooms</h2>
            <p>6 superior room remaining</p>
            <button className='dash-room-btn' onClick={() =>setUpdate(true)}>Update availability</button>
         </div>
       
         </div>
         {/*Add Room */}
          {create &&
            <div className='add-room-container'>
               <HotelRoom closeCreateModel={closeCreateModel}/>
            </div>
          }

          {/*Update Room */}
          {update &&             
               <div  className='add-room-container'>
                  <UpdateRoom updateCreateModel={updateCreateModel}/>
               </div>
          }

           <div className='add-icon' onClick={() => setCreate(true)}>
            <i class="fa-solid fa-circle-plus"></i>
            </div>
       </div> 
       {/*Room bookings */}
       <div className='room-booked'>
       <p>Rooms booking report</p>
       <input className='search' type='text' placeholder='Search by code...'/>
       <RoomBooked/>
       <form className='form'>
       <p>Reply Email</p>
       <input type='text' placeholder='Enter email'/>
       <textarea placeholder='Type Response...'></textarea>
       <button>Reply</button>
       </form>
       </div>

       {/*Cost */}
       <div className='cost'>
        <h2>Expected Income from booked rooms</h2>
        <p><b>Ksh {totalPrice}</b></p>
       </div>
    </div>
  )
}

export default Bookings