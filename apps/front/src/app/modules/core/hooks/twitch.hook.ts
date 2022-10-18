import { useAtom, useSetAtom } from 'jotai';
import { TWITCH } from '../../../constants';
import { creatorsAtom, tokenAtom } from '../states/twitch.state';

export const useTwitch = () => {
  const setCreators = useSetAtom(creatorsAtom);
  const [token, setToken] = useAtom(tokenAtom);

  const getCreators = async (query: string) => {
    if (!token) {
      const res = await TWITCH.getToken();
      setToken(res.access_token);
      return TWITCH.getCreators(query, res.access_token).then((creators) => {
        setCreators(creators);
        return creators;
      });
    }
    return TWITCH.getCreators(query, token).then((creators) => {
      setCreators(creators);
      return creators;
    });
  };

  return [{ getCreators }] as const;
};
