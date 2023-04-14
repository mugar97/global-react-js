import React from 'react';
import './GenreSelect.scss';

interface GenreSelectProps {
  genres: string[];
  initialGenre: string;
  onSelect: (genre: string) => void;
}

interface GenreSelectState {
  selectedGenre: string;
}

export class GenreSelect extends React.Component<GenreSelectProps> {
  state: GenreSelectState;

  constructor(props: GenreSelectProps) {
    super(props);
    this.state = {
      selectedGenre: props.initialGenre ? props.initialGenre.toLowerCase() : 'all',
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(genre: string) {
    this.setState({
      selectedGenre: genre,
    });
    this.props.onSelect(genre);
  }

  render() {
    const { genres } = this.props;
    return (
      <>
        <ul className='genreSelect'>
          <li
            key='all'
            className={`${this.state.selectedGenre === 'all' ? 'active' : ''}`}
            onClick={this.handleSelect.bind(null, 'all')}
          >
            ALL
          </li>

          {genres.map((genre) => {
            return (
              <li
                key={genre.toLowerCase()}
                className={`${this.state.selectedGenre === genre.toLowerCase() ? 'active' : ''}`}
                onClick={this.handleSelect.bind(null, genre.toLowerCase())}
              >
                {genre.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default GenreSelect;
