import office from '../assets/office.jpg';
import { Link } from 'react-router-dom';

const Commercial = () => {
    return (
      <>
       <section id="commercial" className="flex flex-row bg-[#385230] text-white px-6 py-12 items-center">
  {/* Image Section */}
  <div className="w-full md:w-1/2 mb-8 md:mb-0">
    <img src={office} alt="Office" className="rounded-lg shadow-lg"/>
  </div>

  {/* Text Content */}
    <div className="md:w-1/2 flex flex-col justify-center px-6 lg:ml-60 md:ml-16">
        {/* Header with triangle */}
        <div className="flex items-center gap-3 mb-20">
        <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[32px] border-l-transparent border-r-transparent border-b-green-400"></div>
        <h4 className="text-6xl font-semibold text-white">Commercial Cleaning</h4>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold leading-snug mb-25">
        Keeping your <br className="hidden md:block" />
        workplace <span className="text-green-400">spotless</span>
        </h2>

        {/* Button */}
        <Link to="/estimate">
        <button className="bg-white py-5 px-10 rounded-2xl text-3xl font-bold text-green-800 hover:bg-green-100 hover:border hover:border-black">
        Get an estimate
      </button>
        </Link>
    </div>
</section>
      </>
    );
  };
  
  export default Commercial;
  