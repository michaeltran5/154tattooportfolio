'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Shop = () => {
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

            {/* Content Section */}
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 font-heading">SHOP</h1>
                <p className="text-lg font-body">Shop coming soon...</p>
            </div>


        </div>
    );
};

export default Shop;