import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import {ToastContainer, toast } from 'react-toastify';
import './meetings.css'



export default function Meetings({fetched, toastEl}) {

  

 

 
 const handleDone = (id,clientName) =>{
  const confirm = window.confirm(`Are you sure you have satisified ${clientName} request already?`)
  if(confirm){
    axios.delete(`/meetings/meeting/${id}`)
  }    
 }
     
const columns = [
  { field: '_id', headerName: 'ID', width: 70 },

  { field: 'name', headerName: 'Client Name', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  {
    field: 'category',
    headerName: 'Room',
    width: 130,
  },
  {
    field:'roomNum',
    headerName:'Room Number',
    width:130
  },
  {
    field: 'date',
    headerName:'Date',
    width:200
  },
  {
    field:'cost', headerName:'Cost', width:130
  },
  {
   field:'status',
   headerName:'Status',
   width:90,
   renderCell:(params) => {
    return(
        <button onClick={() => handleDone(params.row._id,)} className='req-btn'>Done</button>
    )
   }
  }
 /* {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 160,
    renderCell: (params) =>{
        return(
            <>
            <button className='edit-btn'><i class="fa-solid fa-file-pen fa-2x edit-icon"></i></button>
             <p>Update Status</p>
            </>
        )
    }
},*/
];

 
    
  return (
    <div style={{ height: 400, width:'100%' }}>
      <DataGrid
        id={fetched._id}
        rows={fetched}
        columns={columns}
        pageSize={5}
        getRowId={(row) =>row._id}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
