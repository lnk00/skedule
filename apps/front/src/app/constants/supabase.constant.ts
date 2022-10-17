import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

export const SUPABASE = createClient(
  'https://xzevyurpyakftjpnjymr.supabase.co',
  environment.supabase_key
);

export const AUTH = SUPABASE.auth;

export const DATABASE = SUPABASE.from;

export const FUNCTION = SUPABASE.functions;
