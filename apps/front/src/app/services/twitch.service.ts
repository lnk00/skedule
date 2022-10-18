import { Creator } from '@skedule/model';
import { environment } from '../../environments/environment';

export class TwitchService {
  async getCreators(query: string, token: string): Promise<Creator[]> {
    const res = await fetch(
      `https://api.twitch.tv/helix/search/channels?query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Client-Id': environment.twitch_client_id,
        },
      }
    );
    const data = await res.json();
    return data.data;
  }

  async getToken() {
    const res = await fetch('https://id.twitch.tv/oauth2/token', {
      body: `client_id=${environment.twitch_client_id}&client_secret=${environment.twitch_secret}&grant_type=client_credentials`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    });
    return res.json();
  }
}
