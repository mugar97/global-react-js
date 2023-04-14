import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Common/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Submit',
  },
};

export const Secondary: Story = {
  args: {
    customStyle: 'secondary',
    label: 'Reset',
  },
};

export const Tertiary: Story = {
  args: {
    customStyle: 'tertiary',
    label: '+ Add movie',
  },
};
