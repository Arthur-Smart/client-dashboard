import React from 'react'
import MembersList from '../../component/membersList/MembersList'
import './members.css'

function Members() {
  return (
    <div className='members'>
     <div className='page-info'>
     <div className='right-infor'>
        <i className="fa-solid fa-user-group"></i> 
        <p className='link' >Members</p>
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

       {/*Members */}
       <div className='members-container'>
           <MembersList/>
       </div>

       {/*Update members */}
       <div className='update-members'>
         <form className='members-form'>
            <input type='email' placeholder='Enter email'/>
            <textarea placeholder='Write Message'></textarea>
            <button>Send</button>
         </form>
       </div>
    </div>
  )
}

export default Members