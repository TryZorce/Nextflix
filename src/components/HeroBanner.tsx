'use client';
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '@/lib/api_request';

function HeroBanner() {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        const fetchPopularMovie = async () => {
            try {
                const data = await getPopularMovies();
                if (data.results && data.results.length > 0) {
                    const mostPopularMovie = data.results[0];
                    const imageUrl = `https://www.themoviedb.org/t/p/original/${mostPopularMovie.backdrop_path}`;
                    setBackgroundImage(imageUrl);
                }
            } catch (error) {
                console.error('Error fetching popular movie:', error);
            }
        };

        fetchPopularMovie();
    }, []);

    return (
        <div
            className='home_banner'
            style={{ backgroundImage: `url(${backgroundImage})`}}
        >
            <div className='text_overlay'>
                <h1>Bienvenue sur notre site de films !</h1>
                <p>Découvrez notre collection de films :</p>
            </div>
        </div>
    );
}

export default HeroBanner;
