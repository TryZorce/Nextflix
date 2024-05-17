'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getMovieDetails } from '@/lib/api_request';
import defaultImage from '../../public/defaut.jpg';

const Favorites = () => {
    const [favoriteMovies, setFavoriteMovies] = useState<any[]>([]);

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            const movieDetailsPromises = favorites.map((id: string) => getMovieDetails(id));
            const movies = await Promise.all(movieDetailsPromises);
            setFavoriteMovies(movies);
        };

        fetchFavoriteMovies();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Mes Films Favoris</h2>
            {favoriteMovies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteMovies.map((movie) => (
                        <div key={movie.id} className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                            <Image
                                src={movie.poster_path ? `https://www.themoviedb.org/t/p/original/${movie.poster_path}` : defaultImage}
                                alt={movie.title}
                                width={200}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{movie.title}</h3>
                                <p className="text-gray-700">{movie.overview}</p>
                                <p className="text-gray-700 mt-2">Note: {movie.vote_average}</p>
                                <p className="text-gray-700">Date de sortie: {movie.release_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">Aucun film ajouté aux favoris pour le moment.</p>
            )}
        </div>
    );
};

export default Favorites;
