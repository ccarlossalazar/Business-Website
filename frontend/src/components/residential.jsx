import { Link } from 'react-router-dom';
import kitchenImage from '../assets/kitchen.jpg';
import bathroomImage from '../assets/bathroom.jpg';
import bedroomImage from '../assets/bedroom.jpg';


const Residential = () => {
  return (
    <section id="residential" className="residential">
      {/* Residential cleaning section */}
      <div className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-[#385230]">
  <div className="md:w-1/2 flex flex-col items-center text-center space-y-16">
    <h3 className="text-4xl font-semibold text-white">Residential cleaning</h3>
    <p className="text-lg text-white">Residential cleaning for your busy lifestyle</p>
    <Link to="/estimate">
      <button className="bg-white py-2 px-6 rounded-lg text-xl text-green-800">
        Get an estimate
      </button>
    </Link>
  </div>
  <div className="md:w-1/2">
    <img src={kitchenImage} alt="Kitchen" className="rounded-lg shadow-lg" />
  </div>
</div>

      {/* Available services section */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h4 className="text-3xl font-semibold mb-4 text-green-600 mb-10">Available weekly, bi-weekly, monthly & seasonal</h4>
        <div className="flex justify-center gap-16">
          <div className="w-120">
            <img src={bathroomImage} alt="Bathroom" className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-120">
            <img src={bedroomImage} alt="Bedroom" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Residential;
