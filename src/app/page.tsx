'use client'
import React from 'react';
import './style.css';
import HeroBanner from '@/components/HeroBanner';
import TopRatedMoviesComponent from '@/components/TopRatedMoviesComponent';
import UpcomingMoviesComponent from '@/components/UpcomingMoviesComponent';
import PopularMoviesComponent from '@/components/PopularMoviesComponent';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroBanner></HeroBanner>
            <TopRatedMoviesComponent></TopRatedMoviesComponent>
            <UpcomingMoviesComponent></UpcomingMoviesComponent>
            <PopularMoviesComponent></PopularMoviesComponent>
        </>
    );
}

export default HomePage;
