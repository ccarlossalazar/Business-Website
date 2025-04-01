import {Link} from 'react-router-dom'

const Cover = () => {
    return (
        <>
        <section className="">
            <section className="bg-cover bg-center bg-[url(https://westcoastjanitorial.com/images/a537c2b93aff94d1336fb38b03e85f8b.jpg)] brightness-65 items-center min-w-screen">
                <h3 className="text-4xl py-8 text-center font-semibold">West Coast Janitorial Services</h3>
                <h3 className="flex flex-col text-center text-white text-2xl text-semibold">We Take Care Of Your Home & Business</h3>
                <button className="bg-green-600 py-2 px-6 rounded-lg text-white text-lg mt-6 p-4 justify-center">CALL TODAY!</button>
                <Link to='/estimate'>
                    <button href="#" className="bg-gradient-to-r from-green-600 to-green-800 py-2 px-3 rounded-lg text-xl">Estimate</button>
                    </Link>
            </section>
        </section>
        </>
    )
}

export default Cover