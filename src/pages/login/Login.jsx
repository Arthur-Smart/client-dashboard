import React from 'react'
import axios from 'axios'
import './login.css'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice'

function Login() {
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch() 
  
  const handleLogin = async() => {
    dispatch(loginStart())
 try {
   const res = await axios.post('/auth/login', {
    name,
    password
  });
  dispatch(loginSuccess(res.data))
  window.location.replace('/')
  console.log(res)
 } catch (err) {
  dispatch(loginFailure())
  console.log(err)
 }
  }


  return (
    <div>
     <div className='signup'>
      <div className='signup-details'>
        <h1>Login here to proceed</h1>
        <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Username'/>
        <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Set password'/>
        <button className='sigin-up-btn' onClick={handleLogin}>Login</button>
        <p style={{color:'gray', marginBottom:10}}>Sign-up if you don't  have an account</p>
        <button className='login-sign-up-btn'>Sign Up</button>
      </div>

    </div>
    </div>
  )
}

export default Login