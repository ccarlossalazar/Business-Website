import Sidebar from "../sideNavbar"
import Navbar from "../navbar"
import { useEffect } from "react"
import { useState } from "react"
import { db } from "../../firebase"
import { getDoc, doc, updateDoc } from "firebase/firestore"
import { useLocation } from "react-router-dom"
import { ArrowBigLeft } from "lucide-react"
import { Link } from "react-router-dom"


const SingleUser = () => {
    const [info, setInfo] = useState({})
    const [error, setError] = useState('')
    const [updateData, setUpdateData] = useState({})
    const [edit, setEdit] = useState(false)
    const location = useLocation()
    const id = location.pathname.split("/")[4]

    useEffect(() => {
        const getRequest = async () => {
              try {
                const dbRef = doc(db, "client-estimates", id)
                const getRequestInfo = await getDoc(dbRef)
                const data = { id: getRequestInfo.id, ...getRequestInfo.data() }
                setInfo(data)
              } catch(err) {
                setError('There was an error getting the requests.')
                console.log(err, error)
              }
            }
            getRequest()
      }, [id]);

    const toggleEdit = () => {
        setUpdateData(info)
        setEdit(!edit)
    }
      
          const handleChange = (e) => {
              const {name, value} = e.target
              setUpdateData(prev => ({
                  ...prev, 
                  [name]: value
              }))
          }
      
          const handleUpdate = async () => {
              try {
                  const ref = doc(db, 'client-estimates', id)
                  await updateDoc(ref, updateData)
                  setInfo(updateData)
                  setEdit(false)
              }catch (err) {
                  setError("There was an error updating the request.")
                  console.log(err)
              }
          }

    return(
        <div>
          <Navbar />
          <div className="flex flex-row bg-green-950 h-screen justify-start items-start">
            <div className="w-1/4">
              <Sidebar />
            </div>
            {edit ? (
                   <div className="w-full p-8 m-12 bg-white rounded-lg overflow-y-auto relative">
                   <Link to="/admin/users">
                   <h1 className="absolute top-3 left-5 flex text-green-700 hover:text-green-600"><ArrowBigLeft/>Back</h1>
                   </Link>
                   <div className="flex w-full justify-between">
                   <h1 className="text-2xl font-bold mb-4 mt-2">Client Details:</h1>
                   <button onClick={handleUpdate} className="absolute bottom-4 right-4 bg-green-300 p-2 rounded-xl hover:bg-green-400">Save</button>
                   <button onClick={toggleEdit} className="absolute top-4 right-4 bg-red-300 p-2 rounded-xl hover:bg-red-400">Cancel</button>
                   </div>
                   <div className="flex w-full">
                   <div className="flex-col flex w-1/2 space-y-2">
                   <div className="flex space-x-2">
                   <h1 className="text-lg font-semibold">First Name:</h1>
                     <input name="firstname" className="text-lg field-sizing-content focus:outline-none border-b-2 border-b-gray-300  focus-within:border-b-green-500" value={updateData.firstname} onChange={handleChange}></input>
                   </div>
                   <div className="flex space-x-2">
                   <h1 className="text-lg font-semibold">Last Name:</h1>
                     <input name="lastname" className="text-lg field-sizing-content focus:outline-none border-b-2 border-b-gray-300  focus-within:border-b-green-500" value={updateData.lastname} onChange={handleChange}></input>
                   </div>
                   <div className="flex space-x-2">
                   <h1 className="text-lg font-semibold">Phone:</h1>
                     <input name="phone" className="text-lg field-sizing-content focus:outline-none border-b-2 border-b-gray-300  focus-within:border-b-green-500" value={updateData.phone} onChange={handleChange}></input>
                   </div>
                   <div className="flex space-x-2">
                   <h1 className="text-lg font-semibold">Email:</h1>
                     <input name="email" className="text-lg field-sizing-content focus:outline-none border-b-2 border-b-gray-300  focus-within:border-b-green-500" value={updateData.email} onChange={handleChange}></input>
                   </div>
                   </div>
                   </div>
                   <h1 className="pt-1 text-lg font-semibold">Addresses:</h1>
                   {info.addresses && info.addresses.length > 0 ? (
    info.addresses.map((addr, index) => (
    <div className="">
      <div key={index} className="mt-2 pt-2 border-2 w-fit">
        <h2 className="font-semibold text-lg">Address {index + 1}:</h2>
        <div className="flex text-lg space-x-2">
        <p className="font-semibold">Street:</p>
        <p>{addr.address}</p>
        </div>
        <div className="flex text-lg space-x-2">
        <p className="text-lg font-semibold">Zip:</p>
        <p>{addr.zip}</p>
        </div>
        <div className="flex text-lg space-x-2">
        <p className="font-semibold">Unit:</p>
        <p>
        {addr.unit ? `${addr.unit}` : ''}
        </p>
        </div>    
      </div>
    </div>
    ))
  ) : (
    <p className="text-sm italic">No addresses found.</p>
  )}
                   </div>
                  ) : (
                <div className="w-full p-8 m-12 bg-white rounded-lg overflow-y-auto relative">
                <Link to="/admin/users">
                <h1 className="absolute top-3 left-5 flex text-green-700 hover:text-green-600"><ArrowBigLeft/>Back</h1>
                </Link>
                <div className="flex w-full justify-between">
                <h1 className="text-2xl font-bold mb-4 mt-2">Client Details:</h1>
                <button onClick={toggleEdit} className="absolute top-4 right-4 bg-yellow-300 p-2 rounded-xl hover:bg-yellow-400">Edit</button>
                </div>
                <div className="flex w-full">
                <div className="flex-col flex w-1/2 space-y-2">
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Name:</h1>
                  <h1 className="text-lg"> {info.firstname} {info.lastname} </h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Phone:</h1>
                  <h1 className="text-lg"> {info.phone}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Email:</h1>
                  <h1 className="text-lg"> {info.email}</h1>
                </div>
                </div>
                </div>
                <h1 className="text-lg font-semibold mt-2">Addresses & Bookings:</h1>
                <div className="mt-2 overflow-y-auto max-h-[400px] pr-2 shadow-2xl rounded-lg">
  {info.addresses?.length > 0 ? (
    info.addresses.map((addr, index) => (
      <div key={index} className="border border-gray-200 rounded-md p-4 mb-4 bg-white shadow-sm">
        <div className="mb-2">
            <h1 className="text-lg font-semibold">Address {index +1}:</h1>
            <div className="flex space-x-1">
          <p className="font-semibold">Street:</p>
          <p>{addr.address}</p>
        </div>
          <div className="flex space-x-1">
          <p className="font-semibold">Zip:</p>
          <p>{addr.zip}</p>
        </div>
          <p>
          {addr.unit ? (
        <div className="flex space-x-1">
        <p className="font-semibold">Unit:</p>
        <p>{addr.unit}</p>
        </div>
        ) 
            : ''}
          </p>
          {addr.additional && (
            <p className="text-gray-500 italic">"{addr.additional}"</p>
          )}
        </div>
        <div className="overflow-x-auto">
          {addr.bookings?.length > 0 ? (
            <table className="min-w-full text-sm text-left text-green-800 border border-green-500">
              <thead className=" text-black text-xs font-light">
                <tr>
                  <th className="px-4 py-2 border bg-[#669900]">Date</th>
                  <th className="px-4 py-2 border bg-[#669900]">Start</th>
                  <th className="px-4 py-2 border bg-[#669900]">End</th>
                </tr>
              </thead>
              <tbody>
                {addr.bookings.map((booking, bIndex) => (
                  <tr key={bIndex} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-2 border font-medium">{booking.date || '-'}</td>
                    <td className="px-4 py-2 border font-medium">{booking.start || '-'}</td>
                    <td className="px-4 py-2 border font-medium">{booking.end || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="font-bold text-sm">No bookings for this address.</p>
          )}
        </div>
      </div>
    ))
  ) : (
    <p className="font-bold">No addresses available.</p>
  )}
</div>
</div>)}
          </div>
        </div>
    )
}

export default SingleUser