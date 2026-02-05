import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={37}
              priority
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Curso de Next.js
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Aprende Next.js desde cero con ejemplos prácticos y explicaciones detalladas
          </p>
        </header>

        {/* Classes Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            📚 Clases Disponibles
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Clase 1 */}
            <Link href="/clase-1">
              <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer h-full">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
                  <div className="text-4xl mb-2">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">Clase 1</h3>
                  <p className="text-blue-100">Fundamentos de Next.js</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Contenido:
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Sistema de rutas basado en archivos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Layouts y componentes compartidos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Server-Side Rendering (SSR)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Static Site Generation (SSG)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>Ejemplos prácticos interactivos</span>
                    </li>
                  </ul>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                      Comenzar →
                    </span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">
                      Disponible
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Placeholder for future classes */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-600 opacity-60">
              <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-6 text-white">
                <div className="text-4xl mb-2">🔒</div>
                <h3 className="text-2xl font-bold mb-2">Clase 2</h3>
                <p className="text-gray-100">Próximamente</p>
              </div>
              <div className="p-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Más contenido educativo estará disponible pronto...
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-600 opacity-60">
              <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-6 text-white">
                <div className="text-4xl mb-2">🔒</div>
                <h3 className="text-2xl font-bold mb-2">Clase 3</h3>
                <p className="text-gray-100">Próximamente</p>
              </div>
              <div className="p-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Más contenido educativo estará disponible pronto...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            ✨ Características del Curso
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Explicaciones Claras
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Conceptos explicados de forma simple y directa
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Ejemplos Prácticos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Código funcional que puedes probar y modificar
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Diseño Moderno
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Interfaz atractiva y fácil de navegar
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-4">
            Construido con Next.js {new Date().getFullYear()}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Documentación
            </a>
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Learn Next.js
            </a>
            <a
              href="https://github.com/vercel/next.js"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
