'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { healed } from '../../lib/gallery-data';

const Gallery = () => {
    const containerRef = useRef(null);
    const [data, setData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (healed) {
            setData(healed);
        }
    }, []);

    useGSAP(() => {
        gsap.from('.gallery-item', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    console.log('Current data:', data);

    return (
        <div ref={containerRef} className="min-h-screen w-full relative bg-background">
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

            <div className="flex flex-col h-screen">
                <div className="p-8 lg:p-16 flex flex-col text-text text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-8 font-heading">HEALED</h1>
                </div>

                <div className="flex-1 px-8 lg:px-16 pb-16 overflow-y-auto">
                    {data && data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {data.map((design, index) => (
                                <div
                                    key={design.id}
                                    className="gallery-item group relative aspect-square rounded-[16px] overflow-hidden bg-primary-light
                                     hover:bg-primary-dark transition-colors cursor-pointer"
                                    onClick={() => setSelectedImage(design)}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={design.image}
                                            alt={design.title}
                                            fill
                                            className="object-cover group-hover:opacity-90 transition-opacity"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={index < 4}
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">

                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>Loading gallery...</div>
                    )}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full h-auto">
                        <Image
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            width={1000}
                            height={1000}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}


        </div>
    );
};

export default Gallery;