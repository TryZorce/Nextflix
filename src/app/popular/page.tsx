'use client'
import React from 'react';
import "./style.css"
import PopularMovieList from '@/components/PopularMoviesList';

const PopularPage: React.FC = () => {
  return (
    <>
      <PopularMovieList />
    </>
  );
};

export default PopularPage;
