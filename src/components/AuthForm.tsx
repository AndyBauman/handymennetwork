import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Mode = "signin" | "signup";

export default function AuthForm({ initialMode = "signin" }: { initialMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"customer" | "handyman">("customer");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName, role },
          emailRedirectTo: `${window.location.origin}/account`,
        },
      });
      if (error) {
        setMessage({ type: "error", text: error.message });
      } else {
        setMessage({
          type: "success",
          text: "Check your email for a confirmation link, then sign in.",
        });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage({ type: "error", text: error.message });
      } else {
        window.location.href = "/account";
      }
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="flex rounded-xl overflow-hidden border-2 border-brand-green/20 mb-8">
        <button
          type="button"
          onClick={() => { setMode("signin"); setMessage(null); }}
          className={`flex-1 py-3 font-bold text-lg transition-colors ${
            mode === "signin"
              ? "bg-brand-green text-brand-cream"
              : "bg-white text-brand-charcoal hover:bg-brand-stone"
          }`}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => { setMode("signup"); setMessage(null); }}
          className={`flex-1 py-3 font-bold text-lg transition-colors ${
            mode === "signup"
              ? "bg-brand-green text-brand-cream"
              : "bg-white text-brand-charcoal hover:bg-brand-stone"
          }`}
        >
          Create account
        </button>
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl mb-6 font-semibold ${
            message.type === "error"
              ? "bg-red-50 text-red-700 border border-red-200"
              : "bg-green-50 text-green-700 border border-green-200"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {mode === "signup" && (
          <>
            <div>
              <label htmlFor="fullName" className="block font-semibold text-lg mb-1">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-lg border-2 border-brand-green/20 text-lg focus:border-brand-green focus:outline-none"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block font-semibold text-lg mb-2">I am a...</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setRole("customer")}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-lg border-2 transition-colors ${
                    role === "customer"
                      ? "border-brand-green bg-brand-green text-brand-cream"
                      : "border-brand-green/20 bg-white hover:bg-brand-stone"
                  }`}
                >
                  Homeowner
                </button>
                <button
                  type="button"
                  onClick={() => setRole("handyman")}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-lg border-2 transition-colors ${
                    role === "handyman"
                      ? "border-brand-green bg-brand-green text-brand-cream"
                      : "border-brand-green/20 bg-white hover:bg-brand-stone"
                  }`}
                >
                  Handyman
                </button>
              </div>
            </div>
          </>
        )}

        <div>
          <label htmlFor="email" className="block font-semibold text-lg mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-brand-green/20 text-lg focus:border-brand-green focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-semibold text-lg mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-brand-green/20 text-lg focus:border-brand-green focus:outline-none"
            placeholder={mode === "signup" ? "At least 6 characters" : "Your password"}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full min-h-[3.5rem] rounded-xl bg-brand-amber text-brand-charcoal font-bold text-xl shadow hover:brightness-95 disabled:opacity-50 transition-all"
        >
          {loading
            ? "Please wait..."
            : mode === "signin"
              ? "Sign in"
              : "Create account"}
        </button>
      </form>

      {mode === "signup" && (
        <p className="mt-6 text-center text-brand-charcoal/70">
          By creating an account, you agree to our{" "}
          <a href="/terms" className="underline text-brand-green">Terms of Service</a> and{" "}
          <a href="/privacy" className="underline text-brand-green">Privacy Policy</a>.
        </p>
      )}
    </div>
  );
}
