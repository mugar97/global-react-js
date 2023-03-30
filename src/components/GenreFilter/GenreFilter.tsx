import React from 'react';

interface GenreFilterProps {
  genres: string[];
  initialGenre: string;
  onSelect: (genre: string) => void;
}

interface GenreFilterState {
  selectedGenre: string;
}

export class GenreFilter extends React.Component<GenreFilterProps> {
  state: GenreFilterState;

  constructor(props: GenreFilterProps) {
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
      <div id='genreFilter'>
        <ul>
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
      </div>
    );
  }
}

export default GenreFilter;
