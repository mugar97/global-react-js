import { Component } from 'react';
import { Movie } from '../../utils/interfaces';
import _ from 'lodash';
import './MovieTile.scss';
import { OverlayMenu } from '../common/OverlayMenu/OverlayMenu';

interface MovieTileProps {
  movie: Movie;
  onClick: () => void;
}

export class MovieTile extends Component<MovieTileProps> {
  onClick: () => void;
  constructor(props: MovieTileProps) {
    super(props);
    this.onClick = props.onClick;
  }

  /* istanbul ignore next */
  edit() {
    console.log('edit');
  }
  /* istanbul ignore next */
  delete() {
    console.log('delete');
  }

  render() {
    const movie: Movie = this.props.movie;
    return (
      <div data-testid='movie-tile' className='MovieTile' onClick={this.onClick} key={movie.id}>
        <OverlayMenu onEdit={this.edit} onDelete={this.delete}>
          <img className='MovieTile__image' alt={movie.name} src={movie.imageUrl} />
        </OverlayMenu>
        <h1 className='MovieTile__title'>{movie.name}</h1>
        <span data-testid='release-year' className='MovieTile__year'>
          {movie.releaseYear}
        </span>
        <span data-testid='genres' className='MovieTile__genres'>
          {movie.genres.map((genre) => genre.replace(/\w+/g, _.capitalize)).join(', ')}
        </span>
      </div>
    );
  }
}
