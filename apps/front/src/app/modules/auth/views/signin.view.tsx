import {
  SkdAlert,
  SkdButton,
  SkdCheckbox,
  SkdInput,
  SkdLink,
  SkdLogo,
} from '@skedule/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useT } from 'talkr';
import { SigninController } from '../controllers/signin.controller';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [failed, setFailed] = useState(false);

  const navigate = useNavigate();
  const { T } = useT();

  const loginController = new SigninController();

  return (
    <div className="h-screen bg-gray-50">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="mx-auto h-16 w-8">
            <SkdLogo></SkdLogo>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {T('auth.login.title')}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={(e) =>
                loginController.login(e, email, password, setFailed, navigate)
              }
            >
              <SkdInput
                label={T('auth.login.email')}
                value={email}
                onChange={setEmail}
                type="email"
                name="email"
                autocomplete="email"
              ></SkdInput>

              <SkdInput
                label={T('auth.login.password')}
                value={password}
                onChange={setPassword}
                type="password"
                name="password"
                autocomplete="current-password"
              ></SkdInput>

              {failed && <SkdAlert>{T('auth.login.failed')}</SkdAlert>}

              <div className="flex items-center justify-between">
                <SkdCheckbox
                  label={T('auth.login.remember')}
                  value={rememberMe}
                  onChange={setRememberMe}
                  name="remember-me"
                ></SkdCheckbox>

                <SkdLink link="#">{T('auth.login.reset')}</SkdLink>
              </div>

              <SkdButton>{T('auth.login.signin')}</SkdButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
