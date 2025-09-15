import { InputHTMLAttributes, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const checkbox = tv({
  slots: {
    wrapper: 'flex items-center',
    input: 'rounded border-gray-300 text-blue-600 focus:ring-blue-500',
    label: 'ml-2 block text-gray-700',
  },
  variants: {
    size: {
      sm: {
        input: 'h-3 w-3',
        label: 'text-sm',
      },
      md: {
        input: 'h-4 w-4',
        label: 'text-base',
      },
      lg: {
        input: 'h-5 w-5',
        label: 'text-lg',
      },
    },
    disabled: {
      true: {
        wrapper: 'opacity-50 cursor-not-allowed',
        input: 'cursor-not-allowed',
        label: 'cursor-not-allowed',
      },
    },
    error: {
      true: {
        input: 'border-red-500 focus:ring-red-500',
        label: 'text-red-500',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkbox> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, size, disabled, error, className, ...props }, ref) => {
    const { wrapper, input, label: labelClass } = checkbox({ size, disabled, error });

    return (
      <div className={wrapper()}>
        <input
          type="checkbox"
          ref={ref}
          className={input({ className })}
          disabled={disabled}
          {...props}
        />
        {label && <label className={labelClass()}>{label}</label>}
      </div>
    );
  }
);

export default Checkbox;
