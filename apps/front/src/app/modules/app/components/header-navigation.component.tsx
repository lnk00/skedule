// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderNavigationProps {}

export default function HeaderNavigation(props: HeaderNavigationProps) {
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

  return (
    <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 xl:gap-x-8">
      {navigationItems.map((item) => (
        <li key={item.title} className="relative">
          <div className="group aspect-w-10 aspect-h-3 block w-full overflow-hidden rounded-lg bg-indigo-700 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 shadow-xl">
            <div className="flex items-end justify-between py-4 px-6">
              <h2 className="text-sm font-bold tracking-tight text-white md:text-xl">
                <span className="block">{item.title}</span>
              </h2>
              <div className="flex">
                <img
                  src="https://img.icons8.com/stickers/100/000000/overtime.png"
                  alt="twitch-icon"
                  className="h-8"
                />
                <img
                  src="https://img.icons8.com/stickers/100/000000/twitch.png"
                  alt="twitch-icon"
                  className="h-8"
                />
                <img
                  src="https://img.icons8.com/stickers/100/000000/alarm.png"
                  alt="twitch-icon"
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
