import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import './movieCarousel.css'

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      }
    ]
  };

  return (
    <div className="movie-carousel">
      <Slider {...settings}>
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="movie-card">
            {movie.poster_path && (
              <div className="poster-container">
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    width={200}
                    height={400}
                  />
                </Link>
              </div>
            )}
            <p>{movie.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
