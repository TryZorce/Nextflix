"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { searchMovies } from '@/lib/api_request';
import Image from 'next/image';
import defaultImage from "../../../../public/defaut.jpg";
import Link from 'next/link';

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
                            <p>{movie.title}</p>
                            <p>{movie.overview}</p>
                            <Link href={`/movie/${movie.id}`}>
                            <Image
                            src={movie.poster_path ? `https://www.themoviedb.org/t/p/original/${movie.poster_path}` : defaultImage}
                            alt={movie.title}
                                width={200}
                                height={400}
                            />
                            </Link>
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
