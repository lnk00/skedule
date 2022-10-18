/* eslint-disable @typescript-eslint/no-non-null-assertion */
// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

interface IEnvironment {
  production: boolean;
  supabase_url: string;
  supabase_key: string;
  twitch_client_id: string;
  twitch_secret: string;
}

export const environment: IEnvironment = {
  production: false,
  supabase_url: process.env['NX_SUPABASE_URL']!,
  supabase_key: process.env['NX_SUPABASE_KEY']!,
  twitch_client_id: process.env['NX_TWITCH_CLIENT_ID']!,
  twitch_secret: process.env['NX_TWITCH_SECRET']!,
};
