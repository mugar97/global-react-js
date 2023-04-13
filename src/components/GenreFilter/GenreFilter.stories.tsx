import type { Meta, StoryObj } from '@storybook/react';
import GenreFilter from './GenreFilter';

const meta = {
  title: 'Controls/GenreFilter',
  component: GenreFilter,
} satisfies Meta<typeof GenreFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    genres: ['Documentary', 'Comedy', 'Horror', 'Crime'],
    initialGenre: 'Comedy',
    onSelect: () => {},
  },
};
