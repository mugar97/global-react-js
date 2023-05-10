import { render } from '@testing-library/react';
import { testMovie } from '../../utils/testData';
import { IMovie } from '../../utils/interfaces';
import { MovieDescription } from './MovieDescription';

test('should render an image', () => {
  const movie: IMovie = {
    ...testMovie,
    imageUrl: 'http//test.com/?file=123',
  };
  const { getByRole } = render(<MovieDescription movie={movie} />);
  expect(getByRole('img')).toHaveAttribute('src', movie.imageUrl);
});

test('should render movie name', () => {
  const { getByRole } = render(<MovieDescription movie={testMovie} />);
  expect(getByRole('heading', { level: 1 })).toHaveTextContent(RegExp(`${testMovie.name}`, 'i'));
});

test('should render a list of genres', () => {
  const testMovieWithGenres: IMovie = {
    ...testMovie,
    genres: ['genre a', 'genre b', 'genre c'],
  };
  const { getByTestId } = render(<MovieDescription movie={testMovieWithGenres} />);
  expect(getByTestId('genres')).toHaveTextContent('Genre A, Genre B, Genre C');
});

test('should render the movie raiting', () => {
  const testMovieWithRaiting: IMovie = {
    ...testMovie,
    raiting: 8.1,
  };
  const { getByTestId } = render(<MovieDescription movie={testMovieWithRaiting} />);
  expect(getByTestId('rating')).toHaveTextContent('8.1');
});

test('should render the movie release year', () => {
  const testMovieWithReleaseYear: IMovie = {
    ...testMovie,
    releaseYear: '2015',
  };
  const { getByTestId } = render(<MovieDescription movie={testMovieWithReleaseYear} />);
  expect(getByTestId('release-year')).toHaveTextContent(testMovieWithReleaseYear.releaseYear);
});

test('should render the movie length', () => {
  const testMovieWithMovieLength: IMovie = {
    ...testMovie,
    length: '2h30m40s',
  };
  const { getByTestId } = render(<MovieDescription movie={testMovieWithMovieLength} />);
  expect(getByTestId('length')).toHaveTextContent('2h30m40s');
});

test('should render the movie description', () => {
  const testMovieWithDescription: IMovie = {
    ...testMovie,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis pharetra sapien. Suspendisse viverra libero lectus, sit amet tempus metus interdum vitae. Pellentesque egestas nunc enim, vel varius neque facilisis aliquet. Aenean ultricies, sem suscipit tincidunt rutrum, tellus ex auctor leo, sed mattis diam odio sit amet tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque id arcu turpis. Pellentesque viverra in sem vel ultricies. Pellentesque vestibulum interdum ipsum non aliquam. Donec a urna in ex elementum ullamcorper.',
  };
  const { getByRole } = render(<MovieDescription movie={testMovieWithDescription} />);
  expect(getByRole('paragraph')).toHaveTextContent(testMovieWithDescription.description);
});
