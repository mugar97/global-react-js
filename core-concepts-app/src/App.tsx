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
            value: props.initialValue
        };
    }

    increment = () => {
        this.setState({ value: this.state.value + 1 });
    }

    decrement = () => {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return React.createElement("div" , { id: "counter" } ,
            React.createElement("button", { onClick: this.decrement } , `+`),
            React.createElement("span", null , `${ this.state.value }`),
            React.createElement("button", { onClick: this.increment } , `+`)
        );
    }
}


interface SearchFormProps {
    initialSearchQuery: string,
    onSearch: (query: string) => void
}

interface SearchFormState {
    searchQuery: string
}

class SearchForm extends React.Component<SearchFormProps> {
    state: SearchFormState;

    constructor(props: SearchFormProps) {
        super(props);
        this.state = {
            searchQuery: props.initialSearchQuery
        }
    }

    search = () => { 
        this.props.onSearch(this.state.searchQuery); 
    }

    change = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    keyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
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
                <button type="submit" onClick={this.search}>Search</button>
            </div>
        );
    }
}

interface GenreSelectProps {
    genres: string[],
    selectedGenre: string,
    onSelect: (genre: string) => void
}

interface GenreSelectState {
    activeGenre: string
}

class GenreSelect extends React.Component<GenreSelectProps> {
    state: GenreSelectState;

    constructor(props: GenreSelectProps) {
        super(props);
        this.state = {
            activeGenre: props.selectedGenre.toLowerCase()
        };
    }

    select = () => {
        this.props.onSelect(this.state.activeGenre)
    }

    render() {
        const { genres, selectedGenre } = this.props;
        return (
            <div id="genre">
                <label htmlFor="genre-select">Genre:</label>
                <select
                    id="genre-select"
                    defaultValue={selectedGenre.toLowerCase()}
                >
                    {genres.map((genre, key) => {
                        return (
                            <option
                                value={genre.toLowerCase()}
                                key={key}
                            >{genre}</option>
                        );
                    })}
                </select>
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
            <SearchForm initialSearchQuery="My initial query" onSearch={(query)=>{console.log(`search callback: ${query}`)}}/>
            <GenreSelect genres={["Crime", "Documentary", "Horror", "Comedy"]} selectedGenre="Comedy" onSelect={(genre)=>{console.log(`genre callback: ${genre}`)}}/>
        </div>
       );
    }
}
export default App;
