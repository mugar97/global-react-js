import type { Meta, StoryObj } from '@storybook/react';
import GenreSelect from './GenreSelect';

const meta = {
  title: 'Controls/GenreSelect',
  component: GenreSelect,
} satisfies Meta<typeof GenreSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyGenreList: Story = {
  args: {
    genres: [],
    initialGenre: '',
    onSelect: () => {},
  },
};

export const GenreSelectedFromList: Story = {
  args: {
    genres: ['Documentary', 'Comedy', 'Horror', 'Crime'],
    initialGenre: 'comedy',
    onSelect: () => {},
  },
};
