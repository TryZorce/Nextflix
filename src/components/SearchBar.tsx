"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className="flex items-center justify-center mt-8">
            <input
                className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Rechercher un film..."
                value={query}
                onChange={handleInputChange}
            />
            <Link href={`/search/${encodeURIComponent(query)}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Rechercher
                </button>
            </Link>
        </div>
    );
};

export default SearchBar;
