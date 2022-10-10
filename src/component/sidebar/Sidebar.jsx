import React from 'react'
import {Link} from 'react-router-dom'
import Navlinks from '../navlinks/Navlinks';
import {useDispatch, useSelector} from 'react-redux';
import './sidebar.css'
import { logout } from '../../redux/userSlice';

function Sidebar() {
  const [selected, setSelected] = React.useState('home')
   const currentUser = useSelector(state => state.user.currentUser)
   console.log(currentUser)
  const dispatch = useDispatch 

   
  const pages = [
   {
    id:'home',
    title:'Home',
    icon:'fa-solid fa-house',
    link:'/'
   },
   {
    id:'bookings',
    title:'Room Bookings',
    icon:'fa-solid fa-file-pen',
    link:'/bookings'
   },
   {
    id:'dinning',
    title:'Dinner Bookings',
    icon:'fa-solid fa-champagne-glasses',
    link:'/dinning'
   },
   {
    id:'meeting',
    title:'Meeting Bookings',
    icon:'fa-solid fa-users',
    link:'/meeting'
   },
   {
    id:'order',
    title:'Order Requests',
     icon:'fa-solid fa-arrow-up-short-wide',
    link:'/orders'
   },
   {
    id:'memebers',
    title:'Members',
    icon:'fa-solid fa-user-group',
    link:'/members'
   },
  ];
  return (
    <div className='sidebar'>
   <div className='sidebar-top'>
   <div className='logo'>
   
   <img src={require('../../assets/logo.jpg')} alt=''/>
   </div>
    <h1>Relax Hotel Dashboard</h1>
    <p>Friday 5th August 2022</p>
   </div>

   <div className='sidebar-center'>
   <p className='sidebar-title'>Customer Management</p>
   {pages.map(page => (
     <Link to={page.link} className='link'>
          <Navlinks
            title={page.title}
            icon={page.icon}
            active ={selected === page.id}
            id={page.id}
            setSelected={setSelected}  
            />
      </Link>
   ))}
    

    
   </div>

   <div className='sidebar-bottom'>
     <p className='sidebar-title'>Expense & Inventory Management</p>
    <Link to='expenses' className='expense-link'>
    <div className='link-holder expe' >
        <i class="fa-solid fa-boxes-packing"></i>
        <p className='link' >Expenses Inventory</p>
    </div>
    </Link>
      <div className='link-holder expe' >
        <i class="fa-solid fa-box"></i>
        <p className='link' >New supply</p>
    </div>
    <div className='sidebar-bottom'>
          <i class="fa-solid fa-gear fa-2x"></i>
    </div>
   </div>
    </div>
  )
}

export default Sidebar