import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const isAuthConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isAuthConfigured) {
  console.warn(
    "Supabase env vars missing. Set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY. Auth is disabled.",
  );
}

/**
 * createClient throws on an empty URL, and these islands are server-rendered during
 * `astro build`, so constructing eagerly makes any env-less build (CI, fresh clone)
 * fail outright. Stay null instead and let callers degrade.
 */
export const supabase: SupabaseClient | null = isAuthConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
