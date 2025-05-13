import {Link} from 'react-router-dom'

const Cover = () => {
    return (
        <>
<section className="">
  <section className="bg-cover bg-center bg-[url(https://westcoastjanitorial.com/images/a537c2b93aff94d1336fb38b03e85f8b.jpg)] brightness-65 items-center min-w-screen py-12 px-4 text-center">
    <h3 className="text-8xl py-8 font-semibold text-white">West Coast Janitorial Services</h3>
    <h3 className="text-4xl font-semibold text-white mb-6">We Take Care Of Your Home & Business</h3>

    {/* Buttons container */}
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <button className="bg-white py-2 px-6 rounded-lg text-xl text-green-800 hover:bg-gray-100">CALL TODAY!</button>
      <Link to="/estimate">
        <button className="bg-white py-2 px-6 rounded-lg text-xl text-green-800 hover:bg-gray-100">
          Estimate
        </button>
      </Link>
    </div>
  </section>
</section>
        </>
    )
}

export default Cover