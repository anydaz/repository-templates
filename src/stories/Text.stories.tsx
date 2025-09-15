import type { Meta, StoryObj } from '@storybook/react';
import Text from '@/components/atoms/Text';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile Text component that supports multiple variants, alignments, and weights.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'small'],
      description: 'The variant determines the text style and semantic HTML element',
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label'],
      description: 'The HTML element to render',
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    children: {
      control: 'text',
      description: 'The content to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children:
      'This is a paragraph of text that demonstrates the default text style. It shows how the component handles longer content and maintains readability.',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'Small text for fine print or less important information',
  },
};

export const CenteredText: Story = {
  args: {
    align: 'center',
    children: 'This text is center aligned',
  },
};

export const RightAlignedText: Story = {
  args: {
    align: 'right',
    children: 'This text is right aligned',
  },
};

export const BoldText: Story = {
  args: {
    weight: 'bold',
    children: 'This text is bold',
  },
};

export const SemiboldText: Story = {
  args: {
    weight: 'semibold',
    children: 'This text is semibold',
  },
};

export const MediumText: Story = {
  args: {
    weight: 'medium',
    children: 'This text uses medium weight',
  },
};

export const CustomElement: Story = {
  args: {
    as: 'span',
    children: 'This text renders as a span element',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Sample text',
  },
  render: (args) => (
    <div className="space-y-4">
      <Text {...args} variant="h1">
        Heading 1
      </Text>
      <Text {...args} variant="h2">
        Heading 2
      </Text>
      <Text {...args} variant="h3">
        Heading 3
      </Text>
      <Text {...args} variant="h4">
        Heading 4
      </Text>
      <Text {...args} variant="p">
        Regular paragraph text
      </Text>
      <Text {...args} variant="small">
        Small text
      </Text>
    </div>
  ),
  parameters: {
    controls: {
      exclude: ['variant'],
    },
  },
};

export const AllWeights: Story = {
  args: {
    children: 'Sample text',
  },
  render: (args) => (
    <div className="space-y-4">
      <Text {...args} weight="normal">
        Normal weight text
      </Text>
      <Text {...args} weight="medium">
        Medium weight text
      </Text>
      <Text {...args} weight="semibold">
        Semibold weight text
      </Text>
      <Text {...args} weight="bold">
        Bold weight text
      </Text>
    </div>
  ),
  parameters: {
    controls: {
      exclude: ['weight'],
    },
  },
};

export const AllAlignments: Story = {
  args: {
    children: 'Sample text',
  },
  render: (args) => (
    <div className="space-y-4 w-[400px]">
      <Text {...args} align="left">
        Left aligned text
      </Text>
      <Text {...args} align="center">
        Center aligned text
      </Text>
      <Text {...args} align="right">
        Right aligned text
      </Text>
    </div>
  ),
  parameters: {
    controls: {
      exclude: ['align'],
    },
  },
};
