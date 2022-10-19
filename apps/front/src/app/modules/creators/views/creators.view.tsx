import { IdentificationIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useTwitch } from '../../core/hooks/twitch.hook';
import { creatorsAtom } from '../../core/states/twitch.state';

export default function Example() {
  const creators = useAtomValue(creatorsAtom);

  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {creators.map((creator) => (
        <li
          key={creator.name}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {creator.name}
                </h3>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {creator.gameName}
              </p>
            </div>
            <img
              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              src={creator.thumbnail}
              alt=""
            />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href="#"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <IdentificationIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">More infos</span>
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href="#"
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <BookmarkIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Add to favorite</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreatorsProps {}

export function Creators(props: CreatorsProps) {
  const [{ getTopCreators }] = useTwitch();
  const setCreators = useSetAtom(creatorsAtom);

  useEffect(() => {
    const fetchData = async () => {
      const creators = await getTopCreators('language=fr');
      setCreators(creators);
    };

    fetchData().catch((eror) => {
      return;
    });
  }, []);

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-gray-100 rounded-lg py-8">
      <Example></Example>
    </div>
  );
}
