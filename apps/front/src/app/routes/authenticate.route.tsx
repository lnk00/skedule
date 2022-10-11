import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../services/auth.service';
import { userAtom } from '../states/user.state';

export default function Authenticate() {
  const location = useLocation();
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
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
  });

  return <div>Authenticate</div>;
}
