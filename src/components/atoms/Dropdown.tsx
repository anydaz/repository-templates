import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { tv, VariantProps } from 'tailwind-variants';

const dropdown = tv({
  slots: {
    trigger:
      'inline-flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2',
    menu: 'absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
    item: 'group flex w-full items-center rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
  },
  variants: {
    variant: {
      primary: {
        trigger: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      },
      secondary: {
        trigger: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
      },
      outline: {
        trigger: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
      },
    },
    size: {
      sm: {
        trigger: 'px-3 py-1.5 text-sm',
        item: 'px-3 py-1.5 text-sm',
      },
      md: {
        trigger: 'px-4 py-2 text-base',
        item: 'px-4 py-2 text-base',
      },
      lg: {
        trigger: 'px-6 py-3 text-lg',
        item: 'px-6 py-3 text-lg',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface DropdownItem {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface DropdownProps extends VariantProps<typeof dropdown> {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
}

const Dropdown = ({ trigger, items, variant, size, className }: DropdownProps) => {
  const { trigger: triggerClass, menu: menuClass, item: itemClass } = dropdown({ variant, size });

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={triggerClass({ className })}>{trigger}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={menuClass()}>
          {items.map((item, index) => (
            <Menu.Item key={index} disabled={item.disabled}>
              {({ active }) => (
                <button
                  onClick={item.onClick}
                  className={itemClass({
                    className: active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  })}
                  disabled={item.disabled}
                >
                  {item.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
