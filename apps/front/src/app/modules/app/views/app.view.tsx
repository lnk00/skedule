import { useEffect } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { AppController } from '../controllers/app.controller';
import { SkdIcon, SkdSearch } from '@skedule/ui';
import UserMenu from '../components/user-menu..component';

export default function App() {
  const navigate = useNavigate();

  const appController = new AppController();

  useEffect(() => appController.isAuthenticated(navigate));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
        <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
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
          <UserMenu onSignout={appController.signout.bind(null, navigate)} />
        </div>
      </div>
    </div>
  );
}
