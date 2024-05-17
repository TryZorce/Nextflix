'use client'
import React from 'react';
import UpcomingMoviesComponent from '@/components/UpcomingMoviesComponent';
import "./style.css"
import UpcomingMoviesList from '@/components/UpcomingMoviesList';

const UpcomingPage: React.FC = () => {
  return (
    <>
      <UpcomingMoviesList></UpcomingMoviesList>
    </>
  );
};

export default UpcomingPage;
