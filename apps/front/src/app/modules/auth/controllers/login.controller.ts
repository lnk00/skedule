import { Dispatch, FormEvent, SetStateAction } from 'react';
import { emailPasswordLogin } from '../services/auth.service';

export class LoginController {
  login(
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    setFailed: Dispatch<SetStateAction<boolean>>
  ): void {
    event.preventDefault();
    emailPasswordLogin(email, password).then(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {},
      (_) => setFailed(true)
    );
  }
}
