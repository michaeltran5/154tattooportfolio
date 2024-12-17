'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Flash = () => {
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
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 font-heading">FLASH</h1>
            </div>

            {/* Main Image Section */}
            <div className="flex justify-center px-8 lg:px-16 pb-24">
                <div className="relative aspect-[3/2] w-full max-w-6xl rounded-[16px] overflow-hidden">
                    <Image
                        src="/flash.jpg"
                        alt="Featured Flash Design"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Navigation Button */}
            <Link
                href="/gallery"
                className="fixed bottom-8 right-8 bg-primary-dark hover:bg-primary-darker text-text px-6 py-3 rounded-full font-body transition-colors shadow-lg"
            >
                View Gallery
            </Link>
        </div>
    );
};

export default Flash;