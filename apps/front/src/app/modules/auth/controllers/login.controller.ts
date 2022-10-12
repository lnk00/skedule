import { FormEvent } from 'react';
import { emailPasswordLogin } from '../services/auth.service';

export class LoginController {
  login(
    event: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ): void {
    event.preventDefault();
    emailPasswordLogin(email, password);
  }
}
