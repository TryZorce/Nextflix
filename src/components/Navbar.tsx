"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 w-full top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <div className="text-white text-2xl font-bold">
                    <Link href="/">
                        <p className="cursor-pointer">Nextflix</p>
                    </Link>
                </div>
                <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4 absolute md:relative bg-gray-800 md:bg-transparent w-full md:w-auto top-16 md:top-0 right-0 md:right-auto text-center md:text-left z-10">
                        <li className="border-b md:border-b-0 border-gray-700 md:border-transparent py-2 md:py-0">
                            <Link href="/">
                                <p className="text-white hover:text-gray-300 cursor-pointer">Accueil</p>
                            </Link>
                        </li>
                        <li className="border-b md:border-b-0 border-gray-700 md:border-transparent py-2 md:py-0">
                            <Link href="/popular">
                                <p className="text-white hover:text-gray-300 cursor-pointer">Populaires</p>
                            </Link>
                        </li>
                        <li className="border-b md:border-b-0 border-gray-700 md:border-transparent py-2 md:py-0">
                            <Link href="/top-rated">
                                <p className="text-white hover:text-gray-300 cursor-pointer">Mieux Notés</p>
                            </Link>
                        </li>
                        <li className="border-b md:border-b-0 border-gray-700 md:border-transparent py-2 md:py-0">
                            <Link href="/upcoming">
                                <p className="text-white hover:text-gray-300 cursor-pointer">Prochaines Sorties</p>
                            </Link>
                        </li>
                        <li className="border-b md:border-b-0 border-gray-700 md:border-transparent py-2 md:py-0 ">
                            <Link href="/favorites">
                                <p className="text-white hover:text-gray-300 cursor-pointer">Favoris</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
