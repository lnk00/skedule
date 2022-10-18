import * as ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Talkr } from 'talkr';
import { Signin, Signup } from './app/modules/auth/views';
import { Onboarding } from './app/modules/onboarding/views';
import { Scaffolder } from './app/modules/core/views/';
import { Skedule } from './app/modules/skedule/views';
import { Discover } from './app/modules/discover/views';
import { Creators } from './app/modules/creators/views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Scaffolder />,
    children: [
      {
        path: 'onboarding',
        element: <Onboarding />,
      },
      {
        path: 'skedule',
        element: <Skedule />,
      },
      {
        path: 'creators',
        element: <Creators />,
      },
      {
        path: 'discover',
        element: <Discover />,
      },
    ],
  },
  {
    path: '/login',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

(async () => {
  const resEn = await fetch('assets/i18n/en.json');
  const en = await resEn.json();

  const resFr = await fetch('assets/i18n/fr.json');
  const fr = await resFr.json();

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <StrictMode>
      <Talkr languages={{ en, fr }} defaultLanguage="en">
        <Provider>
          <RouterProvider router={router} />
        </Provider>
      </Talkr>
    </StrictMode>
  );
})();
