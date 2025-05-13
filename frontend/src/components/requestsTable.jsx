import {DataGrid} from '@mui/x-data-grid'
import { db } from "./../firebase.js"
import {collection, getDocs, addDoc, deleteDoc, doc, query, where} from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const RequestTable = () => {
  const [error, setError] = useState('')
  const [info, setInfo] = useState([])
  const [message, setMessage] = useState('')
  const [additional, setAdditional] = useState(false)
  const [data, setData] = useState(null)
  const [newClient, setNewClient] = useState(null);
  const [newAddress, setNewAddress] = useState(false)

  const navigate = useNavigate()

useEffect(() => {
const getClients = async () => {
  const dbRef = collection(db, "client-requests")
    try {
      const getCollection = await getDocs(dbRef)
      const data = getCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setInfo(data)
    } catch(err) {
      setError('There was an error getting the requests.')
      console.log(err, error)
    }
  }
  getClients()
},[])
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
        renderCell: (params) => {
          return (
            <div className="flex gap-8 justify-center">                
 <div className="h-full flex items-center gap-2 justify-center">
            <Link to={`/admin/requests/single/${params.row.id}`}>
                <button
                  className="px-2 py-1 text-sm border border-dotted border-blue-500 text-blue-500 rounded hover:bg-blue-200 transition"
                  >
                  View
                </button>
                </Link>
                <button
                  className="px-2 py-1 text-sm border border-dotted border-green-500 text-green-500 rounded hover:bg-green-200 transition"
                onClick={() => handleClick(params.row)}>
                  Approve
                </button>
                <button
                  className="px-2 py-1 text-sm border border-dotted border-red-500 text-red-500 rounded hover:bg-red-200 transition"
                  onClick={() => handleDelete(params.row.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        },
      },
    ];

    const handleClick = async (client) => {
        setError('')
        try {
            let conditions = [
                where("address", "==", client.address),
                where("zip", "==", client.zip)
              ];
              
              if (client.unit) {
                conditions.push(where("unit", "==", client.unit));
              }
              
              const addressQuery = query(collection(db, "client-estimates"), ...conditions)

             const checkEmail = query(collection(db, "client-estimates"), where("email", "==", client.email))
             const checkPhone = query(collection(db, "client-estimates"), where("phone", "==", client.phone))

             const emailRef = await getDocs(checkEmail)
             const phoneRef = await getDocs(checkPhone)
             const addressRef = await getDocs(addressQuery)

            
    if (!emailRef.empty) {
        setError("A user with this email already exists.");
        setMessage("Click for more information:") 
        setData(emailRef.docs[0].data())
        setNewClient(client)
        return
      }
  
      if (!phoneRef.empty) {
        setError("A user with this phone number already exists.");
        setMessage("Click view to edit if this is a mistake. Then try again.") 
        setData(phoneRef.docs[0].data())
        setNewClient(client)
        return
      }

      if(!addressRef.empty) {
        setError("A user with this address already exists.")
        setMessage("Click here to add an additional address to this user: ") 
        setData(addressRef.docs[0].data())
        setNewClient(client)
        return
      }
  
      
            const {id, ...rest} = client
            const ref = await addDoc(collection(db, 'client-estimates'), rest)
            await deleteDoc(doc(db, 'client-requests', client.id))
            console.log("New user Info:", ref)
            setInfo(prev => prev.filter(item => item.id !== client.id));
            console.log("This user was created", ref.id, id)
            navigate("/admin/users")
        } catch (err) {
            setError("There was an error creating the user")
            console.log(err, error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'client-requests', id))
            setInfo((prev) => prev.filter((item) => item.id !== id))
            console.log("THIS CLIENT WAS NOT APPROVED",id)
        }catch (err) {
            console.log(err)
            setError("error deleting request")
        }
    }

    const toggleAdditional = () => {
        setAdditional(!additional)
        setError('')
    }

    const toggleNewAddress = () => {
        setNewAddress(!newAddress)
    }

    return (
    <div className='relative'>
{additional && (
  <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
    <div className="bg-white relative flex-col p-6 rounded shadow-lg w-full h-4/7">
    <h1 className="text-xl font-bold">Information:</h1>
    <h1 className='text-xs pb-5 text-yellow-700'>* if there is a mistake click view to make edits then approve user. If you would like to add a new address to an existing user click Add Address</h1>
      <div className='flex justify-center gap-30'>
      <div>
        <span className='font-bold text-green-800'>Existing User Information:</span>
        <h1>{data.firstname} {data.lastname}</h1>
        <h1>{data.email}</h1>
        <h1>{data.phone}</h1>
        <h1>{data.address}, {data.zip}</h1>
        <h1>{data.unit}</h1>
      </div>
      <div>
        <span className='font-bold text-green-800'>New User Information:</span>
        <h1>{newClient.firstname} {newClient.lastname}</h1>
        <h1>{newClient.email}</h1>
        <h1>{newClient.phone}</h1>
        <h1>{newClient.address}, {newClient.zip}</h1>
        <h1>{newClient.unit}</h1>
      </div>
      </div>
      <button onClick={toggleAdditional} className="absolute bottom-5 mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
      <button onClick={toggleNewAddress} className="absolute bottom-5 right-5 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add Address</button>
    </div>
  </div>
)}
{newAddress && (
  <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
    <div className="bg-white relative flex-col p-6 rounded shadow-lg w-full h-4/7">
    <h1 className="text-xl font-bold pb-5">Add New Address For {data.firstname} {data.lastname}:</h1>
    <form className='space-y-5'>
    <div>    
    <label>Address:</label>
    <input></input>
    </div>
    <div>    
    <label>Zip Code:</label>
    <input></input>
    </div>
    <div>    
    <label>Unit (optional):</label>
    <input></input>
    </div>
    </form>
    <button onClick={toggleNewAddress} className="absolute bottom-5 mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
    <button onClick={toggleNewAddress} className="absolute bottom-5 right-5 mt-4 px-4 py-2 bg-green-500 text-white rounded">Submit</button>
    </div>
  </div>
)}
    <div className='flex flex-col items-center justify-center relative'>
    {error &&
  <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
  <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center">
    <div className="text-red-500 mb-4">
      <h1 className="font-semibold text-lg">{error}</h1>
      {message && <h1 className="text-gray-700 mt-2">{message}</h1>}
    </div>
    <button onClick={toggleAdditional} className="bg-amber-300 hover:bg-amber-400 p-2 rounded-xl">
      More Information
    </button>
  </div>
</div>
    }
        <div className='w-full h-[600px] mb-20'>
        <h2 className='text-center text-3xl mb-6 text-white'>Requested Estimates</h2>
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
        </div>
    ) 
}

export default RequestTable