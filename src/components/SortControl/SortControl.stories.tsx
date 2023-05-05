import type { Meta, StoryObj } from '@storybook/react';
import { SortControl } from './SortControl';

const meta = {
  title: 'Controls/SortControl',
  component: SortControl,
} satisfies Meta<typeof SortControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (value) => {
      console.log(value);
    },
  },
};
