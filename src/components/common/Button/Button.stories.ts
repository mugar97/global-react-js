import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Common/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

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
