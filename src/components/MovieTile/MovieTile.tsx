import { Component } from 'react';
import { IMovie } from '../../utils/interfaces';
import _ from 'lodash';

interface MovieTileProps {
  movie: IMovie;
  onClick: () => void;
}

export class MovieTile extends Component<MovieTileProps> {
  movie: IMovie;
  onClick: () => void;
  constructor(props: MovieTileProps) {
    super(props);
    this.movie = props.movie;
    this.onClick = props.onClick;
  }
  render() {
    return (
      <div title='movie-tile' className='MovieTile' onClick={this.onClick} key={this.movie.id}>
        <img alt={this.movie.name} src={this.movie.imageUrl} />
        <h1>{this.movie.name}</h1>
        <span title='release-year'>{this.movie.releaseYear}</span>
        <span title='genres'>
          {this.movie.genres.map((genre) => _.startCase(genre)).join(', ')}
        </span>
      </div>
    );
  }
}
