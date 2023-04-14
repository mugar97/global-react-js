import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Common/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
  args: {
    placeholder: 'What do you want to watch?',
    width: 600,
  },
};

export const Value: Story = {
  args: {
    value: 'My favorite movie',
    width: 600,
  },
};
