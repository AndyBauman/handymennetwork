import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthNav() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setLoggedIn(!!data.user);
      setLoaded(true);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session?.user);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  if (!loaded) return null;

  if (loggedIn) {
    return (
      <a
        href="/account"
        className="inline-flex items-center justify-center min-h-[3rem] px-4 rounded-xl bg-brand-cream/15 text-brand-cream font-bold border border-brand-cream/30 hover:bg-white/10"
      >
        My account
      </a>
    );
  }

  return (
    <a
      href="/signin"
      className="inline-flex items-center justify-center min-h-[3rem] px-4 rounded-xl bg-brand-cream/15 text-brand-cream font-bold border border-brand-cream/30 hover:bg-white/10"
    >
      Sign in
    </a>
  );
}
