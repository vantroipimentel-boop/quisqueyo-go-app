"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin() {
    if (!email || !password) {
      alert("Por favor llena todos los campos");
      return;
    }

    // guardamos el email (temporalmente)
    localStorage.setItem("userEmail", email);

    router.push("/dashboard");
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Iniciar sesión</h1>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <button onClick={handleLogin}>Entrar</button>
    </main>
  );
}


