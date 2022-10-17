import { SkdAlert, SkdButton, SkdInput } from '@skedule/ui';
import { useT } from 'talkr';
import { useSignupWithEmailAndPassword } from '../hooks';

export function Signup() {
  const [
    { email, password, failed },
    { setEmail, setPassword, signupWithEmailAndPassword },
  ] = useSignupWithEmailAndPassword();

  const { T } = useT();

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
            {T('auth.signup.title')}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={(e) => signupWithEmailAndPassword(e)}
            >
              <SkdInput
                label={T('auth.signup.email')}
                value={email}
                onChange={setEmail}
                type="email"
                name="email"
                autocomplete="email"
              ></SkdInput>

              <SkdInput
                label={T('auth.signup.password')}
                value={password}
                onChange={setPassword}
                type="password"
                name="password"
                autocomplete="current-password"
              ></SkdInput>

              {failed && <SkdAlert>{T('auth.signup.failed')}</SkdAlert>}

              <SkdButton>{T('auth.signup.signup')}</SkdButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
