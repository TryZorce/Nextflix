'use client'
import React, { useEffect, useState } from 'react';
import { getTopMovies } from '../../lib/api_request';
import MovieCarousel from '../../components/MovieCarousel';
import Navbar from '@/components/Navbar';
import "./style.css"

const PopularPage: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchPopularMoviesData = async () => {
      try {
        const data = await getTopMovies();
        setPopularMovies(data.results);
      } catch (error:any) {
        console.error('Error fetching popular movies:', error.message);
      }
    };

    fetchPopularMoviesData();
  }, []);

  return (
    <div className='home_toprated'>
      <h1>Film les mieux notées</h1>
      <MovieCarousel movies={popularMovies}/>
    </div>
  );
};

export default PopularPage;
