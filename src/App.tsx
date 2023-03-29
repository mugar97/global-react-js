import React, { ChangeEvent, FormEvent } from 'react';

interface CounterProps {
  initialValue: number;
}

interface CounterState {
  value: number;
}

class Counter extends React.Component<CounterProps> {
  state: CounterState;

  constructor(props: CounterProps) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  decrement() {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return React.createElement(
      'div',
      { id: 'counter' },
      React.createElement('button', { onClick: this.decrement }, '-'),
      React.createElement('span', null, `${this.state.value}`),
      React.createElement('button', { onClick: this.increment }, '+')
    );
  }
}

interface SearchFormProps {
  initialSearchQuery: string;
  onSearch: (query: string) => void;
}

interface SearchFormState {
  searchQuery: string;
}

class SearchForm extends React.Component<SearchFormProps> {
  state: SearchFormState;

  constructor(props: SearchFormProps) {
    super(props);
    this.state = {
      searchQuery: props.initialSearchQuery,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  search() {
    this.props.onSearch(this.state.searchQuery);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.search();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id='searchForm'>
        <input
          type='text'
          aria-label='search'
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    );
  }
}

interface GenreFilterProps {
  genres: string[];
  initialGenre: string;
  onSelect: (genre: string) => void;
}

interface GenreFilterState {
  selectedGenre: string;
}

class GenreFilter extends React.Component<GenreFilterProps> {
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

// App
class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initialValue={0} />
        <SearchForm
          initialSearchQuery='My initial query'
          onSearch={(query) => {
            console.log(`search callback: ${query}`);
          }}
        />
        <GenreFilter
          genres={['Documentary', 'Comedy', 'Horror', 'Crime']}
          initialGenre='Comedy'
          onSelect={(genre) => {
            console.log(`genre callback: ${genre}`);
          }}
        />
      </div>
    );
  }
}
export default App;
