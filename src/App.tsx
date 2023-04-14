import React from 'react';
import './App.scss';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';
import Counter from './components/Counter/Counter';

// App
class App extends React.Component {
  render() {
    return (
      <>
        <Counter initialValue={0} />
        <SearchForm
          initialSearchQuery='My initial query'
          onSearch={
            /* istanbul ignore next */
            (query) => {
              console.log(`search callback: ${query}`);
            }
          }
        />
        <GenreSelect
          genres={['Documentary', 'Comedy', 'Horror', 'Crime']}
          initialGenre='Comedy'
          onSelect={
            /* istanbul ignore next */
            (genre) => {
              console.log(`genre callback: ${genre}`);
            }
          }
        />
      </>
    );
  }
}
export default App;
