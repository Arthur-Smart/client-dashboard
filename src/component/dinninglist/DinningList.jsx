import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './dinninglist.css'



export default function DinningList({dinningData}) {
    
const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  {field:'photo', headerName:'Order image', width:200,
  renderCell:(params) => {
    return (
        <div className='dine-list'>
            <img src={params.row.photo} alt=''/>
        </div>
    )
  }
  },
  { field: 'name', headerName: 'Order Name', width: 130 },
  { field: 'minutes', headerName: 'Minutes', width: 130 },
  {
    field: 'cost',
    headerName: 'Cost',
    type: 'string',
    width: 90,
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'number',
    width: 150,
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 160,
    renderCell: (params) =>{
        return(
            <>
            <button className='edit-btn'><i class="fa-solid fa-file-pen fa-2x edit-icon"></i></button>
             <p>Update</p>
            </>
        )
    }
  },
];
    
  return (
    <div style={{ height: 550 ,  width:'100%' }}>
      <DataGrid
       id={dinningData._id}
        rows={dinningData}
        columns={columns}
        pageSize={8}
        getRowId={(row) =>row._id}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
