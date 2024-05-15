"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getMovieDetails } from '@/lib/api_request'; 

const MovieDetail = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState<any>(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const data = await getMovieDetails(id);
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
