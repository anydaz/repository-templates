import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '@/components/atoms/Dropdown';

const meta = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { label: 'Edit', onClick: () => console.log('Edit clicked') },
  { label: 'Delete', onClick: () => console.log('Delete clicked') },
  { label: 'Share', onClick: () => console.log('Share clicked') },
];

export const Primary: Story = {
  args: {
    trigger: 'Options',
    items: defaultItems,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    trigger: 'Options',
    items: defaultItems,
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    trigger: 'Options',
    items: defaultItems,
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    trigger: 'Small',
    items: defaultItems,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    trigger: 'Large',
    items: defaultItems,
    size: 'lg',
  },
};

export const WithDisabledItems: Story = {
  args: {
    trigger: 'Options',
    items: [...defaultItems, { label: 'Disabled Option', onClick: () => {}, disabled: true }],
  },
};
