"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full flex justify-center p-4">
            <nav className="flex justify-between items-center backdrop-blur-24px bg-[hsla(0,0%,100%,0.30)] rounded-full px-6 py-3 h-14 w-[584px]">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/NavLogo.svg" alt="Logo" className="h-12" /> {/* Adjust the height as needed */}
                </Link>
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <Link href="/about" className="text-white transition">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="text-white transition">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="px-4 py-2 bg-[#269BFE] text-white rounded-full transition">
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col space-y-1.5">
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                    </button>
                </div>
            </nav>
            <div
                className={`fixed top-0 right-0 h-full w-64 backdrop-blur-24px bg-[hsla(0,0%,70%,1)] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 left-4 text-gray-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <ul className="mt-16 flex flex-col space-y-2 p-4 items-center">
                    <li>
                        <Link href="/about" className="text-white transition">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="text-white transition">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="w-3/4 px-4 py-2 bg-[#269BFE] text-white text-center rounded-full transition">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;