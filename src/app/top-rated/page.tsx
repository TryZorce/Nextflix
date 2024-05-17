'use client'
import React from 'react';
import TopRatedMoviesComponent from '@/components/TopRatedMoviesComponent';
import "./style.css"
import TopRatedMoviesList from '@/components/TopRatedMoviesList';

const TopRatedPage: React.FC = () => {
  return (
    <>
      <TopRatedMoviesList></TopRatedMoviesList>
    </>
  );
};

export default TopRatedPage;
