import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import './user.css'





export default function Users({users}) {

  
  const handleDelete = async(id, name) => {
    const confirm = window.confirm(`Are you sure you want to delete  ${name}?`)
    if(confirm){
       await axios.delete(`/users/user/${id}`)
    }   
  }

  const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
   {field:'photo', headerName:'Order image', width:200,
  renderCell:(params) => {
    return (
        <div className='order-list'>
            <img className='user-image' src={params.row.photo} alt=''/>
        </div>
    )
  }
  },
  { field: 'name', headerName: 'User Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'phone',
    headerName: 'Phone Number',
    type: 'number',
    width: 100,
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 100,
  },
  {
    field:'createdAt',
    headerName:'National ID',
    width: 100,
  },
   {
   field:'status',
   headerName:'Status',
   width:120,
   renderCell:(params) => {
    return(
        <button className='req-btn' onClick={() => handleDelete(params.row._id, params.row.name)} >Delete User</button>
    )
   }
  },
];


  return (
    <div style={{ height: 400, width:'100%' }}>
      <DataGrid
      id={users._id}
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) =>row._id}
        checkboxSelection
      />
    </div>
  );
}
