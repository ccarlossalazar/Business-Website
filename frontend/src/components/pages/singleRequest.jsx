import Sidebar from "../sideNavbar"
import Navbar from "../navbar"
import { useEffect } from "react"
import { useState } from "react"
import { db } from "../../firebase"
import { getDoc, doc } from "firebase/firestore"
import { useLocation } from "react-router-dom"
import { ArrowBigLeft } from "lucide-react"
import { Link } from "react-router-dom"


const SingleRequest = () => {
    const [info, setInfo] = useState({})
    const [error, setError] = useState('')
    const [edit, setEdit] = useState(false)
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
        setEdit(!edit)
    }

    {/*const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const dbRef = doc(db, "client-requests", id);
            await updateDoc(dbRef, formData); // Update document in Firestore
            setInfo(formData); // Update info state with new data
            setIsEditing(false); // Close the edit form
        } catch (err) {
            setError('There was an error updating the request.');
            console.log(err);
        }
    }; */}

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
                <button onClick={toggleEdit} className="absolute bottom-4 right-4 bg-green-300 p-2 rounded-xl">Save</button>
                <button onClick={toggleEdit} className="absolute top-4 right-4 bg-red-300 p-2 rounded-xl">Cancel</button>
                </div>
                <div className="flex w-full">
                <div className="flex-col flex w-1/2 space-y-2">
                <div className="flex space-x-2 ">
                <h1 className="text-lg font-semibold">Name:</h1>
                <div className="border-b-2 border-b-gray-300  focus-within:border-b-green-500 space-x-1">
                  <input className="text-lg field-sizing-content focus:outline-none" value={info.firstname}></input>
                  <input className="text-lg field-sizing-content focus:outline-none" value={info.lastname}></input>
                </div>
                </div>
                <div className="flex-col space-x-2 ">
                <h1 className="text-lg font-semibold">Address:</h1>
                <div className="border-b-2 border-b-gray-300  focus-within:border-b-green-500 space-x-1">
                  <input className="text-lg field-sizing-content focus:outline-none" value={`${info.address},`}></input>
                  <input className="text-lg field-sizing-content focus:outline-none" value={info.zip}></input>
                </div>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Unit:</h1>
                <div className="border-b-2 border-b-gray-300  focus-within:border-b-green-500 space-x-1">
                  <input className="text-lg field-sizing-content focus:outline-none" value={info.unit}></input>
                </div>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Phone:</h1>
                <div className="border-b-2 border-b-gray-300  focus-within:border-b-green-500 space-x-1">
                  <input className="text-lg  field-sizing-content focus:outline-none" value={info.phone}></input>
                </div>
                </div>
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Email:</h1>
                <div className="border-b-2 border-b-gray-300  focus-within:border-b-green-500 space-x-1">
                  <input className="text-lg field-sizing-content focus:outline-none" value={info.email}></input>
                </div>
                </div>
                </div>
                <div className="flex-col flex w-1/2 space-y-2">
                <h1 className="text-lg font-semibold">Details:</h1>
                  <textarea className="text-lg field-sizing-content h-3/4 relative focus:outline-green-500" value={info.additional}/>
                </div>
                </div>
                </>          
                ) : (
                <>
                <div className="flex w-full justify-between">
                <h1 className="text-2xl font-bold mb-4 mt-2">Request Details:</h1>
                <button onClick={toggleEdit} className="absolute top-4 right-4 bg-yellow-300 p-2 rounded-xl">Edit</button>
                <Link to="/admin/users">
                <button onClick={toggleEdit} className="absolute bottom-4 right-4 p-2 border-2 border-green-500 rounded-xl text-green-600 hover:bg-green-200 hover:text-black">Approve</button>
                </Link>
                </div>
                <div className="flex w-full">
                <div className="flex-col flex w-1/2 space-y-2">
                <div className="flex space-x-2">
                <h1 className="text-lg font-semibold">Name:</h1>
                  <h1 className="text-lg"> {info.firstname} {info.lastname} </h1>
                </div>
                <div className="flex-col space-x-2">
                <h1 className="text-lg font-semibold">Address:</h1>
                  <h1 className="text-lg"> {info.address}, {info.zip}</h1>
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