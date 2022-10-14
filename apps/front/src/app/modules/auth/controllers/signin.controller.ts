import { Dispatch, FormEvent, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { emailPasswordSignin } from '../services/auth.service';

export class SigninController {
  login(
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    setFailed: Dispatch<SetStateAction<boolean>>,
    navigate: NavigateFunction
  ): void {
    event.preventDefault();
    emailPasswordSignin(email, password).then((res) => {
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
  }
}
