import React from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import GenreFilter from './components/GenreFilter/GenreFilter';
import Counter from './components/Counter/Counter';

// App
class App extends React.Component {
  render() {
    return (
      <div>
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
        <GenreFilter
          genres={['Documentary', 'Comedy', 'Horror', 'Crime']}
          initialGenre='Comedy'
          onSelect={
            /* istanbul ignore next */
            (genre) => {
              console.log(`genre callback: ${genre}`);
            }
          }
        />
      </div>
    );
  }
}
export default App;
