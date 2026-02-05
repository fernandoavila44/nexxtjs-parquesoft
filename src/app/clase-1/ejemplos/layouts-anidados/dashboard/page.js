import Link from 'next/link';

export const metadata = {
    title: 'Dashboard - Layouts Anidados',
    description: 'Ejemplo de layout anidado de tercer nivel',
};

export default function DashboardPage() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                🎯 Dashboard
            </h1>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-6">
                <h2 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                    🎉 ¡Excelente! Estás viendo 3 niveles de layouts
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Esta página está envuelta por tres layouts diferentes:
                </p>
            </div>

            <div className="space-y-4 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                        Nivel 1: Root Layout
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                        <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                            app/layout.js
                        </code> - Envuelve toda la aplicación con &lt;html&gt; y &lt;body&gt;
                    </p>
                </div>

                <div className="bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-500 p-4">
                    <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-1">
                        Nivel 2: Ejemplos Layout
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                        <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                            app/clase-1/ejemplos/layouts-anidados/layout.js
                        </code> - Borde naranja visible
                    </p>
                </div>

                <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-4">
                    <h3 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                        Nivel 3: Dashboard Layout
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                        <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                            app/clase-1/ejemplos/layouts-anidados/dashboard/layout.js
                        </code> - Borde verde con sidebar
                    </p>
                </div>
            </div>

            {/* Visual Representation */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    📦 Estructura Visual
                </h2>
                <div className="font-mono text-sm space-y-2">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded">
                        <div className="text-blue-900 dark:text-blue-300">
                            &lt;RootLayout&gt;
                        </div>
                        <div className="ml-4 bg-orange-100 dark:bg-orange-900/30 p-3 rounded mt-2">
                            <div className="text-orange-900 dark:text-orange-300">
                                &lt;EjemplosLayout&gt;
                            </div>
                            <div className="ml-4 bg-green-100 dark:bg-green-900/30 p-3 rounded mt-2">
                                <div className="text-green-900 dark:text-green-300">
                                    &lt;DashboardLayout&gt;
                                </div>
                                <div className="ml-4 bg-white dark:bg-gray-800 p-3 rounded mt-2 border-2 border-gray-300 dark:border-gray-600">
                                    <div className="text-gray-900 dark:text-white">
                                        &lt;DashboardPage /&gt; ← Estás aquí
                                    </div>
                                </div>
                                <div className="text-green-900 dark:text-green-300 mt-2">
                                    &lt;/DashboardLayout&gt;
                                </div>
                            </div>
                            <div className="text-orange-900 dark:text-orange-300 mt-2">
                                &lt;/EjemplosLayout&gt;
                            </div>
                        </div>
                        <div className="text-blue-900 dark:text-blue-300 mt-2">
                            &lt;/RootLayout&gt;
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white text-center">
                    <div className="text-3xl font-bold mb-1">3</div>
                    <div className="text-sm text-blue-100">Layouts Activos</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white text-center">
                    <div className="text-3xl font-bold mb-1">1</div>
                    <div className="text-sm text-purple-100">Página Actual</div>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-4 text-white text-center">
                    <div className="text-3xl font-bold mb-1">∞</div>
                    <div className="text-sm text-pink-100">Niveles Posibles</div>
                </div>
            </div>

            {/* Code Example */}
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    💻 Código del Dashboard Layout
                </h2>
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`// app/clase-1/ejemplos/layouts-anidados/dashboard/layout.js

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <aside>
        {/* Sidebar de navegación */}
        <nav>
          <a href="#">Overview</a>
          <a href="#">Analytics</a>
          <a href="#">Settings</a>
        </nav>
      </aside>
      <main>
        {children} {/* Aquí se renderiza la página */}
      </main>
    </div>
  );
}`}
                </pre>
            </div>

            {/* Benefits */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 mb-6">
                <h2 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                    ✨ Beneficios de esta Estructura
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>El sidebar se mantiene visible en todas las páginas del dashboard</li>
                    <li>No se re-renderiza al navegar entre páginas del dashboard</li>
                    <li>El estado del sidebar se preserva (ej: scroll position)</li>
                    <li>Código más organizado y mantenible</li>
                </ul>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
                <Link
                    href="/clase-1/ejemplos/layouts-anidados"
                    className="inline-flex items-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                    ← Volver a Layouts Anidados
                </Link>
                <Link
                    href="/clase-1"
                    className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                    🏠 Volver a Clase 1
                </Link>
            </div>
        </div>
    );
}
