import React, { ChangeEvent, ComponentProps, FormEvent } from 'react';
import { Button } from '../common/Button/Button';
import { Input } from '../common/Input/Input';
import './SearchForm.scss';

interface SearchFormProps extends ComponentProps<'input'> {
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
      <form onSubmit={this.handleSubmit} className='searchForm'>
        <Input
          type='text'
          aria-label='search'
          value={this.state.searchQuery}
          onChange={this.handleChange}
          {...this.props}
        />
        <Button customStyle='primary' label='Search' type='submit' />
      </form>
    );
  }
}

export default SearchForm;
