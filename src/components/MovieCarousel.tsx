import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import defaultImage from '../../public/defaut.jpg';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
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
        breakpoint: 1440,
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
    <div className="movie-carousel mx-auto py-8">
      <Slider {...settings}>
        {movies.map((movie: Movie) => (
          <div key={movie.id} className="movie-card p-2">
            <div className="poster-container overflow-hidden rounded-lg shadow-lg">
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={movie.poster_path ? `https://www.themoviedb.org/t/p/original/${movie.poster_path}` : defaultImage}
                  alt={movie.title}
                  width={200}
                  height={400}
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
            <p className="mt-2 text-center text-lg font-semibold">{movie.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
