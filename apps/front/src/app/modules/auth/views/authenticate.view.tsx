import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { userAtom } from '../../../states/user.state';
import { AuthenticateController } from '../controllers/authenticate.controller';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

export default function Authenticate() {
  const location = useLocation();
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();

  const authenticateController = new AuthenticateController();

  useEffect(() => {
    authenticateController.redirect(location, setUser, navigate);
  });

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
              We are doing our best to safely authenticate you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
