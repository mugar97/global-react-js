import { Component } from 'react';
import { IMovie } from '../../utils/interfaces';
import _ from 'lodash';
import './MovieTile.scss';
import { OverlayMenu } from '../common/OverlayMenu/OverlayMenu';

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

  edit() {}
  delete() {}

  render() {
    return (
      <div
        data-testid='movie-tile'
        className='MovieTile'
        onClick={this.onClick}
        key={this.movie.id}
      >
        <OverlayMenu onEdit={this.edit} onDelete={this.delete}>
          <img className='MovieTile__image' alt={this.movie.name} src={this.movie.imageUrl} />
        </OverlayMenu>
        <h1 className='MovieTile__title'>{this.movie.name}</h1>
        <span data-testid='release-year' className='MovieTile__year'>
          {this.movie.releaseYear}
        </span>
        <span data-testid='genres' className='MovieTile__genres'>
          {this.movie.genres.map((genre) => genre.replace(/\w+/g, _.capitalize)).join(', ')}
        </span>
      </div>
    );
  }
}
