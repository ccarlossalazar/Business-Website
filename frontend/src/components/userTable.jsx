import {DataGrid} from '@mui/x-data-grid'

const UserTable = () => {


    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'location', headerName: 'Location', width: 150},
        {field: 'serial_number', headerName: 'Serial Number', width: 150},
        {field: 'equipment_condition', headerName: 'Condition', width: 150},
    ]

    const rows = [
        {
          id: 1,
          name: 'Treadmill X200',
          location: 'Cardio Zone 1',
          serial_number: 'TMX200-0001',
          equipment_condition: 'Good',
        },
        {
          id: 2,
          name: 'Elliptical Pro',
          location: 'Cardio Zone 2',
          serial_number: 'ELLPRO-0023',
          equipment_condition: 'Fair',
        },
        {
          id: 3,
          name: 'Bench Press',
          location: 'Fitness Area 1',
          serial_number: 'BP-1003',
          equipment_condition: 'Excellent',
        },
      ]


    return (
    <>
        <div className='w-full h-[600px] mb-20 p-5'>
        <h2 className='text-center text-3xl mb-6'>Equipment</h2>
        <DataGrid
        rows = {rows}
        columns = {columns}
        rowsPerPageOptions={[5,10,20]}
        pageSize={3}
        getRowId={(row) => row.id || row._id} 
        />
        </div>
    </>
    ) 
}

export default UserTable