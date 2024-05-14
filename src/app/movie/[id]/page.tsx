"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const MovieDetail = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState<any>(null); // Utilisation de 'any' pour le typage

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2JkZDJkYTZkYzMyZTIzNmMzZTZmZDg0Mjc3YzMyYiIsInN1YiI6IjY0MzUyMDdkOTJlNTViMDA5NzNiOGRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zf9GiGDMpj1zAoqCgcRPas3wWSC-qcoBsYlQF07Mqnc'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                const data = await response.json();
                setMovieDetails(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div>
            {movieDetails ? (
                <div>
                    <h2>{movieDetails.title}</h2>
                    <p>{movieDetails.overview}</p>
                    <Image
                        src={`https://www.themoviedb.org/t/p/original/${movieDetails.poster_path}`}
                        alt={movieDetails.title}
                        width={200}
                        height={400}
                    />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MovieDetail;
