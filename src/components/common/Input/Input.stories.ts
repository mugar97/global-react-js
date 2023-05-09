import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'Common/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
  args: {
    placeholder: 'https://',
    style: {
      width: 400,
    },
  },
};

export const Value: Story = {
  args: {
    value: 'My favorite movie',
    style: {
      width: 400,
    },
  },
};

export const LabeledInput: Story = {
  args: {
    label: 'Movie URL',
    placeholder: 'http://',
  },
};
