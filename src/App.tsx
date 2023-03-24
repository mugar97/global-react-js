import React, { ChangeEvent, KeyboardEvent } from "react";

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
  }

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return React.createElement(
      "div",
      { id: "counter" },
      React.createElement("button", { onClick: this.decrement }, `+`),
      React.createElement("span", null, `${this.state.value}`),
      React.createElement("button", { onClick: this.increment }, `+`)
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
  }

  search = () => {
    this.props.onSearch(this.state.searchQuery);
  };

  change = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  keyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      this.search();
    }
  };

  render() {
    return (
      <div id="searchForm">
        <input
          type="text"
          aria-label="search"
          value={this.state.searchQuery}
          onChange={this.change}
          onKeyDown={this.keyDown}
        />
        <button type="submit" onClick={this.search}>
          Search
        </button>
      </div>
    );
  }
}

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string;
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
      selectedGenre: props.selectedGenre
        ? props.selectedGenre.toLowerCase()
        : "all",
    };
  }

  select = (genre: string) => {
    this.setState({
      selectedGenre: genre,
    });
    this.props.onSelect(genre);
  };

  render() {
    const { genres } = this.props;
    return (
      <div id="genreFilter">
        <ul>
          <li
            key="all"
            className={`${this.state.selectedGenre === "all" ? "active" : ""}`}
            onClick={() => this.select("all")}
          >
            ALL
          </li>

          {genres.map((genre) => {
            return (
              <li
                key={genre.toLowerCase()}
                className={`${
                  this.state.selectedGenre === genre.toLowerCase()
                    ? "active"
                    : ""
                }`}
                onClick={() => this.select(genre.toLowerCase())}
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
          initialSearchQuery="My initial query"
          onSearch={(query) => {
            console.log(`search callback: ${query}`);
          }}
        />
        <GenreFilter
          genres={["Documentary", "Comedy", "Horror", "Crime"]}
          selectedGenre="Comedy"
          onSelect={(genre) => {
            console.log(`genre callback: ${genre}`);
          }}
        />
      </div>
    );
  }
}
export default App;
