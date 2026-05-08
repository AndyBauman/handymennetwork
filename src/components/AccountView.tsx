import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

type Profile = {
  full_name: string;
  role: "customer" | "handyman" | "admin";
  phone: string | null;
};

export default function AccountView() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) fetchProfile(data.user.id);
      else setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  async function fetchProfile(userId: string) {
    const { data } = await supabase
      .from("profiles")
      .select("full_name, role, phone")
      .eq("id", userId)
      .single();
    setProfile(data);
    setLoading(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-brand-charcoal/60">Loading your account...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-xl mb-6">You are not signed in.</p>
        <a
          href="/signin"
          className="inline-flex min-h-[3.5rem] items-center px-8 rounded-xl bg-brand-amber text-brand-charcoal font-bold text-xl shadow hover:brightness-95"
        >
          Sign in
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-8">
      <div className="rounded-2xl bg-white border-2 border-brand-green/20 p-6">
        <h2 className="font-display text-2xl font-bold text-brand-green">Your profile</h2>
        <dl className="mt-4 space-y-3 text-lg">
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold min-w-[8rem]">Name</dt>
            <dd>{profile?.full_name || user.user_metadata?.full_name || "—"}</dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold min-w-[8rem]">Email</dt>
            <dd>{user.email}</dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold min-w-[8rem]">Account type</dt>
            <dd className="capitalize">{profile?.role || user.user_metadata?.role || "customer"}</dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold min-w-[8rem]">Phone</dt>
            <dd>{profile?.phone || "Not set"}</dd>
          </div>
        </dl>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href="/book"
          className="flex items-center justify-center min-h-[3.5rem] rounded-xl bg-brand-amber text-brand-charcoal font-bold text-lg shadow hover:brightness-95"
        >
          Book a repair
        </a>
        {profile?.role === "handyman" && (
          <a
            href="/handyman"
            className="flex items-center justify-center min-h-[3.5rem] rounded-xl bg-brand-green text-brand-cream font-bold text-lg shadow hover:brightness-110"
          >
            Handyman dashboard
          </a>
        )}
      </div>

      <button
        onClick={handleSignOut}
        className="text-brand-charcoal/50 hover:text-red-600 font-semibold text-lg"
      >
        Sign out
      </button>
    </div>
  );
}
