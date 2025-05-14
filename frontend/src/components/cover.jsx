import {Link} from 'react-router-dom'
import ReactCurvedText from 'react-curved-text'

const Cover = () => {
    return (
        <>
  <section className="relative items-center min-w-screen py-30 px-4 text-white text-center">
 <div className="absolute inset-0 bg-[url('https://westcoastjanitorial.com/images/a537c2b93aff94d1336fb38b03e85f8b.jpg')] bg-cover bg-center brightness-75 z-0"/>
 <div className='z-10 flex flex-col items-center justify-center relative'>
  <div className="flex justify-center items-center w-full">
          <ReactCurvedText
            width={850}
            height={150}
            cx={430}
            cy={180}
            rx={340}
            ry={130}
            startOffset={50}
            reversed={true}
            text="West Coast Janitorial Services"
            textProps={{ style: { fontSize: 50, fill: 'white', fontWeight: "bold" } }}
          />
        </div>  
        <div>
         <h3 className="text-7xl font-bold text-white">We Take Care Of</h3>
         <h3 className="text-7xl font-bold text-white mb-6"> Your Home & Business</h3>
        </div>

    {/* Buttons container */}
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <button className="bg-white py-2 px-6 rounded-xl text-3xl text-green-800 hover:bg-gray-300">CALL TODAY!</button>
      <Link to="/estimate">
        <button className="bg-white py-2 px-6 rounded-xl text-3xl text-green-800 hover:bg-gray-300">
          Estimate
        </button>
      </Link>
    </div>
    </div>
</section>
        </>
    )
}

export default Cover