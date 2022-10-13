import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environment';

const supabase = createClient(
  'https://xzevyurpyakftjpnjymr.supabase.co',
  environment.supabase_key
);

export const emailPasswordSignup = async (email: string, password: string) => {
  return supabase.auth.signUp({ email, password });
};

export const emailPasswordSignin = (email: string, password: string) => {
  return supabase.auth.signInWithPassword({ email, password });
};

export const signout = async () => {
  return supabase.auth.signOut();
};

export const getSession = () => {
  return supabase.auth.getSession();
};
