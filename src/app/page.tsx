import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative flex-grow flex flex-col justify-start bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Navbar />
        <main className="relative flex-grow flex flex-col justify-start text-white p-4 md:p-8 pb-16 z-10">
          <div className="flex flex-col items-start justify-start text-left p-4 md:p-8 w-full mt-5 md:mt-20">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Precision Products for <br className="hidden md:block" />
              <span className="block">
                <span className="text-[#269BFE]">Peak </span> Performance.
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Supplying premium HVAC components with precision and reliability.<br className="hidden md:block" />
              Guaranteed optimal performance and comfort for every environment.<br className="hidden md:block" />
              Your trusted partner in HVAC excellence.
            </p>
            <a href="/about" className="px-6 py-3 bg-[#269BFE] rounded-full transition text-white mb-8 hover:bg-[#1f82d6]">Learn More</a>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#269BFE]" style={{ width: '25px', height: '25px' }} />
                <span className="text-sm md:text-base">(0917) 895-0801</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#269BFE]" style={{ width: '25px', height: '25px' }} />
                <span className="text-sm md:text-base">sofysam_fortune@yahoo.com</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-[#269BFE]" style={{ width: '25px', height: '25px' }} />
                <span className="text-sm md:text-base">A. Luna St, Mandaluyong, Philippines</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* New Call to Action Section */}
      <section className="bg-gradient-to-r from-[#269BFE] to-[#005b8a] text-white text-center py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Optimize Your HVAC System Today</h2>
          <p className="text-lg md:text-2xl mb-10">
            Discover how our premium HVAC products can enhance your system's performance and efficiency. Get in touch with us for a personalized quote.
          </p>
          <a href="/contact" className="inline-block px-10 py-4 bg-white text-[#269BFE] rounded-full font-semibold text-lg md:text-xl transition hover:bg-gray-100 shadow-lg">
            Request a Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;