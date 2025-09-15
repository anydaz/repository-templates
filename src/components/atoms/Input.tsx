import { InputHTMLAttributes, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const input = tv({
  base: 'rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
  variants: {
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
    state: {
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      success: 'border-green-500 focus:border-green-500 focus:ring-green-500',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof input> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, state, fullWidth, className, ...props }, ref) => {
    return <input ref={ref} className={input({ size, state, fullWidth, className })} {...props} />;
  }
);

export default Input;
