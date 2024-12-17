'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Booking = () => {
    return (
        <div className="min-h-screen w-full relative bg-background">
            {/* Logo */}
            <div className="absolute top-8 left-8 z-10">
                <Link href="/">
                    <Image
                        src="/bannerfinal.png"
                        alt="154 Tattoo Logo"
                        width={100}
                        height={100}
                        className="w-auto h-auto"
                    />
                </Link>
            </div>
            {/* Header Section */}
            <div className="p-8 lg:p-16 flex flex-col text-text text-center">
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 font-heading">BOOKING</h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center px-4 text-center -mt-8">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfZfh4FT-GL5CvqkWbUtBRu9UdA6rBtjPU1VQy6gk_tOz23Qw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-dark hover:bg-primary-darker text-text px-8 py-4 rounded-full font-body transition-colors shadow-lg text-lg"
                >
                    Open Booking Form
                </a>
            </div>
        </div>
    );
};

export default Booking;