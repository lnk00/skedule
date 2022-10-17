import { useEffect } from 'react';
import Navbar from '../components/navbar.component';
import HeaderNavigation from '../components/header-navigation.component';
import SkedulePlaceholder from '../components/skedule-placeholder.component';
import { useIsAuthentitcated, useSignout } from '../../auth/hooks';

export function App() {
  const [isAuthenticated] = useIsAuthentitcated();
  const [signout] = useSignout();

  useEffect(() => isAuthenticated());

  return (
    <div className="min-h-full">
      <Navbar onSignout={signout}></Navbar>
      <div>
        <header className="pt-4 pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HeaderNavigation></HeaderNavigation>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SkedulePlaceholder></SkedulePlaceholder>
          </div>
        </main>
      </div>
    </div>
  );
}
