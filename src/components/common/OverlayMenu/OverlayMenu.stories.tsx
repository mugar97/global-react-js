import type { Meta, StoryObj } from '@storybook/react';
import { OverlayMenu } from './OverlayMenu';

const meta = {
  title: 'Common/OverlayMenu',
  component: OverlayMenu,
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OverlayMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <img alt='img-placeholder' src='https://via.placeholder.com/250x350' />,
    onEdit: () => {
      console.log('Edit');
    },
    onDelete: () => {
      console.log('Delete');
    },
  },
};
