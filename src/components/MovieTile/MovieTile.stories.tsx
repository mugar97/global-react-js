import type { Meta, StoryObj } from '@storybook/react';
import { MovieTile } from './MovieTile';
import { PULP_FICTION, BOHEMIAN_RHAPSODY } from './../../utils/testData';

const meta = {
  title: 'Movie/MovieTile',
  component: MovieTile,
} satisfies Meta<typeof MovieTile>;

export default meta;

type Story = StoryObj<typeof meta>;

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
