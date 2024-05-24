'use client'
import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../lib/api_request';
import MovieCarousel from '../components/MovieCarousel';

const UpcomingMoviesComponent: React.FC = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchUpcomingMoviesData = async () => {
      try {
        const data = await getUpcomingMovies();
        setUpcomingMovies(data.results);
      } catch (error: any) {
        console.error('Error fetching upcoming movies:', error.message);
      }
    };

    fetchUpcomingMoviesData();
  }, []);

  return (
    <div className='home_upcoming container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Prochains Films</h1>
      <MovieCarousel movies={upcomingMovies} />
    </div>
  );
};

export default UpcomingMoviesComponent;
