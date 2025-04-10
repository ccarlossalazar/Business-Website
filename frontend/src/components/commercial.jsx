import office from '../assets/office.jpg';
import { Link } from 'react-router-dom';

const Commercial = () => {
    return (
      <>
       <section id="commercial" className="flex flex-col md:flex-row bg-[#385230] text-white px-6 py-12 md:py-0 items-center md:items-stretch min-h-[500px]">
  {/* Image Section */}
  <div className="md:w-1/2 mb-8 md:mb-0 ml-40">
    <img src={office} alt="Office" className="rounded-lg shadow-lg w-full h-auto" />
  </div>

  {/* Text Content */}
    <div className="md:w-1/2 flex flex-col justify-center px-6 ml-60">
        {/* Header with triangle */}
        <div className="flex items-center gap-3 mb-20">
        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-green-400"></div>
        <h4 className="text-4xl font-semibold text-white">Commercial Cleaning</h4>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-4 leading-snug mb-20">
        Keeping your <br className="hidden md:block" />
        workplace <span className="text-green-400">spotless</span>
        </h2>

        {/* Button */}
        <Link to="/estimate">
        <button className="mt-2 bg-white text-green-800 px-6 py-2 rounded-full text-base font-semibold hover:bg-green-100 transition">
            Get an estimate
        </button>
        </Link>
    </div>
</section>
      </>
    );
  };
  
  export default Commercial;
  