
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import DinningList from '../../component/dinninglist/DinningList'
import 'react-circular-progressbar/dist/styles.css'
import './dinning.css'
import RequestList from '../../component/reqList/RequestList'
import axios from 'axios'

function Dinning() {
  const [file, setFile] = React.useState(null)
  const [list, setList] = React.useState(false)
  const [name, setName] = React.useState('')
  const [ minutes, setMinutes] = React.useState('')
  const [cost, setCost] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [dinningData, setDinningData] = React.useState([])

React.useEffect(() => {
 const fetchItems = async () => {
  const fetchedItems = await axios.get('/items')
 setDinningData(fetchedItems.data) 
 }
 fetchItems()
},[dinningData])
 
  const addItem = async() => {
       const createdItem = {
        name,
        minutes,
        cost,
        description
       }

       if(file){
         const data = new FormData();
         data.append("file",file);
         data.append("upload_preset", "uploads");
        
         try {
        const uploadFile = await axios.post("https://api.cloudinary.com/v1_1/dc86lmshz/image/upload", data);
        const { url } = uploadFile.data;
         createdItem.photo = url
         } catch (err) {
             console.log(err)
         }
     }

     try {
      const res = await axios.post('/items', createdItem)
      console.log(res);
     } catch (error) {
      console.log(error)
     }

     setName('')
     setMinutes('')
     setCost('')
     setDescription('')

    // window.location.reload(false)
  } 

  return (
    <div className='dinning'>
    {list && 
     <div className ='preparation-req'>
        <div  className='close-model' onClick={()=> setList(false)}>
              <i class="fa-solid fa-circle-xmark"></i>
            </div>
    <input type='text' placeholder='Filter by name ...' className='filter-requests'/>
      <RequestList/>
    </div>
    }
    
       <div className='booking-info'>
       <div className='right-infor'>
       <i className="fa-solid fa-champagne-glasses"></i>
        <p className='link' >Dinning Report and Menu</p>
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
        {/*Dinning List */}
        <div className='dinning-list'>
        <div className='list-button'>
         <p>List of available meals offered</p>
         <button className='res-button' onClick={() => setList(true)}>View Requests</button>
        </div>
           <DinningList dinningData={dinningData} />
        </div>

        {/*Progress bar and add item */}
        <p className='statistics'>Statistical analysis </p>
        <div className='progress-item'>
        
            <div className='progress-bar'>
            <p className='progress-title'>Total dinning request made</p>
            <div className='bar'>
               <CircularProgressbar value={70} text={'70%'}/>
               </div>
               <h3>Total Income Made</h3>
               <h1>Ksh 5,670</h1>
               <p>This is the total sales made for the past one week</p>
                <h3  className='h3'>Most made reservation type</h3>
               <h4  className='h4'>Pilau chicken</h4>
              
            </div>

            <div className='add-item'>
            {file ? <img className='add-img' src={URL.createObjectURL(file)} alt=''/> : <img className='add-img' src={require('../../assets/coffee.jpg')} alt=''/> }
              
              <label htmlFor='upload-food-img'>
              <div style={{marginLeft:10}}><i class="fa-solid fa-circle-plus fa-2x"></i></div>
              </label>
              <div className='details-input'>
              <div className='inputs'>
              <input type='file' id='upload-food-img' style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                <input type='text' value={name} placeholder='Food name' onChange={e => setName(e.target.value)}/>
                <input type='text' value={minutes} placeholder='Minutes' onChange={e => setMinutes(e.target.value)}/>
                <input type='text' value={cost} placeholder='Cost' onChange={e => setCost(e.target.value)}/>
                </div>
                <textarea value={description} placeholder='Type description...' onChange={e => setDescription(e.target.value)}></textarea>
              </div>
              <button className='detail-add' onClick={addItem} >Add Item</button>
            </div>

        </div>
    </div>
  )
}

export default Dinning