import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Fab from '../components/UI/Fab';
import { images } from '../config/gallery';
import { collections } from '../config/collections';
import MasonryGrid from './MasonryGrid';

interface GalleryProps {
    collection: string;
    footerRef: React.RefObject<HTMLDivElement>; // Accept footerRef as a prop
}

const Gallery: React.FC<GalleryProps> = ({ collection, footerRef }) => {
    const currentCollection = collections.find((col) => col.url === collection);
    const heading = String(currentCollection ? currentCollection.name : 'My Photographs');
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScroll = () => {
        if (footerRef.current) {
            const footerTop = footerRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Hide the scroll button when the footer is in view
            setShowScrollButton(window.scrollY > 300 && footerTop > windowHeight);
        } else {
            setShowScrollButton(window.scrollY > 300);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <h2>{heading}</h2>
            <div className='max-w-screen-2xl px-1 sm:px-16 md:px-32 lg:px-48 relative 2xl:px-64 mx-auto'>
                <MasonryGrid>
                    {images
                        .filter((img) => collection === '' || img.collection === collection)
                        .map((img) => (
                            <div key={img.id} className="break-inside-avoid py-2">
                                <img 
                                    src={img.src} 
                                    alt={img.alt} 
                                    className="w-full h-auto" 
                                    />
                            </div>
                        ))}
                </MasonryGrid>
                {showScrollButton && (
                    <Fab onClick={scrollToTop} className="fixed bottom-6 right-6 z-10 bg-cta">
                        <FaArrowUp fill="primary" size={28} />
                    </Fab>
                )}
            </div>
        </>
    );
};

export default Gallery;
