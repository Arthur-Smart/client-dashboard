import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import './orders.css'



export default function Orders({order}) {
  const [state, setStatus] = React.useState('pending')

  const handleDelete = (id) => {
    axios.delete(`https://relaxhotel.herokuapp.com/api/order/del/${id}`)
  } 
const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  {field:'avarta', headerName:'Order image', width:200,
  renderCell:(params) => {
    return (
        <div className='order-list'>
        <p className='character'>{params.row.name.charAt(0).toUpperCase()}</p>
        </div>
    )
  }
  },
  {field:'name', headerName:'Customer', width:100},
  { field: 'title', headerName: 'Order Name', width: 130 },
  { field: 'deliver', headerName: 'Location', width: 130 },
  {
    field: 'qty',
    headerName: 'Quantity',
    type: 'number',
    width: 90,
  },
  {
    field:'total',
    headerName:'Cost',
    width:90
  },
  {
   field:'status',
   headerName:'Status',
   width:120,
   renderCell:(params) => {
    return(
        <button  className='status'>view</button>
    )
   }
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 160,
    renderCell: (params) =>{
        return(
            <>
            <button className='delete-btn' onClick={() =>handleDelete(params.row._id)} >Delete</button>
            </>
        )
    }
  },
];


 
    
  return (
    <div style={{ height: '69vh', width:'100%' }}>
      <DataGrid
       id={order._id}
        rows={order}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        getRowId={(row) =>row._id}
        checkboxSelection
      />
    </div>
  );
}
