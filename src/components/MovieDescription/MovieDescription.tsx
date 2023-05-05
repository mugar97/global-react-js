import { Component } from 'react';
import { IMovie } from '../../utils/interfaces';
import _ from 'lodash';

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
          <img alt={this.movie.name} src={this.movie.imageUrl} />
        </div>
        <div className='MovieDescription__rightPanel'>
          <h1>{this.movie.name}</h1>
          <span title='genres'>
            {this.movie.genres.map((genre) => _.startCase(genre)).join(', ')}
          </span>
          <span title='rating'>{this.movie.raiting}</span>
          <span title='release-year'>{this.movie.releaseYear}</span>
          <span title='length'>{this.movie.length}</span>
          <p role='paragraph'>{this.movie.description}</p>
        </div>
      </div>
    );
  }
}
