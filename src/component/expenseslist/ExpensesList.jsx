import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';



export default function ExpensesList({expenses}) {

  const handleDelete = async(id) =>{
    axios.delete(`/expenses/expense/${id}/`)
  }

  const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {field:'avarta', headerName:'Order image', width:150,
  renderCell:(params) => {
    return (
        <div className='order-list'>
        <p className='character'>{params.row.name.charAt(0).toUpperCase()}</p>
        </div>
    )
  }
  },
  {
    field: 'name',
    headerName: 'Expense name',
    width: 300,
    editable: true,
  },
  {
    field: 'town',
    headerName: 'Expense value',
    width: 150,
    editable: true,
  },
  {
    field: 'individual',
    headerName: 'Expense value',
    width: 150,
    editable: true,
  },
 
  {
   field:'status',
   headerName:'Status',
   width:150,
   renderCell:(params) => {
    return(
        <button className='req-btn' onClick={handleDelete(params.row._id)} >Remove Expense</button>
    )
   }
  },
];

  return (
    <div style={{ height: 480, width: '100%' }}>
      <DataGrid
        id={expenses._id}
        rows={expenses}
        columns={columns}
        pageSize={7}
        checkboxSelection
        getRowId={(row) =>row._id}
      />
    </div>
  );
}