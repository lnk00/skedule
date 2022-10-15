/* eslint-disable no-script-url */
import { Menu, Transition } from '@headlessui/react';
import { UserNavigationItem } from '@skedule/model';
import { Fragment } from 'react';
import { classNames } from '../../../helpers';

export interface UserMenuProps {
  navigationItems: UserNavigationItem[];
  onSignout: () => void;
}

export function UserMenu(props: UserMenuProps) {
  return (
    <Menu as="div" className="relative ml-5 flex-shrink-0">
      <div>
        <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {props.navigationItems.map((item) => (
            <Menu.Item key={item.label}>
              {({ active }) => (
                <a
                  href={item.href}
                  onClick={props.onSignout}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block py-2 px-4 text-sm text-gray-700'
                  )}
                >
                  {item.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
