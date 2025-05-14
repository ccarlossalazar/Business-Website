import {DataGrid} from '@mui/x-data-grid'
import { db } from "./../firebase.js"
import {collection, getDocs, doc, deleteDoc} from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


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
}, [])
    const columns = [
        {field: 'firstname', headerName: 'First Name', flex: 1},
        {field: 'lastname', headerName: 'Last Name', flex: 1},
        {field: 'phone', headerName: 'Phone', flex: 1},
        {field: 'email', headerName: 'Email', flex: 1},
    ]

    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="flex gap-8 justify-center">                
 <div className="h-full flex items-center gap-2 justify-center">
          <Link to={`/admin/users/single/${params.row.id}`}>
                <button
                  className="px-2 py-1 text-sm border border-dotted border-blue-500 text-blue-500 rounded hover:bg-blue-200 transition"
                  >
                  View
                </button>
                </Link>
                <button
                  className="px-2 py-1 text-sm border border-dotted border-red-500 text-red-500 rounded hover:bg-red-200 transition"
                  onClick= {() => handleDelete(params.row.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        },
      },
    ];

    
        const handleDelete = async (id) => {
            try {
                await deleteDoc(doc(db, 'client-estimates', id))
                setInfo((prev) => prev.filter((item) => item.id !== id))
                console.log("THIS ID WAS DELETED",id)
            }catch (err) {
                console.log(err)
                setError("error deleting request")
            }
        }
    

    return (
    <div className='flex flex-col items-center justify-center'>
        <div className='w-full h-[600px] mb-20'>
        <h2 className='text-center text-3xl mb-6 text-white'>Clients</h2>
        <DataGrid
        rows = {info}
        columns = {columns.concat(actionColumn)}
        rowsPerPageOptions={[5,10,20]}
        pageSize={3}
        getRowId={(row) => row.id || row._id} 
        checkboxSelection
        disableMultipleRowSelection
        />
        </div>
    </div>
    ) 
}

export default UserTable