/* eslint-disable no-script-url */
import { useEffect } from 'react';
import { useIsAuthentitcated, useSignout } from '../../auth/hooks';
import { NavigationItem, UserNavigationItem } from '@skedule/model';
import { SkdHeaderNavigation, SkdNavbar } from '@skedule/ui';
import { Outlet } from 'react-router-dom';
import { useRedirect } from '../hooks';

const userNavigationItems: UserNavigationItem[] = [
  { label: 'Settings', href: 'javascript:void(0)' },
  { label: 'Sign out', href: 'javascript:void(0)' },
];

const navigationItems: NavigationItem[] = [
  {
    title: 'Skedule',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    href: '/skedule',
  },
  {
    title: 'Creators',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    href: '/creators',
  },
  {
    title: 'Discover',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    href: '/discover',
  },
];

export function Scaffolder() {
  const [isAuthenticated] = useIsAuthentitcated();
  const [signout] = useSignout();
  const [redirect] = useRedirect();

  useEffect(() => isAuthenticated());
  useEffect(() => redirect(), []);

  return (
    <div className="min-h-full">
      <SkdNavbar
        onSignout={signout}
        navigationItems={userNavigationItems}
      ></SkdNavbar>
      <div>
        <header className="pt-4 pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SkdHeaderNavigation
              navigationItems={navigationItems}
            ></SkdHeaderNavigation>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    </div>
  );
}
