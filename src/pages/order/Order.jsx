import React from 'react'
import Orders from '../../component/orders/Orders'
import axios from 'axios'
import './order.css'

function Order() {
   const [order, setOrder] = React.useState([])
  React.useEffect(() => {
   const fetchOrders = async() => {
    const  results = await axios.get('https://relaxhotel.herokuapp.com/api/order')
    setOrder(results.data)
   }
   fetchOrders()
  },[order])

  const cummulativeTotal = order.reduce((acc, item) => (acc += item.total),0)
  console.log(cummulativeTotal)

  return (
    <div className='orders'>
       <div className='page-info'>
       <div className='right-infor'>
       <i className="fa-solid fa-arrow-up-short-wide"></i> 
        <p className='link' >Order requests</p>
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
    {/*Order requests section */}
    <div className='order-requests'>
        <p className='p'>Customers Order Requests</p>
        <Orders order={order}/>
    </div>
    {/*Total cost */}
     <div className='payment'>
        <div className='cash-container'>
        <p  >Paid orders</p>
        <p><b>Expect Cash</b>   Kes/={cummulativeTotal}</p>
        </div>
        <div className='cash-container'>
        <p  >Pending payments</p>
        <p style={{color:'red'}}>11,500</p>
        </div>
     </div>
    </div>
  )
}

export default Order