import Sidebar from "../sideNavbar"
import Navbar from "../navbar"
import { useEffect } from "react"
import { useState } from "react"
import { db } from "../../firebase"
import { getDoc, doc } from "firebase/firestore"
import { useLocation } from "react-router-dom"
import { ArrowBigLeft } from "lucide-react"
import { Link } from "react-router-dom"


const SingleUser = () => {
    const [info, setInfo] = useState({})
    const [error, setError] = useState('')
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

    return(
        <div>
          <Navbar />
          <div className="flex flex-row bg-green-950 h-screen justify-start items-start">
            <div className="w-1/4">
              <Sidebar />
            </div>
                <div className="w-3/4 p-8 m-12 bg-white rounded-lg overflow-y-auto relative">
                <Link to="/admin/users">
                <h1 className="absolute top-3 left-5 flex text-green-700 hover:text-green-600"><ArrowBigLeft/>Back</h1>
                </Link>
                <div className="flex w-full justify-between">
                <h1 className="text-2xl font-bold mb-4 mt-2">Client Details:</h1>
                <button className="absolute top-4 right-4 bg-yellow-300 p-2 rounded-xl">Edit</button>
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
                <div className="grid col-auto row-auto w-full space-y-2 pt-2">
                <h1 className="text-lg font-semibold">Bookings:</h1>
                {info.bookings?.length > 0 ? (
                info.bookings.map((booking, index) => (
    <div key={index} className="bg-white p-2 w-fit rounded shadow">
      <p><span className="font-semibold">Date:</span> {booking.date}</p>
      <p><span className="font-semibold">Start:</span> {booking.start}</p>
      <p><span className="font-semibold">End:</span> {booking.end}</p>
    </div>
  )) 
): (<p>No Bookings.</p>)}
                </div>
            </div>
          </div>
        </div>
    )
}

export default SingleUser