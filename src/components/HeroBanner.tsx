import React from 'react';

interface HeroBannerProps {
    movie: Movie;
}

interface Movie {
    // détails du film
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movie }) => {
    return (
        <div className="hero-banner">
            {/* Contenu du banner avec le film le plus populaire */}
        </div>
    );
}

export default HeroBanner;
