import {DataGrid} from '@mui/x-data-grid'
import { db } from "./../firebase.js"
import {collection, getDocs} from 'firebase/firestore'
import { useState, useEffect } from 'react'


const UserTable = () => {
  const [error, setError] = useState('')
  const [info, setInfo] = useState([])

useEffect(() => {
const getClients = async () => {
  const dbRef = collection(db, "client-estimates")
    try {
      const getCollection = await getDocs(dbRef)
      const data = getCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setInfo(data)
    } catch(err) {
      setError('There was an error getting the clients.')
      console.log(err, error)
    }
  }
  getClients()
},)
    const columns = [
        {field: 'firstname', headerName: 'First Name', width: 100},
        {field: 'lastname', headerName: 'Last Name', width: 100},
        {field: 'phone', headerName: 'Phone', width: 130},
        {field: 'unit', headerName: 'Unit', width: 50},
        {field: 'email', headerName: 'Email', width: 150},
        {field: 'address', headerName: 'Address', width: 150},
        {field: 'zip', headerName: 'Zip', width: 100},
    ]

    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: () => {
          return (
            <div className="flex gap-8 justify-center">                
            <div className="text-blue-300 hover:text-blue-500">View</div>
              <h1 className="text-red-300 hover:text-red-500">Delete</h1>
            </div>
          );
        },
      },
    ];


    return (
    <>
        <div className='w-full h-[600px] mb-20'>
        <h2 className='text-center text-3xl mb-6 text-white'>Users</h2>
        <DataGrid
        rows = {info}
        columns = {columns.concat(actionColumn)}
        rowsPerPageOptions={[5,10,20]}
        pageSize={3}
        getRowId={(row) => row.id || row._id} 
        className='p-5'
        />
        </div>
    </>
    ) 
}

export default UserTable