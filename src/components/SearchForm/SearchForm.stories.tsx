import type { Meta, StoryObj } from '@storybook/react';

import SearchForm from './SearchForm';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Controls/SearchForm',
  component: SearchForm,
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    initialSearchQuery: '',
    onSearch: () => {},
    placeholder: 'What do you want to watch?',
  },
};
