'use client'
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../lib/api_request';
import MovieCarousel from '../components/MovieCarousel';

const PopularMoviesComponent: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchPopularMoviesData = async () => {
      try {
        const data = await getPopularMovies();
        setPopularMovies(data.results);
      } catch (error:any) {
        console.error('Error fetching popular movies:', error.message);
      }
    };

    fetchPopularMoviesData();
  }, []);

  return (
    <div className='home_popular'>
      <h1>Film Populaire</h1>
      <MovieCarousel movies={popularMovies}/>
    </div>
  );
};

export default PopularMoviesComponent;
