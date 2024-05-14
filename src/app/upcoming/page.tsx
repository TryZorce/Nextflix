'use client'
import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../../lib/api_request';
import MovieCarousel from '../../components/MovieCarousel';
import "./style.css"

const UpcomingPage: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchPopularMoviesData = async () => {
      try {
        const data = await getUpcomingMovies();
        setPopularMovies(data.results);
      } catch (error: any) {
        console.error('Error fetching popular movies:', error.message);
      }
    };

    fetchPopularMoviesData();
  }, []);

  return (
    <div className='home_upcoming'>
      <h1>Prochain Film</h1>
      <MovieCarousel movies={popularMovies}/>
    </div>
  );
};

export default UpcomingPage;
