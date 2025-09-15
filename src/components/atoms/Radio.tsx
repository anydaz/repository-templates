import { InputHTMLAttributes, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const radio = tv({
  slots: {
    wrapper: 'flex items-center',
    input: 'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500',
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
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof radio> {
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, size, disabled, className, ...props }, ref) => {
    const { wrapper, input, label: labelClass } = radio({ size, disabled });

    return (
      <div className={wrapper()}>
        <input
          type="radio"
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

export default Radio;
