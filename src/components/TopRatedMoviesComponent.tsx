'use client'
import React, { useEffect, useState } from 'react';
import { getTopMovies } from '../lib/api_request';
import MovieCarousel from '../components/MovieCarousel';

const TopRatedMoviesComponent: React.FC = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchTopMoviesData = async () => {
      try {
        const data = await getTopMovies();
        setTopMovies(data.results);
      } catch (error:any) {
        console.error('Error fetching top-rated movies:', error.message);
      }
    };

    fetchTopMoviesData();
  }, []);

  return (
    <div className='home_toprated'>
      <h1>Film les mieux notés</h1>
      <MovieCarousel movies={topMovies}/>
    </div>
  );
};

export default TopRatedMoviesComponent;
