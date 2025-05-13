import westCoast from '../assets/westCoast.jpg'; // use the actual file name



const About = () => {
    return (
        <section
        id="about"
        className="bg-cover bg-center bg-no-repeat py-20 px-6"
        style={{ backgroundImage: `url(${westCoast})` }}
      >
    <h2 className="text-6xl font-bold mb-6 text-white custom-text-outline ml-25">
      About Us
    </h2>
    <div className="text-lg bg-white/70 min-h-[600px] max-w-4xl mx-auto p-8 rounded-lg shadow-lg text-gray-900 flex flex-col justify-evenly">


          <p className="mb-4">
            <strong>West Coast Janitorial</strong> was established in 2005 providing house cleaning services in Half Moon Bay and San Mateo Area. Our team has worked diligently since opening for business to earn a reputation as a well-run company.
          </p>
          <p className="mb-4">
            Today West Coast Janitorial Services, although much larger and with a wider service portfolio, continues to offer its clients exceptional customer service with direct owner involvement in all aspects of the business.
          </p>
          <p className="mb-4">
            West Coast Janitorial Services wants to be your vendor of choice to maintain a clean and healthy environment in your commercial office or private residence. We are detail oriented, hard working, and very flexible to meet your needs.
          </p>
          <p className="mb-4">
            Why should you hire West Coast Janitorial Services? First, because we are <strong>Responsive</strong>. We carefully listen to what you say in order to satisfy your needs. We pledge to continually improve our service based on your feedback. And if you ever need to reach us, just call day or night. If we don't answer the phone we pledge to get back to you as soon as possible. Next, we’re <strong>Reliable</strong>. We don’t miss appointments. End of story. If you hire us we’ll be there. We provide services as needed 7 days a week, day or night. We’re ready to do a great job each and every time.
          </p>
          <p className="font-medium mt-6">
            <strong>Our Services:</strong><br />
            Residential Cleaning, Commercial Cleaning, Deep Cleaning, Post-Construction Cleaning, <br />
            Move-In/Move-Out Cleaning, Floor Wax & Strip, Pressure Washing
          </p>
        </div>
      </section>
    );
  };
  
  export default About;
  