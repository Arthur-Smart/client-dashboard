import React from 'react'
import './singleorder.css'

function SingleOrder() {
  return (
    <div className='single-order'>
      <div className='order-content-wrapper'>
        <div className='single-order-img'>
            <img src={require('../../assets/b3.jpg')} alt='' />
        </div>
        <div className='customer-credentials'>
        <h3>Order Details</h3>
            <p><b>Order by:</b> Joseph Kimani | <b>Date:</b>13th August | <b>Quantity:</b>5 | <b>Total:</b>3000</p>
            <button>Generate invoice</button>
        </div>
      </div>
    </div>
  )
}

export default SingleOrder