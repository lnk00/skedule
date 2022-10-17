import { BellIcon } from '@heroicons/react/24/outline';
import { UserNavigationItem } from '@skedule/model';
import { SkdIcon, SkdLogo, SkdSearch } from '@skedule/ui';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface SkdUserMenuProps {
  navigationItems: UserNavigationItem[];
  onSignout: () => void;
}

function SkdUserMenu(props: SkdUserMenuProps) {
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

export interface SkdNavbarProps {
  onSignout: () => void;
  navigationItems: UserNavigationItem[];
}

export function SkdNavbar(props: SkdNavbarProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
        <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
          <div className="flex flex-shrink-0 items-center">
            <div className="mx-auto h-10 w-5">
              <SkdLogo></SkdLogo>
            </div>
            <span className="hidden lg:inline font-bold text-xl ml-2">
              Skedule
            </span>
          </div>
        </div>
        <div className="min-w-0 flex-1 md:pl-8 lg:px-0 xl:col-span-8">
          <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
            <SkdSearch />
          </div>
        </div>
        <div className="flex items-center justify-end xl:col-span-2">
          <SkdIcon>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </SkdIcon>
          <SkdUserMenu
            navigationItems={props.navigationItems}
            onSignout={props.onSignout}
          />
        </div>
      </div>
    </div>
  );
}

export default SkdNavbar;
