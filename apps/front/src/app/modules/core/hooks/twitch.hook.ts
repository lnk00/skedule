import { Creator } from '@skedule/model';
import { useAtom } from 'jotai';
import { TWITCH } from '../../../constants';
import { tokenAtom } from '../states/twitch.state';

export const useTwitch = () => {
  const [token, setToken] = useAtom(tokenAtom);

  const tokenWrapper = async <Type>(
    cb: (query: string, token: string) => Promise<Type>,
    query: string
  ) => {
    if (!token) {
      const res = await TWITCH.getToken();
      setToken(res.access_token);
      return cb(query, res.access_token);
    } else {
      return cb(query, token);
    }
  };

  const getTopCreators = async (query: string) => {
    const isLast = (idx: number, streams: any[]) => {
      return idx !== streams.length - 1 ? '&' : '';
    };

    const topCreators: Creator[] = [];
    const topStreams: any[] = await tokenWrapper(TWITCH.getTopStreams, query);
    const q = topStreams.reduce(
      (acc, stream, idx, streams) =>
        acc + `id=${stream.user_id}${isLast(idx, streams)}`,
      '?'
    );
    const topUser: any[] = await tokenWrapper(TWITCH.getUserById, q);

    topStreams.forEach((stream) => {
      const user = topUser.find((user) => user.id == stream.user_id);
      if (user) {
        topCreators.push({
          name: user.display_name,
          gameName: stream.game_name,
          thumbnail: user.profile_image_url,
          isLive: true,
        });
      }
    });

    return topCreators;
  };

  return [{ getTopCreators }] as const;
};
