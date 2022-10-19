import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../../constants';
import { tokenAtom } from '../../core/states/twitch.state';

export const useSignout = () => {
  const navigate = useNavigate();
  const setTwitchToken = useSetAtom(tokenAtom);

  const signout = () => {
    AUTH.signOut().then(() => {
      setTwitchToken(RESET);
      navigate('/login');
    });
  };
  return [signout] as const;
};
