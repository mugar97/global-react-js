import { Component } from 'react';
import { IMovie } from '../../utils/interfaces';
import _ from 'lodash';
import './MovieDescription.scss';

interface MovieDescriptionProps {
  movie: IMovie;
}
export class MovieDescription extends Component<MovieDescriptionProps> {
  movie: IMovie;
  constructor(props: MovieDescriptionProps) {
    super(props);
    this.movie = props.movie;
  }

  render() {
    return (
      <div className='MovieDescription'>
        <div className='MovieDescription__leftPanel'>
          <img
            className='MovieDescription__leftPanel__image'
            alt={this.movie.name}
            src={this.movie.imageUrl}
          />
        </div>
        <div className='MovieDescription__rightPanel'>
          <h1 className='MovieDescription__rightPanel__title'>{this.movie.name}</h1>
          <span className='MovieDescription__rightPanel__rating' title='rating'>
            {this.movie.raiting}
          </span>
          <span className='MovieDescription__rightPanel__genres' title='genres'>
            {this.movie.genres.map((genre) => genre.replace(/\w+/g, _.capitalize)).join(', ')}
          </span>
          <span className='MovieDescription__rightPanel__year' title='release-year'>
            {this.movie.releaseYear}
          </span>
          <span className='MovieDescription__rightPanel__length' title='length'>
            {this.movie.length}
          </span>
          <p className='MovieDescription__rightPanel__description' role='paragraph'>
            {this.movie.description}
          </p>
        </div>
      </div>
    );
  }
}
