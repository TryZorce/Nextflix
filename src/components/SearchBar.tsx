import React, { useState } from 'react';
import Link from 'next/link';
import "./searchBar.css"

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Rechercher un film..."
                value={query}
                onChange={handleInputChange}
            />
            <Link href={`/search/${encodeURIComponent(query)}`}>
                <p>Rechercher</p>
            </Link>
        </div>
    );
};

export default SearchBar;
