import { render } from '@testing-library/react';
import { MovieTile } from './MovieTile';
import { IMovie } from '../../utils/interfaces';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { testMovie } from '../../utils/testData';

test('should render movie name', () => {
  const { getByRole } = render(<MovieTile movie={testMovie} onClick={() => {}} />);
  expect(getByRole('heading')).toHaveTextContent(RegExp(`${testMovie.name}`, 'i'));
});

test('should render movie release year', () => {
  const { getByTitle } = render(<MovieTile movie={testMovie} onClick={() => {}} />);
  expect(getByTitle('release-year')).toHaveTextContent(`${testMovie.releaseYear}`);
});

test('should render a list of genres', () => {
  const testMovieWithGenres: IMovie = {
    ...testMovie,
    genres: ['genre a', 'genre b', 'genre c'],
  };
  const { getByTitle } = render(<MovieTile movie={testMovieWithGenres} onClick={() => {}} />);
  expect(getByTitle('genres')).toHaveTextContent('Genre A, Genre B, Genre C');
});

test('should render an image', () => {
  const { getByRole } = render(<MovieTile movie={testMovie} onClick={() => {}} />);
  expect(getByRole('img')).toHaveAttribute('src', testMovie.imageUrl);
});

test('should execute a custom callback on click event', () => {
  const onClick = jest.fn();
  const { getByTitle } = render(<MovieTile movie={testMovie} onClick={onClick} />);

  act(() => {
    userEvent.click(getByTitle('movie-tile'));
  });
  expect(onClick).toBeCalledTimes(1);
});