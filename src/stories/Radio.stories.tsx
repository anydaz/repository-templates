import type { Meta, StoryObj } from '@storybook/react';
import Radio from '@/components/atoms/Radio';

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio option',
    name: 'radio-group',
  },
};

export const Small: Story = {
  args: {
    label: 'Small radio',
    size: 'sm',
    name: 'radio-group',
  },
};

export const Large: Story = {
  args: {
    label: 'Large radio',
    size: 'lg',
    name: 'radio-group',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled radio',
    disabled: true,
    name: 'radio-group',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked radio',
    checked: true,
    name: 'radio-group',
  },
};

export const Group: Story = {
  render: () => (
    <div className="space-y-2">
      <Radio label="Option 1" name="group" value="1" />
      <Radio label="Option 2" name="group" value="2" />
      <Radio label="Option 3" name="group" value="3" disabled />
    </div>
  ),
};
