import { SkdButton, SkdCheckbox, SkdInput, SkdLink } from '@skedule/ui';
import { useState } from 'react';
import { LoginController } from '../controllers/login.controller';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const loginController = new LoginController();

  return (
    <div className="h-screen bg-gray-50">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={(e) => loginController.login(e, email, password)}
            >
              <SkdInput
                label="Email address"
                value={email}
                onChange={setEmail}
                type="email"
                name="email"
                autocomplete="email"
              ></SkdInput>

              <SkdInput
                label="Password"
                value={password}
                onChange={setPassword}
                type="password"
                name="password"
                autocomplete="current-password"
              ></SkdInput>

              <div className="flex items-center justify-between">
                <SkdCheckbox
                  label="Remember me"
                  value={rememberMe}
                  onChange={setRememberMe}
                  name="remember-me"
                ></SkdCheckbox>

                <SkdLink link="#">Forgot your password?</SkdLink>
              </div>

              <SkdButton>Sign in</SkdButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
