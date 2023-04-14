import type { StoryObj } from '@storybook/react';
import Counter from './Counter';

const meta = {
  title: 'Misc/Counter',
  component: Counter,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValue: 43,
  },
};
