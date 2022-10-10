import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import Home from './pages/home/Home';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Bookings from './pages/bookings/Bookings';
import Order from './pages/order/Order';
import Members from './pages/members/Members';
import Dinning from './pages/dinnings/Dinning';
import Meeting from './pages/meeting/Meeting';
import SingleOrder from './component/singleorder/SingleOrder';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Expenses from './pages/expenses/Expenses';

function App() {
  const{currentUser} = useSelector(state=>state.user)
  //const currentUser = false 
  return (
    <BrowserRouter>
    <div className="app">
    <Sidebar/>
          
    <Routes>
    <Route  exact path='/' element={<Home/>}/>  
    <Route path='/login' element={<Login/>}/>  
    <Route path='/sign-up' element={<Signup/>}/>
    <Route path='/bookings' element={<Bookings/>}/>
    <Route path='/meeting' element={<Meeting/>}/>
    <Route path='/orders' element={<Order/>}/>
    <Route path='/members' element={<Members/>}/>
    <Route path='/dinning' element={<Dinning/>}/>
    <Route path='/expenses' element={<Expenses/>}/>
    <Route path='/order/:id' element={<SingleOrder/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
