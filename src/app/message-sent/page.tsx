"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MessageSent: React.FC = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className="relative min-h-screen flex flex-col bg-[#2179B8] text-white">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 md:px-8 md:py-16">
                <div className="flex flex-col items-center p-6 rounded-lg">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#269BFE] mb-4" style={{ fontSize: '4rem' }} />
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Message Sent</h2>
                    <button
                        onClick={handleGoHome}
                        className="mt-4 px-4 py-2 rounded bg-[#269BFE] text-white font-semibold"
                    >
                        Go Back Home
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MessageSent;