import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../../constants';

export const useSignout = () => {
  const navigate = useNavigate();

  const signout = () => {
    AUTH.signOut().then(() => {
      navigate('/login');
    });
  };
  return [signout] as const;
};
