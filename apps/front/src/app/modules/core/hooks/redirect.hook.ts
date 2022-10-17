import { useLocation, useNavigate } from 'react-router-dom';

export const useRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = () => {
    if (location.pathname === '/') {
      navigate('/onboarding');
    }
  };
  return [redirect] as const;
};
