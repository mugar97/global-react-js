import React, { ChangeEvent, FormEvent } from 'react';

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

export default SearchForm;
