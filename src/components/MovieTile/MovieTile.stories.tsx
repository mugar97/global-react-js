import type { Meta, StoryObj } from '@storybook/react';
import { MovieTile } from './MovieTile';
import { testMovie } from '../../utils/testData';
import { IMovie } from '../../utils/interfaces';

const meta = {
  title: 'Controls/MovieTile',
  component: MovieTile,
} satisfies Meta<typeof MovieTile>;

export default meta;

type Story = StoryObj<typeof meta>;

const PULP_FICTION: IMovie = {
  ...testMovie,
  imageUrl:
    'https://s3-alpha-sig.figma.com/img/89fa/22b0/9af0f226591250d0c0dc45e952d8c0a6?Expires=1684713600&Signature=qWkvcB1AEXJbDZlf5rqAwIV2zmaM9~BRY2ULgt4mqKrj~HdoRrONHrPehApkighm-BE1MzqGDmEFgOBfCKhJI1djBn-y8QU5IC6dS0fHUQoOP1GDo4fTH~xY70BrKTWWKmekd6LUOe8-EubalZjNUQ2jB7FnJ9Gi5R~3UzELSZXN5FK~tC26kSv4HTsCc00hRGe3BaFKbHlUqjQP-CN1O2hDI7uPr8OGvseFtZKNWDXt~5yqz9nPfzhknBGu-dz4cXa6z2Au5rw0Kl5KVnRdqHrbxs9UhU4kJFE1NpANnrXknJJh5GEYoastMJ3~G0nywomc7H5hhGq5psdUL~xL1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  name: 'Pulp Fiction',
  releaseYear: '1994',
  genres: ['Action & Adventure'],
};

const BOHEMIAN_RHAPSODY: IMovie = {
  ...testMovie,
  imageUrl:
    'https://s3-alpha-sig.figma.com/img/aa4f/8cf6/f7fefb9582bc23c7847baf1f5f863fb0?Expires=1684713600&Signature=nMcKvkhQzE5aWveQUsBkrHeNNeEIFAtqOCtbgYByznwfEQ0Kymbu-fjQ-UgEekvydbHkFD-PBaeskYRSbMdrNGJY29ve5HZluvZdhueOmpM8-uFBnPhoyzm01xVQ9YKrU1Ua3e172XOd565O4G48ov5oFy-BbE8M4k88h8uwRCkh8ITgnMAz940TeU9vGcAeNBt555DF-WhMrgjNmZPj~hT-miQyxZfpmU-l4zAHmvQbQoMTKYBZ-yJzs3Or3F1CHIOA09pT8iLID2DpYAvahowbLl~zG~tmDSkElRR~yiOned32Ow0BJdOtmLvufoMqfnGvOf2j7KweqyGWtN93WA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  name: 'Bohemian Rhapsody',
  releaseYear: '2003',
  genres: ['Drama', 'Biography', 'Music'],
};

const demoOnClick = () => {
  console.log('Movie clicked!');
};

export const PulpFiction: Story = {
  args: {
    movie: PULP_FICTION,
    onClick: demoOnClick,
  },
};

export const BohemianRhapsody: Story = {
  args: {
    movie: BOHEMIAN_RHAPSODY,
    onClick: demoOnClick,
  },
};
