import type { Meta, StoryObj } from '@storybook/react';
import { MovieDescription } from './MovieDescription';
import { PULP_FICTION, BOHEMIAN_RHAPSODY } from './../../utils/testData';

const meta = {
  title: 'Movie/MovieDescription',
  component: MovieDescription,
} satisfies Meta<typeof MovieDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PulpFiction: Story = {
  args: {
    movie: PULP_FICTION,
  },
};

export const BohemianRhapsody: Story = {
  args: {
    movie: BOHEMIAN_RHAPSODY,
  },
};
