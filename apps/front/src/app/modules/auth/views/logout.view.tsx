import { InformationCircleIcon } from '@heroicons/react/20/solid';
import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useEffect } from 'react';
import { userAtom } from '../../../states/user.state';
import { logout } from '../services/auth.service';

export default function Logout() {
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    setUser(RESET);
    logout();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-md bg-blue-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <InformationCircleIcon
              className="h-5 w-5 text-blue-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-blue-700">
              We are doing our best to log you out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
