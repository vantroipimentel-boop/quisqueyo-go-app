"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!email || !password) {
      setError("Debes completar todos los campos");
      return;
    }

    // Por ahora solo validamos que no esté vacío
    window.location.href = "/dashboard";
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial", maxWidth: "400px" }}>
      <h1>Iniciar sesión</h1>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }}
      />

      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
      )}

      <button
        onClick={handleLogin}
        style={{ padding: "10px", width: "100%" }}
      >
        Entrar
      </button>
    </main>
  );
}

