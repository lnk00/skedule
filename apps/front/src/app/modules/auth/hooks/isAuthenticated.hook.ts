import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../../constants';

export const useIsAuthentitcated = () => {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    AUTH.getSession().then((session) => {
      if (session.data.session === null) {
        return navigate('/login');
      }
    });
  };
  return [isAuthenticated] as const;
};
