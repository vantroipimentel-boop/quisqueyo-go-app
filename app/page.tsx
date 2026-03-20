import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Quisqueya GO 🇩🇴
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-300 mb-10 text-center max-w-md">
        Descubre a qué países puedes emigrar según tu perfil, requisitos reales y oportunidades disponibles.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/login">
          <button className="min-w-[180px] bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold">
            Iniciar sesión
          </button>
        </Link>

        <Link href="/login">
          <button className="min-w-[180px] border border-gray-500 hover:bg-gray-800 transition px-6 py-3 rounded-lg text-white font-semibold">
            Crear cuenta
          </button>
        </Link>
      </div>

      {/* Feature preview */}
      <div className="mt-16 text-center max-w-md">
        <p className="text-gray-400 text-sm">
          ✔ Análisis personalizado <br />
          ✔ Requisitos migratorios reales <br />
          ✔ Mejores países según tu perfil
        </p>
      </div>

      {/* How it works */}
      <div className="mt-16 text-center max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Cómo funciona
        </h2>

        <div className="text-gray-400 text-sm space-y-2">
          <p>1. Responde unas preguntas rápidas</p>
          <p>2. Analizamos tu perfil</p>
          <p>3. Te mostramos los mejores países para emigrar</p>
        </div>
      </div>

    </main>
  );
}
