import { NavigateFunction } from 'react-router-dom';
import { getSession, signout } from '../../auth/services/auth.service';

export class AppController {
  isAuthenticated(navigate: NavigateFunction) {
    getSession().then((session) => {
      if (session.data.session === null) {
        return navigate('/login');
      }
    });
  }

  signout(navigate: NavigateFunction) {
    signout().then(() => {
      navigate('/login');
    });
  }
}
