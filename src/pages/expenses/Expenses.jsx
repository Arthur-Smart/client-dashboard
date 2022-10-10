import React from 'react'
import ExpensesList from '../../component/expenseslist/ExpensesList'
import axios from 'axios'
import './expenses.css'
import { useSelector, useDispatch } from 'react-redux'

function Expenses() {
  
  const{currentUser} = useSelector(state=>state.user)
  const{total} = useSelector(state=>state.expense)
  const [name, setName] = React.useState('')
  const [town, setTown] = React.useState('')
  const [individual, setIndividual] = React.useState(currentUser.name)
  const [expenses, SetExpenses] = React.useState([])

  const dispatch = useDispatch()

  const handleAdd = async() => {
    await axios.post('/new/',{name, town, individual})
    setName('')
    setTown('')
    setIndividual(currentUser.name)
  }

  React.useEffect(() => {
    const fetchExpenses = async() => {
      const expenses = await axios.get('/new/')
      SetExpenses(expenses.data)
    }
    fetchExpenses()
  }, [expenses])

   const totalExpense = expenses.reduce((acc, item) => (acc +=item.town), 0 )

  return (
    <div className='expenses'>
        <div className='page-info'>
        <div className='right-infor'>
            <p>Manage all your Expenses efficiently</p>
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
        <div className='add-expenses'>
            <input type='text' value={name} placeholder='Enter expense Name' onChange={(e) => setName(e.target.value)} required/>
            <input type='text' value={town} placeholder='Enter expense Amount' onChange={(e) => setTown(e.target.value)} required/>
            <input type='text' value={individual} placeholder={currentUser.name} />
            <button className='expense-btn' onClick={handleAdd}>Add Expense</button>
        </div>
        <div className='expense-items'>
            <p className='expense-p'>List of all expenses</p>
            <ExpensesList expenses={expenses}/>
            <p className='expense-bottom'>Total Expense: <b>Kes {totalExpense}</b></p>
        </div>
    </div>
  )
}

export default Expenses