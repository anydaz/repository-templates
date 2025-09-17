import { ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    variant: {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
      outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps extends VariantProps<typeof button> {
  className?: string;
  children: ReactNode;
}

const Button = ({ children, variant, size, fullWidth, className, ...props }: ButtonProps) => {
  return (
    <button className={button({ variant, size, fullWidth, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
