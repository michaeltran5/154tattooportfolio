'use client'
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

export default function MainGrid({ data = {} }) {
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
            {/* Logo in top left corner */}
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
                {/* Left Side Content */}
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center text-primary">
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

                {/* Right Side Grid */}
                <div className="lg:w-1/2 p-4 lg:p-8">
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="right-box flex flex-col justify-center rounded-[16px] p-6 bg-primary text-text">
                            <h2 className="text-xl lg:text-2xl font-bold mb-3 font-heading">Gallery</h2>
                            <p className="font-body">
                                Check out my latest work and side projects.
                            </p>
                        </div>

                        <div className="right-box flex flex-col justify-center rounded-[16px] p-6 bg-primary-light text-text">
                            <h2 className="text-xl lg:text-2xl font-bold mb-3 font-heading">Experience</h2>
                            <p className="font-body">
                                My professional journey and achievements.
                            </p>
                        </div>

                        <div className="right-box flex flex-col justify-center rounded-[16px] p-6 bg-primary-dark text-text">
                            <h2 className="text-xl lg:text-2xl font-bold mb-3 font-heading">Contact</h2>
                            <p className="font-body">
                                Let's connect and collaborate!
                            </p>
                        </div>

                        <div className="right-box flex flex-col justify-center rounded-[16px] p-6 bg-primary-darker text-text">
                            <h2 className="text-xl lg:text-2xl font-bold mb-3 font-heading">Blog</h2>
                            <p className="font-body">
                                Thoughts and insights on development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


