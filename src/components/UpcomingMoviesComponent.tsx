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
    <div className='home_upcoming'>
      <h1>Prochain Film</h1>
      <MovieCarousel movies={upcomingMovies}/>
    </div>
  );
};

export default UpcomingMoviesComponent;
