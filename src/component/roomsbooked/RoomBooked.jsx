import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'

const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Customer Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'phone',
    headerName: 'Phone Number',
    type: 'number',
    width: 100,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 100,
  },
  {
    field:'identificationcard',
    headerName:'National ID',
    width: 100,
  },
  {
    field:'roomTitle',
    headerName:'Room Title',
    width:120
  },
  {
    field:'totalPrice',
    headerName:'Cost',
    width:80,
    type:'number'
  },
   {
   field:'status',
   headerName:'Status',
   width:140,
   renderCell:(params) => {
    return(
        <button className='req-btn'>Delete Request</button>
    )
   }
  },
];



export default function RoomBooked() {
  const [bookings, setBookings] = React.useState([])

  React.useEffect(() => {
    const fetchBookings = async () =>{
      const Roombookings = await axios.get('https://relaxhotel.herokuapp.com/api/booking');
      setBookings(Roombookings.data)
    }
    fetchBookings()
  },[bookings])
  console.log(bookings)
  return (
    <div style={{ height: 400, width:'100%' }}>
      <DataGrid
      id={bookings._id}
        rows={bookings}
        columns={columns}
        pageSize={5}
        getRowId={(row) =>row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
