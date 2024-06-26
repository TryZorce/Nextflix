'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getMovieDetails } from '@/lib/api_request';
import defaultImage from "../../../../public/defaut.jpg";

const MovieDetail = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState<any>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const data = await getMovieDetails(id);
                setMovieDetails(data);
                const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
                setIsFavorite(favorites.includes(id));
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    const handleAddToFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (!favorites.includes(id)) {
            favorites.push(id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
            alert('Film ajouté aux favoris !');
        }
    };

    const handleRemoveFromFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites = favorites.filter((favoriteId: string) => favoriteId !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(false);
        alert('Film supprimé des favoris.');
    };

    return (
        <div className="container mx-auto p-6">
            {movieDetails ? (
                <div className="max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">{movieDetails.title}</h2>
                    <div className="mb-4">
                        <Image
                            src={movieDetails.poster_path ? `https://www.themoviedb.org/t/p/original/${movieDetails.poster_path}` : defaultImage}
                            alt={movieDetails.title}
                            width={200}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="mb-4">{movieDetails.overview}</p>
                    <div className="mb-4">
                        <p className=" mb-2">Note: {movieDetails.vote_average}</p>
                        <p className=" mb-2">Date de sortie: {movieDetails.release_date}</p>
                        <p className=" mb-2">Langue originale: {movieDetails.original_language}</p>
                        <p className=" mb-2">Durée: {movieDetails.runtime} minutes</p>
                        <p className=" mb-2">Genres: {movieDetails.genres.map((genre: any) => genre.name).join(', ')}</p>
                    </div>
                    {isFavorite ? (
                        <button
                            onClick={handleRemoveFromFavorites}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Supprimer des favoris
                        </button>
                    ) : (
                        <button
                            onClick={handleAddToFavorites}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Ajouter aux favoris
                        </button>
                    )}
                </div>
            ) : (
                <p className="text-center">Chargement...</p>
            )}
        </div>
    );
};

export default MovieDetail;
