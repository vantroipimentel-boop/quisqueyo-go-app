import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      
      <h1 className="text-4xl font-bold mb-4 text-center">
        Quisqueya GO 🇩🇴
      </h1>

      <p className="text-lg text-gray-300 mb-10 text-center max-w-md">
        Descubre a qué países puedes emigrar según tu perfil, requisitos reales y oportunidades disponibles.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-sm">
        <Link href="/login" className="w-full">
          <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg text-white font-semibold">
            Iniciar sesión
          </button>
        </Link>

        <Link href="/login" className="w-full">
          <button className="w-full border border-gray-500 hover:bg-gray-800 transition py-3 rounded-lg text-white font-semibold">
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

    </main>
  );
}
