import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppController } from '../controllers/app.controller';
import Navbar from '../components/navbar.component';

const navigationItems = [
  {
    title: 'Skedule',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Creators',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Discover',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
];

export default function App() {
  const navigate = useNavigate();

  const appController = new AppController();

  useEffect(() => appController.isAuthenticated(navigate));

  return (
    <div className="min-h-full">
      <Navbar appController={appController}></Navbar>
      <div>
        <header className="pt-4 pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header content goes here */}
            <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 xl:gap-x-8">
              {navigationItems.map((item) => (
                <li key={item.title} className="relative">
                  <div className="group aspect-w-10 aspect-h-3 block w-full overflow-hidden rounded-lg bg-indigo-700 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 shadow-xl">
                    <div className="flex items-end py-4 px-6">
                      <h2 className="text-sm font-bold tracking-tight text-white sm:text-xl">
                        <span className="block">{item.title}</span>
                      </h2>
                      <div className="absolute right-6 bottom-4">
                        <img
                          src="https://img.icons8.com/stickers/100/000000/twitch.png"
                          alt="twitch-icon"
                          className="h-12 rotate-12"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <div className="overflow-hidden rounded-lg bg-indigo-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block">Start your free trial today.</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-indigo-200">
                    Ac euismod vel sit maecenas id pellentesque eu sed
                    consectetur. Malesuada adipiscing sagittis vel nulla nec.
                  </p>
                  <a
                    href="#"
                    className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
                  >
                    Sign up for free
                  </a>
                </div>
              </div>
              <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
                <img
                  className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                  src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                  alt="App screenshot"
                />
              </div>
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
  );
}
