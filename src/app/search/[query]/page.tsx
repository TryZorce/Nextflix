"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { searchMovies } from '@/lib/api_request';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';

const SearchPage = () => {
    const { query } = useParams();
    const [searchResults, setSearchResults] = useState<any[]>([]);

    useEffect(() => {
        const fetchSearchPage = async () => {
            try {
                const queryString = Array.isArray(query) ? query.join(',') : query;
                const data = await searchMovies(queryString);
                setSearchResults(data.results); 
            } catch (error) {
                console.error(error);
            }
        };

        fetchSearchPage();
    }, [query]);

    return (
        <div>
            <h1>Résultats de la recherche pour &quot;{query}&quot;</h1>
            {searchResults.length > 0 ? (
                <div>
                    {searchResults.map((movie: any) => (
                        <div key={movie.id}>
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            <Image
                                src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title}
                                width={200}
                                height={400}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Aucun résultat trouvé.</p>
            )}
        </div>
    );
};

export default SearchPage;
