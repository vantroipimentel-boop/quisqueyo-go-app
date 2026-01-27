"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");

    if (!storedEmail) {
      router.push("/login");
    } else {
      setEmail(storedEmail);
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("userEmail");
    router.push("/login");
  }

  if (!email) {
    return null; // evita parpadeos
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Dashboard</h1>
      <p>Bienvenido: <strong>{email}</strong></p>

      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </main>
  );
}
