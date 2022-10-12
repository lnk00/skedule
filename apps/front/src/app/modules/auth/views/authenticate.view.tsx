import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { userAtom } from '../../../states/user.state';
import { AuthenticateController } from '../controllers/authenticate.controller';

export default function Authenticate() {
  const location = useLocation();
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();

  const authenticateController = new AuthenticateController();

  useEffect(() => {
    authenticateController.redirect(location, setUser, navigate);
  });

  return <div>Authenticate</div>;
}
