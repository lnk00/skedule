import { Provider } from 'jotai';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Talkr } from 'talkr';
import App from './app/modules/app/views/app.view';
import Login from './app/modules/auth/views/login.view';
import Signup from './app/modules/auth/views/signup.view';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
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
