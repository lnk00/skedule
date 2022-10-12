import { Location, NavigateFunction } from 'react-router-dom';
import { auth } from '../services/auth.service';

export class AuthenticateController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  redirect(location: Location, setUser: any, navigate: NavigateFunction) {
    auth.parseHash({ hash: location.hash }, (err, data) => {
      if (!err && data?.accessToken) {
        auth.client.userInfo(data?.accessToken, (err, res) => {
          if (!err) {
            setUser({
              email: res.email,
              picture: res.picture,
              access_token: data?.accessToken,
            });
            navigate('/');
          } else {
            navigate('/login');
          }
        });
      }
    });
  }
}
