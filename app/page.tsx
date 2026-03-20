import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      
      <h1 className="text-4xl font-bold mb-4 text-center">
        Quisqueya GO 🇩🇴
      </h1>

     <p className="text-lg text-gray-300 mb-8 text-center max-w-md">
  Descubre a qué países puedes emigrar según tu perfil, requisitos reales y oportunidades disponibles.
</p>

<div className="flex gap-4">
  <Link href="/login">
    <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold">
      Iniciar sesión
    </button>
  </Link>

  <Link href="/login">
    <button className="border border-gray-500 hover:bg-gray-800 transition px-6 py-3 rounded-lg text-white font-semibold">
      Crear cuenta
    </button>
  </Link>
</div>

    </main>
  );
}
