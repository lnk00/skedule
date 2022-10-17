import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../../constants';

export const useSignupWithEmailAndPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState(false);

  const handleSignin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AUTH.signUp({ email, password }).then((res) => {
      if (res.error === null) {
        navigate('/');
      } else {
        setFailed(true);
      }
    });
  };

  return [
    {
      email,
      password,
      failed,
    },
    {
      setEmail,
      setPassword,
      signupWithEmailAndPassword: handleSignin,
    },
  ] as const;
};
