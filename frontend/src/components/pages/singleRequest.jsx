import Sidebar from "../sideNavbar"
import Navbar from "../navbar"
import { useEffect } from "react"
import { useState } from "react"
import { db } from "../../firebase"
import { getDoc, doc, updateDoc } from "firebase/firestore"
import { useLocation } from "react-router-dom"
import { ArrowBigLeft } from "lucide-react"
import { Link } from "react-router-dom"


const SingleRequest = () => {
    const [info, setInfo] = useState({})
    const [error, setError] = useState('')
    const [edit, setEdit] = useState(false)
    const [formData, setFormData] = useState('')
    const location = useLocation()
    const id = location.pathname.split("/")[4]

    useEffect(() => {
        const getRequest = async () => {
              try {
                const dbRef = doc(db, "client-requests", id)
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
        if (!edit) {
            setFormData(info)
        }
        setEdit(!edit)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    const handleUpdate = async () => {
        try {
            const ref = doc(db, 'client-requests', id)
            await updateDoc(ref, formData)
            setInfo(formData)
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
            <div className="w-3/4 p-8 m-12 bg-white rounded-lg overflow-y-auto relative pb-20">
            {!edit &&
                <Link to="/admin/requests">
                <h1 className="absolute top-3 left-5 flex text-green-700 hover:text-green-600"><ArrowBigLeft/>Back</h1>
                </Link>}
                {edit ? (
                <>
                <div className="flex w-full justify-between">
                <h1 className="text-2xl font-bold mb-4 mt-2">Editing Request:</h1>
                <button onClick={handleUpdate} className="absolute bottom-4 right-4 bg-green-300 p-2 rounded-xl hover:bg-green-400">Save</button>
                <button onClick={toggleEdit} className="absolute top-4 right-4 bg-red-300 p-2 rounded-xl hover:bg-red-400">Cancel</button>
                </div>
                <div className="flex w-full">
                <div className="flex-col flex space-y-2 w-1/2">
                <div className="flex space-x-2 ">
                <h1 className="text-lg font-semibold">Name:</h1>
                <div className="border-b-2 border-b-gray-300  focus-within:border-b-green-500 space-x-1">
                  <input name="firstname" className="text-lg field-sizing-content focus:outline-none" value={formData.firstname} onChange={handleChange}></input>
                  <input name="lastname" className="text-lg field-sizing-content focus:outline-none" value={formData.lastname} onChange={handleChange}></input>
                </div>
                </div>
                <div className="flex space-x-2 w-fit">
                <h1 className="text-lg font-semibold">Address:</h1>
                <div className="border-b-2 border-b-gray-300 focus-within:border-b-green-500 space-x-1">
                  <input name="address" className="text-lg field-sizing-content focus:outline-none" value={`${formData.address}`} onChange={handleChange}></input>
                </div>
                </div>
                <div className="flex space-x-2 w-fit">
                <h1 className="text-lg font-semibold">Zip:</h1>
                <div className="border-b-2 border-b-gray-300 focus-within:border-b-green-500 space-x-1">
                  <input name="zip" className="text-lg field-sizing-content focus:outline-none" value={formData.zip} onChange={handleChange}></input>
                </div>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Unit:</h1>
                <div className="border-b-2 border-b-gray-300  focus-within:border-b-green-500 space-x-1">
                  <input name="unit" className="text-lg field-sizing-content focus:outline-none" value={formData.unit} onChange={handleChange}></input>
                </div>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Phone:</h1>
                <div className="border-b-2 border-b-gray-300  focus-within:border-b-green-500 space-x-1">
                  <input name="phone" className="text-lg  field-sizing-content focus:outline-none" value={formData.phone} onChange={handleChange}></input>
                </div>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Email:</h1>
                <div className="border-b-2 border-b-gray-300  focus-within:border-b-green-500 space-x-1">
                  <input name="email" className="text-lg field-sizing-content focus:outline-none" value={formData.email} onChange={handleChange}></input>
                </div>
                </div>
                </div>
                <div className="flex-col flex w-1/2 space-y-2">
                <h1 className="text-lg font-semibold">Details:</h1>
                  <textarea name="additional" className="text-lg field-sizing-content h-3/4 relative focus:outline-green-500" value={formData.additional} onChange={handleChange}/>
                </div>
                </div>
                </>          
                ) : (
                <>
                <div className="flex w-full justify-between">
                <h1 className="text-2xl font-bold mb-4 mt-2">Request Details:</h1>
                <button onClick={toggleEdit} className="absolute top-4 right-4 bg-yellow-300 hover:bg-yellow-400 p-2 rounded-xl">Edit</button>
                </div>
                <div className="flex w-full">
                <div className="flex-col flex w-1/2 space-y-2">
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Name:</h1>
                  <h1 className="text-lg"> {info.firstname} {info.lastname} </h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Address:</h1>
                  <h1 className="text-lg">{info.address}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Zip:</h1>
                  <h1 className="text-lg">{info.zip}</h1>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Unit:</h1>
                  <h1 className="text-lg"> {info.unit}</h1>
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
                <div className="flex-col flex w-1/2 space-y-2">
                <h1 className="text-lg font-semibold">Details:</h1>
                  <h1 className="text-lg"> {info.additional}</h1>
                </div>
                </div>
                </>
            )}
            </div>
          </div>
        </div>
    )
}

export default SingleRequest