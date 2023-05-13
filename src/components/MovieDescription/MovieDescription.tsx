import { Component } from 'react';
import { Movie } from '../../utils/interfaces';
import _ from 'lodash';
import './MovieDescription.scss';

interface MovieDescriptionProps {
  movie: Movie;
}
export class MovieDescription extends Component<MovieDescriptionProps> {
  constructor(props: MovieDescriptionProps) {
    super(props);
  }

  render() {
    const movie: Movie = this.props.movie;
    return (
      <div className='MovieDescription'>
        <div className='MovieDescription__leftPanel'>
          <img
            className='MovieDescription__leftPanel__image'
            alt={movie.name}
            src={movie.imageUrl}
          />
        </div>
        <div className='MovieDescription__rightPanel'>
          <h1 className='MovieDescription__rightPanel__title'>{movie.name}</h1>
          <span className='MovieDescription__rightPanel__rating' data-testid='rating'>
            {movie.raiting}
          </span>
          <span className='MovieDescription__rightPanel__genres' data-testid='genres'>
            {movie.genres.map((genre) => genre.replace(/\w+/g, _.capitalize)).join(', ')}
          </span>
          <span className='MovieDescription__rightPanel__year' data-testid='release-year'>
            {movie.releaseYear}
          </span>
          <span className='MovieDescription__rightPanel__length' data-testid='length'>
            {movie.length}
          </span>
          <p className='MovieDescription__rightPanel__description' role='paragraph'>
            {movie.description}
          </p>
        </div>
      </div>
    );
  }
}
