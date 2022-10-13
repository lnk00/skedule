import { Dispatch, FormEvent, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { emailPasswordSignup } from '../services/auth.service';

export class SignupController {
  signup(
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    setFailed: Dispatch<SetStateAction<boolean>>,
    navigate: NavigateFunction
  ): void {
    event.preventDefault();
    emailPasswordSignup(email, password).then((res) => {
      if (res.error === null) {
        navigate('/');
      } else {
        setFailed(true);
      }
    });
  }
}
