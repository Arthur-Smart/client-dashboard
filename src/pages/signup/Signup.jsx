import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './signup.css'

function Signup() {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [department, setDepartment] = React.useState('')
  const [password1, setPassword1] = React.useState('')
  const [file, setFile] = React.useState(null)


  const registerUser = async() => {
    
    const userModel = {
      name, email, password, phone, department }
     

  if(file){
         const data = new FormData();
         data.append("file",file);
         data.append("upload_preset", "uploads");
        
         try {
        const uploadFile = await axios.post("https://api.cloudinary.com/v1_1/dc86lmshz/image/upload", data);
        const { url } = uploadFile.data;
        userModel.photo = url
         } catch (err) {
             console.log(err)
         }
     }

     try {
      const res = await axios.post('/auth/register', userModel)
      window.location.replace('/login')
      console.log(res.data);
     } catch (error) {
      console.log(error)
     }
  }

  return (
    <div className='signup'>
      <div className='signup-details'>
        <h1>Sign up here to proceed</h1>
        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
        <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Enter name'/>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email'/>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Set password'/>
        <input type='password' value={password1} onChange={e => setPassword1(e.target.value)} placeholder='Confirm password'/>
        <input type='number' value={phone} onChange={e => setPhone(e.target.value)} placeholder='Enter phone number'/>
        <input type='text' value={department} onChange={e => setDepartment(e.target.value)} placeholder='Enter Department'/>
        <button className='sigin-up-btn' onClick={registerUser}>Sign-Up</button>
        <p style={{color:'gray', marginBottom:10}}>Login if already have an account</p>
        <Link to='/login'>
        <button className='login-sign-up-btn'>Login</button>
        </Link>
      </div>

    </div>
  )
}

export default Signup