import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBullseye } from '@fortawesome/free-solid-svg-icons';

const AboutUs: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col bg-[#269BFE] text-white">
            <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/who-we-are.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <Navbar />
                <section id="who-we-are" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 mt-[-64px]">
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#269BFE] rounded-full mb-4">
                        <FontAwesomeIcon icon={faUsers} className="text-white" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Who We Are</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        We are a trusted HVAC solutions provider based in Mandaluyong City, Philippines, specializing in the supply of essential components such as refrigerants (including Freon), compressor oils, tapes, filter driers, copper tubes, copper pipes, access valves, and more. Committed to honesty, reliability, and transparent service, we uphold the highest ethical standards while adhering to local guidelines. Our products ensure optimal performance and comfort for a wide range of HVAC systems, making us the preferred partner for clients across the Philippines.
                    </p>
                </section>
            </div>
            {/* Our Clients Section */}
            <section id="our-clients" className="bg-[#2179B8] text-white py-12 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Clients</h2>
                    <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
                        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 flex items-center justify-center mx-auto">
                            <img src="/client-logo.jpg" alt="Client 1" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 flex items-center justify-center mx-auto">
                            <img src="/client-logo2.jpg" alt="Client 2" className="max-w-full max-h-full object-contain" />
                        </div                        ><div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 flex items-center justify-center mx-auto">
                            <img src="/client-logo3.jpg" alt="Client 3" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 flex items-center justify-center mx-auto">
                            <img src="/client-logo4.JPG" alt="Client 4" className="max-w-full max-h-full object-contain" />
                        </div>
                    </div>
                </div>
            </section>
            <main className="flex-grow">
                {/* Mission Section */}
                <section id="mission" className="relative min-h-screen flex flex-col justify-center items-center text-center py-12 px-4 md:px-8 md:py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/mission.png')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 flex justify-center items-center bg-[#269BFE] rounded-full mb-4">
                        <FontAwesomeIcon icon={faBullseye} className="text-white" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <h2 className="relative z-10 text-3xl md:text-5xl font-bold mb-4">Our Mission</h2>
                    <p className="relative z-10 text-lg md:text-xl leading-7 max-w-3xl">
                        At Sofysam Fortune Enterprises, we are dedicated to delivering top-quality HVAC components that enhance the efficiency, reliability, and longevity of every system we serve. By offering exceptional products like refrigerants, compressor oils, copper pipes, and more, we strive to maintain the highest standards of integrity and service. Our focus on innovation and customer satisfaction drives us to be the leading provider of HVAC solutions in the Philippines, ensuring comfort and peak performance in every environment.
                    </p>
                </section>
                {/* Meet the Team Section with Updated Background Color */}
                <section id="meet-the-team" className="bg-[#2179B8] text-white py-12 px-4 md:px-8 md:py-16 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 flex justify-center items-center bg-[#269BFE] rounded-full mb-8">
                            <FontAwesomeIcon icon={faUsers} className="text-white" style={{ width: '60px', height: '60px' }} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-16">Meet the Team</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-stretch space-y-16 md:space-y-0 md:space-x-16">
                        <div className="flex flex-col items-center text-center">
                            <img src="/member1.png" alt="Team Member 1" className="w-64 h-64 rounded-full object-cover mb-8 mx-auto border-4 border-white" />
                            <h3 className="text-xl font-semibold mb-2">Paul Barbaira</h3>
                            <p className="text-lg mb-4">Chief Executive Officer</p>
                            <p className="text-sm leading-6 max-w-xs mx-auto">Paul is an experienced leader in HVAC sales, driving our company’s growth with a strong focus on innovation and excellence. His extensive background in the industry ensures that our customers receive the highest quality service and solutions.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src="/member2.PNG" alt="Team Member 2" className="w-64 h-64 rounded-full object-cover mb-8 mx-auto border-4 border-white" />
                            <h3 className="text-xl font-semibold mb-2">Don Don</h3>
                            <p className="text-lg mb-4">Logistics Coordinator</p>
                            <p className="text-sm leading-6 max-w-xs mx-auto">Don Don ensures efficient loading, unloading, and shipment of products, keeping operations smooth and deliveries timely. His dedication and loyalty ensures our high standards are met every time.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;