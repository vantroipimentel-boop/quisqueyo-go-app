"use client";

import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Dashboard</h1>

      <button onClick={signOut}>
        Cerrar sesión
      </button>
    </main>
  );
}
