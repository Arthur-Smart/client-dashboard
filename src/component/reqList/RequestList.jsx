import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './requestlist.css'
import axios from 'axios';


const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'Email', width: 250 },
  {
    field: 'number',
    headerName: 'Phone Number',
    type: 'number',
    width: 150,
  },
  {
    field: 'text',
    headerName: 'Description',
    width: 300,
  },
  {
    field:'createdAt',
    headerName:'Time Ordered',
    width: 170,
    height:200
  },
   {
   field:'status',
   headerName:'Status',
   width:120,
   renderCell:(params) => {
    return(
        <button className='req-btn'>View Order</button>
    )
   }
  },
];



export default function RequestList() {
  const [dinning, setDinning] = React.useState([])
  React.useEffect(() => {
    const fetchDinnings = async () =>{
      const results = await axios.get('https://relaxhotel.herokuapp.com/api/dinning');
      setDinning(results.data)
    }
    fetchDinnings()
  }, [dinning])

  return (
    <div style={{ height: 600, width:'95%', backgroundColor:'white'}}>
      <DataGrid
      id={dinning._id}
        rows={dinning}
        columns={columns}
        pageSize={9}
        getRowId={(row) =>row._id}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
