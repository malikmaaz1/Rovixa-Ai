"use client";

import {
  createContext,
  FormEvent,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";

const AUTH_KEY = "rovixaai-dashboard-auth";

const DashboardAuthContext = createContext<{ logout: () => void }>({
  logout: () => undefined,
});

export function useDashboardLogout() {
  return useContext(DashboardAuthContext).logout;
}

export function DashboardAuthGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const isLogin = pathname === "/dashboard/login";

  useEffect(() => {
    setAuthed(window.localStorage.getItem(AUTH_KEY) === "1");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (!authed && !isLogin) router.replace("/dashboard/login");
    if (authed && isLogin) router.replace("/dashboard");
  }, [ready, authed, isLogin, router]);

  function login() {
    window.localStorage.setItem(AUTH_KEY, "1");
    setAuthed(true);
    router.replace("/dashboard");
  }

  function logout() {
    window.localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    router.replace("/dashboard/login");
  }

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy-950 text-sm text-slate-400">
        Loading command center...
      </div>
    );
  }

  if (isLogin) {
    return <LoginScreen onLogin={login} />;
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy-950 text-sm text-slate-400">
        Redirecting to login...
      </div>
    );
  }

  return (
    <DashboardAuthContext.Provider value={{ logout }}>
      {children}
    </DashboardAuthContext.Provider>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "");
    const password = String(data.get("password") || "");

    if (email === "admin@rovixa.ai" && password === "rovixaai") {
      onLogin();
      return;
    }

    setError("Use admin@rovixa.ai / rovixaai for the demo.");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-950 px-4">
      <div className="w-full max-w-md rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 shadow-panel">
        <div className="mb-6 flex items-center gap-3">
          <BrandLogo variant="icon" className="h-11 w-11" />
          <div>
            <p className="text-lg font-semibold text-white">RovixaAI Admin</p>
            <p className="text-xs text-slate-500">Dashboard access</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-slate-300">
            <span className="mb-2 block font-medium text-white">Email</span>
            <input
              name="email"
              type="email"
              required
              defaultValue="admin@rovixa.ai"
              className="w-full rounded-2xl border border-white/10 bg-navy-950/70 px-4 py-3 text-sm text-white outline-none focus:border-brand-400/40"
            />
          </label>
          <label className="block text-sm text-slate-300">
            <span className="mb-2 block font-medium text-white">Password</span>
            <input
              name="password"
              type="password"
              required
              defaultValue="rovixaai"
              className="w-full rounded-2xl border border-white/10 bg-navy-950/70 px-4 py-3 text-sm text-white outline-none focus:border-brand-400/40"
            />
          </label>
          {error ? <p className="text-sm text-neutral-300">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-neutral-200"
          >
            Sign in to dashboard
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-500">
          Demo credentials are prefilled for local access.
        </p>
      </div>
    </div>
  );
}
