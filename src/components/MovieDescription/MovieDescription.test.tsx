import { render } from '@testing-library/react';
import { testMovie } from '../../utils/testData';
import { Movie } from '../../utils/interfaces';
import { MovieDescription } from './MovieDescription';

test('should render movie image source, name, rating, release-year, length and description as passed in in props', () => {
  const { getByRole, getByTestId } = render(<MovieDescription movie={testMovie} />);
  expect(getByRole('img')).toHaveAttribute('src', testMovie.imageUrl);
  expect(getByRole('heading', { level: 1 })).toHaveTextContent(RegExp(`${testMovie.name}`, 'i'));
  expect(getByTestId('rating')).toHaveTextContent(`${testMovie.raiting}`);
  expect(getByTestId('release-year')).toHaveTextContent(`${testMovie.releaseYear}`);
  expect(getByTestId('length')).toHaveTextContent(`${testMovie.length}`);
  expect(getByRole('paragraph')).toHaveTextContent(`${testMovie.description}`);
});

test('should render a Capitalized list of genres', () => {
  const testMovieWithGenres: Movie = {
    ...testMovie,
    genres: ['genre a', 'genre b', 'genre c'],
  };
  const { getByTestId } = render(<MovieDescription movie={testMovieWithGenres} />);
  expect(getByTestId('genres')).toHaveTextContent('Genre A, Genre B, Genre C');
});

test('should render genres with special characters', () => {
  const testMovieWithGenres: Movie = {
    ...testMovie,
    genres: ['genre & character'],
  };
  const { getByTestId } = render(<MovieDescription movie={testMovieWithGenres} />);
  expect(getByTestId('genres')).toHaveTextContent('Genre & Character');
});
