import { HTMLAttributes, ElementType, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const text = tv({
  base: 'text-gray-900',
  variants: {
    variant: {
      h1: 'text-4xl font-bold sm:text-5xl',
      h2: 'text-3xl font-bold sm:text-4xl',
      h3: 'text-2xl font-bold sm:text-3xl',
      h4: 'text-xl font-bold sm:text-2xl',
      p: 'text-base',
      small: 'text-sm',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'p',
    align: 'left',
    weight: 'normal',
  },
});

export interface TextProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof text> {
  as?: ElementType;
  children: ReactNode;
}

const Text = ({
  as: Component = 'p',
  variant,
  align,
  weight,
  className,
  children,
  ...props
}: TextProps) => {
  return (
    <Component className={text({ variant, align, weight, className })} {...props}>
      {children}
    </Component>
  );
};

export default Text;
