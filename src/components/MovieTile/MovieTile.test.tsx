import { render } from '@testing-library/react';
import { MovieTile } from './MovieTile';
import { Movie } from '../../utils/interfaces';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { testMovie } from '../../utils/testData';

test('should render movie img, name and release year as passed in on props', () => {
  const { getByRole, getByTestId } = render(<MovieTile movie={testMovie} onClick={jest.fn()} />);
  expect(getByRole('img')).toHaveAttribute('src', testMovie.imageUrl);
  expect(getByRole('heading')).toHaveTextContent(RegExp(`${testMovie.name}`, 'i'));
  expect(getByTestId('release-year')).toHaveTextContent(`${testMovie.releaseYear}`);
});

test('should render a capitalized list of genres', () => {
  const testMovieWithGenres: Movie = {
    ...testMovie,
    genres: ['genre a', 'genre b', 'genre c'],
  };
  const { getByTestId } = render(<MovieTile movie={testMovieWithGenres} onClick={jest.fn()} />);
  expect(getByTestId('genres')).toHaveTextContent('Genre A, Genre B, Genre C');
});

test('should render genres with special characters', () => {
  const testMovieWithGenres: Movie = {
    ...testMovie,
    genres: ['genre & character'],
  };
  const { getByTestId } = render(<MovieTile movie={testMovieWithGenres} onClick={jest.fn()} />);
  expect(getByTestId('genres')).toHaveTextContent('Genre & Character');
});

test('should execute a custom callback on click event', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<MovieTile movie={testMovie} onClick={onClick} />);

  act(() => {
    userEvent.click(getByTestId('movie-tile'));
  });
  expect(onClick).toBeCalledTimes(1);
});
