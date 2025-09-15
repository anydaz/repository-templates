import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@/components/atoms/Checkbox';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox option',
  },
};

export const Small: Story = {
  args: {
    label: 'Small checkbox',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large checkbox',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Error state',
    error: true,
  },
};

export const Group: Story = {
  render: () => (
    <div className="space-y-2">
      <Checkbox label="Option 1" name="group" value="1" />
      <Checkbox label="Option 2" name="group" value="2" />
      <Checkbox label="Disabled option" name="group" value="3" disabled />
      <Checkbox label="Error option" name="group" value="4" error />
    </div>
  ),
};
