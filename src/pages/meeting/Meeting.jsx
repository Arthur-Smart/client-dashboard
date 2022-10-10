import React from 'react'
import AddMeetingRoom from '../../component/addmeetingroom/AddMeetingRoom'
import Meetings from '../../component/meetings/Meetings'
import './meeting.css'
import {ToastContainer, toast } from 'react-toastify';
import {useSelector} from 'react-redux';
import axios from 'axios'



const initialState = {
   name:'',
   phone:'',
   category:'',
   roomNum:'',
   date:'',
   cost:''
}

function Meeting() {
   const [showMeetingRoom, setShowMeetingRoom] = React.useState(false)
   const [registerClient, setRegisterClient] = React.useState(false)
   const [state, setState] = React.useState(initialState)
   const [fetched, setFetched] = React.useState([])   
    const{currentUser} = useSelector(state=>state.user)

   const {name, phone, category,roomNum, date, cost} = state

   const handleRegister = async() => {
     const res =  await axios.post('/meetings', {
         name,
         phone,
         category,
         roomNum,
         date,
         cost
       })
       console.log(res)
       setState({
         name:'',
         phone:'',
         category:'',
         roomNum:'',
         date:'',
         cost:''
       })
       toast.success(`${name} request  has been registered successfully`)
   }

   const handleValueChange = (e) =>{
      const {name, value} = e.target;
      setState({...state, [name]:value})
      
      
   }

   React.useState(() => {
      const fetchRegister = async () =>{
         const {data} = await axios.get('/meetings')
         setFetched(data)
      }
      fetchRegister()
   },[])

  return (
    <div className='meeting'>
    
    <ToastContainer position='top-right'/>
         <div className='booking-info'>
         <div className='right-infor'>
           <i className="fa-solid fa-users"></i>
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

        {/*Room availability */}
       <div className='meeting-section'>
       {showMeetingRoom &&
         <div className='add-meeting-room'>
         <AddMeetingRoom setShowMeetingRoom={setShowMeetingRoom} />
       </div>
        }
       
      <div className='dashboard-meetings'>
         <div className='dashboard-room'>
            <img src={require('../../assets/b1.jpg')} alt=''/>
            <h2>Superior Rooms</h2>
            <p>3 superior room remaining</p>
            <button className='dash-room-btn'>Update availability</button>
         </div>
         <div className='dashboard-room'>
            <img src={require('../../assets/b2.jpg')} alt=''/>
            <h2>Junior Rooms</h2>
            <p>10 superior room remaining</p>
            <button className='dash-room-btn'>Update availability</button>
         </div>
         <div className='dashboard-room'>
            <img src={require('../../assets/b3.jpg')} alt=''/>
            <h2>Executive Rooms</h2>
            <p>6 superior room remaining</p>
            <button className='dash-room-btn'>Update availability</button>
         </div>
       
         </div>
           <div className='add-icon' onClick={() => setShowMeetingRoom(true)}>
            <i class="fa-solid fa-circle-plus"></i>
            </div>
       </div> 

       {/*People Request */}
       <div className='meeting-table'>
       <p className='p3'>Customers Requests</p>
       <Meetings fetched={fetched}/>

       {registerClient && 
       
          <div className='register-new-request'>
               <div  className='close-model' onClick={() => setRegisterClient(false)}>
                  <i class="fa-solid fa-circle-xmark"></i>
               </div> 
             
            <div className='register-container'>
               <h1 style={{textAlign:'center'}}>Hello {currentUser.name} 👋. You are registering a new request</h1>
                <input type='text' value={name} name="name" placeholder='Enter Name' onChange={handleValueChange}/>
                <input type='text' value={phone} name="phone" placeholder='Phone' onChange={handleValueChange}/>
                <select onChange={handleValueChange} value={category} name="category">
                  <option value='Master class'>--Select--</option>
                  <option value='Master class'>Fabulous Room</option>
                  <option value='Master class'>Paguiline Room</option>
                  <option value='Master class'>Comfy Meeting Room</option>
                  <option value='Master class'>First Location</option>
                </select>
                <input type='date' value={date} name="date" placeholder='Date to report' onChange={handleValueChange}/>
                <input type='number' value={roomNum} name='roomNum' min='1' placeholder='Room number eg Delux/001' onChange={handleValueChange}/>
                <input type='text' value={cost} name="cost" placeholder='Eg Ksh 40400' onChange={handleValueChange}/>
                <button className='req-button' onClick={handleRegister}>Register</button>
            </div>
         </div>
        }
        
       <button className='button' onClick={() => setRegisterClient(true)}>Register new request</button>
       </div>
    </div>
  )
}

export default Meeting