"use client";

export default function DashboardPage() {
  function logout() {
    window.location.href = "/login";
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Bienvenido a Quisqueya GO 🇩🇴</h1>
      <p>Has iniciado sesión correctamente.</p>

      <button
        onClick={logout}
        style={{ marginTop: "20px", padding: "10px" }}
      >
        Cerrar sesión
      </button>
    </main>
  );
}
