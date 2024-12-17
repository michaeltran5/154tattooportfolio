'use client'
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const MainGrid = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from('.right-box', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen w-full relative bg-background">
            <div className="absolute top-8 left-8 z-10">
                <Image
                    src="/bannerfinal.png"
                    alt="154 Tattoo Logo"
                    width={100}
                    height={100}
                    className="w-auto h-auto"
                />
            </div>

            <div className="flex flex-col lg:flex-row h-screen">
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center text-text">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-8 font-heading">154 TATTOO</h1>
                    <p className="text-lg mb-8 font-body">
                        ABOUT ME
                    </p>
                    <div className="space-y-6">
                        <div>
                            <p className="font-body">MILWAUKEE, WI</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 p-4 lg:p-8">
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <Link href="/Gallery" className="right-box flex flex-col justify-center rounded-[16px] p-6 bg-primary-light text-text hover:bg-primary-dark transition-colors">
                            <h2 className="text-xl lg:text-2xl font-bold mb-3 font-heading">Gallery</h2>
                            <p className="font-body">
                            </p>
                        </Link>

                        <Link href="/Flash" className="right-box flex flex-col justify-center rounded-[16px] p-6 bg-primary-dark text-text hover:bg-primary-darker transition-colors">
                            <h2 className="text-xl lg:text-2xl font-bold mb-3 font-heading">Flash</h2>
                            <p className="font-body">
                            </p>
                        </Link>

                        <Link href="/Booking" className="right-box flex flex-col justify-center rounded-[16px] p-6 bg-primary-dark text-text hover:bg-primary-darker transition-colors">
                            <h2 className="text-xl lg:text-2xl font-bold mb-3 font-heading">Booking</h2>
                            <p className="font-body">
                            </p>
                        </Link>

                        <Link href="/Shop" className="right-box flex flex-col justify-center rounded-[16px] p-6 bg-primary-darker text-text hover:bg-[#B5B2AA] transition-colors">
                            <h2 className="text-xl lg:text-2xl font-bold mb-3 font-heading">Shop</h2>
                            <p className="font-body">
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainGrid;