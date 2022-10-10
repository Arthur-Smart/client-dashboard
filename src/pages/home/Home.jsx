import React from 'react'
import Add from '../../component/add/Add'
import Chart from '../../component/chart/Chart'
import Users from '../../component/users/User'
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios'
import './home.css'
import { current } from '@reduxjs/toolkit';

function Home() {
  const [showModel, setShowModel] = React.useState(false)
  const [add, setAdd] = React.useState(false)
  const [weatherData, setWeatherData] = React.useState([])
  const [users, setUsers] = React.useState([])

  //const {money} = useSelector(state=>state.cash)
  //console.log(useSelector(state=>state.cash.total))

  const{currentCost} = useSelector(state=>state.expense)
  const{currentUser} = useSelector(state=>state.user)
  console.log(currentCost)

  const closeAddModule = () =>{
    setAdd(false)
  }

  React.useEffect(() => {
    const fetchUsers = async () =>{
      const fetchedUsers = await axios.get('/users/user')
      setUsers(fetchedUsers.data)
    }
    fetchUsers()
  },[users])

   

  const weatherFunc = () => {
      const API_KEY = '373c0d2941575e236585ddc76c37f1c7'
     navigator.geolocation.getCurrentPosition(success => {
      let {latitude, longitude} = success.coords;

      fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=nakuru`).then(res =>res.json()).then(data => setWeatherData(data))
    });
  }

  weatherFunc()

  
  return (
    <div className='home'>
    {/*Register Container */}
    {showModel &&
    <div className='register show'>
        <div onClick={() => setShowModel(false)} className='close-model'>
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
         <div className='reg-container'>
         <p>Hello {currentUser.name}! Update your profile</p>
          <div className='profile-Image'>
            <img src={currentUser.photo} alt=''/>
          </div>
            <div className='photo-btn'>
              <i class="fa-solid fa-camera-retro "></i>
            </div>
          <input type='text' placeholder={currentUser.name}/>
          <input type='email' placeholder={currentUser.email}/>
          <input type='password' placeholder='Password'/>
          <input type='text' placeholder={currentUser.phone}/>
          <input type='text' placeholder={currentUser.department}/>
          <button className='update-btn' >Update</button>
         </div>
    </div>
    }

    <div className='page-info'>
     <div className='right-infor'>
       <i className="fa-solid fa-house"></i> 
        <p className='link' >Home</p>
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
   
   {/*Admin Details Holder */}
    <div className='admin-details'>
     <div className='admin-left'>
     <img src={currentUser.photo} alt=''/>
     <div className='left-details'>
     <h1>Hi! Welcome {currentUser.name} 👋</h1>
     <p>The world will always have a way for a man that knows where he is going</p>
     
     </div>
     </div>
     <div onClick={()=> setShowModel(true)} className='admin-right'>
     <button className='admin-btn'>Update profile</button>
     </div>
    </div>

{/*Main Admin section */}
      <div className='main-section'>
         <div className='main-top'>
           <div className='card'>
              <h1 className='revenue'>Total Revenue <i class="fa-solid fa-arrow-up"></i></h1>
              <p>Ksh 78000</p>
              <p className='percentage' >7.7% increment</p>
              <i class="fa-solid fa-check-to-slot"></i>
           </div>
           <div className='card'>
              <h1 className='expense'>Total Expenses <i class="fa-solid fa-arrow-down"></i></h1>
              <p>Ksh 12500</p>
              <p className='percentage' >2.3% decrement</p>
              <i class="fa-solid fa-money-bills"></i>
           </div>
           <div className='card'>
              <h1 className='income'>Net Income <i class="fa-solid fa-sack-dollar"></i></h1>
              <p>Ksh 65500</p>
              <p className='percentage' >1.7% increment</p>
              <i class="fa-solid fa-wallet"></i>
           </div>
         </div>
         
 
        {/*Chart Container */}
         <div className='chart-container'>
         <p>Statistical report of the last seven months income and expenses</p>
           <Chart/>
         </div>

         {/*Users */}
         <div className='users-container'>
         <p>Current users</p>
          <Users users={users}/>
          {add && <Add closeAddModule={closeAddModule}/>}
          <button onClick={() => setAdd(true)} className='add-btn'>Add User</button>
         </div>
      </div>

      {/*People*/}
      <div className='mpesa-temp'>
            <div className='temprature'>
               <p className='p1'>Today is 11th of August 2022</p>
               <p className='p2'>You are current located in <i class="fa-solid fa-street-view"></i> Nakuru</p>
               <p className='p5'>The templatures are <i class="fa-solid fa-temperature-high"></i> <b>{weatherData?.main?.temp} deg</b></p>
               <p className='p5'>The Humidity is <i class="fa-solid fa-temperature-high"></i> <b>{weatherData?.main?.humidity}</b></p>
               <p className='p5'>Weather Condition is  <b>{weatherData?.weather?.description} </b></p>
               <p>Working under a good templature make the working environment  a best place to be.</p>
              
            </div>
            <div className='mpesa'><p>
              <p className='mpesa-heading'>The total Amount made via M-pesa</p>
              <div className='mpesa-bottom'>
               <p>Kes/= 34,000</p>
              </div>
            </p></div>
         </div>

    </div>
  )
}

export default Home