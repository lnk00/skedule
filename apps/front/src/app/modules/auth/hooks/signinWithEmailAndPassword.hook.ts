import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../../constants';

export const useSigninWithEmailAndPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSignin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AUTH.signInWithPassword({ email, password }).then((res) => {
      if (
        res.error === null &&
        res.data.user !== null &&
        res.data.session !== null
      ) {
        return navigate('/');
      } else {
        setFailed(true);
      }
    });
  };

  return [
    {
      email,
      password,
      rememberMe,
      failed,
    },
    {
      setEmail,
      setPassword,
      setRememberMe,
      signinWithEmailAndPassword: handleSignin,
    },
  ] as const;
};
