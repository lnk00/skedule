/* eslint-disable @typescript-eslint/no-non-null-assertion */
// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

interface IEnvironment {
  production: boolean;
  supabase_url: string;
  supabase_key: string;
}

export const environment: IEnvironment = {
  production: false,
  supabase_url: process.env['NX_SUPABASE_URL']!,
  supabase_key: process.env['NX_SUPABASE_KEY']!,
};
