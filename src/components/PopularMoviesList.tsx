'use client'
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../lib/api_request';
import Image from 'next/image';
import Link from 'next/link';

const PopularMovieList: React.FC = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchTopMoviesData = async () => { 
      try {
        const data = await getPopularMovies(); 
        setTopMovies(data.results);
      } catch (error: any) {
        console.error('Error fetching top-rated movies:', error.message);
      }
    };
      
    fetchTopMoviesData();
  }, []);

  return (
    <div className='home_toprated p-6'>
      <h1 className='text-3xl font-bold mb-6'>Films les Populaires</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {topMovies.map(movie => (
          <div key={movie.id} className='movie_item bg-white border border-gray-200 rounded-lg p-4 text-center shadow'>
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className='w-full h-auto rounded-lg mb-4'
                height={200}
                width={400}
              />
              <h2 className='text-xl font-semibold mb-2'>{movie.title}</h2>
              <p className='text-gray-600'>Note: {movie.vote_average}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovieList;
