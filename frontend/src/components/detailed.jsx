import sink from '../assets/sink.jpg';
import moveInOut from '../assets/moveInOut.jpg';
import postConstruction from '../assets/postConstruction.jpg';

const Detailed = () => {
    return (
      <>
  
        {/* Detailed Cleanings Section */}
        <section id="detailed" className="bg-gray-100 py-12 px-6 text-center">
          <h3 className="text-6xl font-semibold text-green-700 mb-10">DETAILED CLEANINGS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Deep Cleaning */}
            <div>
              <img src={sink} alt="Deep Cleaning" className="rounded-lg shadow-md w-full h-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-2">Deep Cleaning</h4>
              <p className="text-lg text-gray-700">Does your space need extra attention? This service provides EXTRA attention to detail compared to your regular cleaning.</p>
            </div>
  
            {/* Move-In/Move-Out */}
            <div>
              <img src={moveInOut} alt="Move In/Out" className="rounded-lg shadow-md w-full h-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-2">MOVE-IN/MOVE-OUT</h4>
              <p className="text-lg text-gray-700">Need your place to look good as new? This is the perfect service for you.</p>
            </div>
  
            {/* Post-Construction */}
            <div>
              <img src={postConstruction} alt="Post Construction" className="rounded-lg shadow-md w-full h-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-2">POST-CONSTRUCTION</h4>
              <p className="text-lg text-gray-700">New build & remodeling cleaning? Present a clean and lovely home or office to your client.</p>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Detailed;
  