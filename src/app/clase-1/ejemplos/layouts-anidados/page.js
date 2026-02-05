import Link from 'next/link';

export const metadata = {
    title: 'Layouts Anidados - Clase 1',
    description: 'Aprende a crear layouts jerárquicos en Next.js',
};

export default function LayoutsAnidadosPage() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
            <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    📐 Layouts Anidados
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Crea jerarquías de layouts compartidos
                </p>
            </header>

            {/* Explicación */}
            <section className="mb-8">
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 mb-6">
                    <h2 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                        ¿Qué son los Layouts Anidados?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Los layouts pueden anidarse para crear jerarquías de UI compartida.
                        Cada nivel puede tener su propio layout que envuelve a sus páginas hijas.
                    </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-6">
                    <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                        🔍 Observa esta página
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Esta página está envuelta por <strong>dos layouts</strong>:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-3">
                        <li><strong>Root Layout</strong> (app/layout.js) - Envuelve toda la aplicación</li>
                        <li><strong>Ejemplos Layout</strong> (app/clase-1/ejemplos/layouts-anidados/layout.js) - Envuelve esta sección</li>
                    </ol>
                </div>
            </section>

            {/* Estructura Visual */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    🏗️ Estructura de Layouts
                </h2>

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-4">
                    <pre className="text-sm overflow-x-auto">
                        <code className="text-gray-800 dark:text-gray-200">
                            {`app/
├── layout.js                          ← Root Layout (Nivel 1)
│   └── clase-1/
│       └── ejemplos/
│           └── layouts-anidados/
│               ├── layout.js          ← Ejemplos Layout (Nivel 2)
│               ├── page.js            ← Esta página
│               └── dashboard/
│                   ├── layout.js      ← Dashboard Layout (Nivel 3)
│                   └── page.js        ← Página del dashboard`}
                        </code>
                    </pre>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        📦 Jerarquía de Renderizado
                    </h3>
                    <div className="space-y-2 font-mono text-sm">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-500">
                            <strong className="text-blue-600 dark:text-blue-400">Nivel 1:</strong> Root Layout
                            <div className="ml-4 mt-2 bg-gray-50 dark:bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                                <strong className="text-orange-600 dark:text-orange-400">Nivel 2:</strong> Ejemplos Layout
                                <div className="ml-4 mt-2 bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-500">
                                    <strong className="text-green-600 dark:text-green-400">Nivel 3:</strong> Contenido de la Página
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Código de Ejemplo */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    💻 Código de Implementación
                </h2>

                <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            1. Root Layout (app/layout.js)
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Navegación Global</header>
        {children}
        <footer>Footer Global</footer>
      </body>
    </html>
  );
}`}
                        </pre>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            2. Layout de Sección (app/dashboard/layout.js)
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <aside>Sidebar del Dashboard</aside>
      <main>{children}</main>
    </div>
  );
}`}
                        </pre>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            3. Página (app/dashboard/page.js)
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Contenido de la página */}
    </div>
  );
}`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Ventajas */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    ✅ Ventajas de los Layouts Anidados
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                        <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                            🔄 Reutilización de Código
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Comparte UI común entre múltiples páginas sin duplicar código
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                            ⚡ Mejor Rendimiento
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Los layouts no se re-renderizan durante la navegación
                        </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4">
                        <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                            💾 Preservación de Estado
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            El estado de los layouts se mantiene entre navegaciones
                        </p>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4">
                        <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                            📐 Organización Clara
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Estructura jerárquica que refleja la UI de tu aplicación
                        </p>
                    </div>
                </div>
            </section>

            {/* Casos de Uso */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    🎯 Casos de Uso Comunes
                </h2>

                <div className="space-y-3">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">
                            📊 Dashboard con Sidebar
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Layout que incluye navegación lateral para todas las páginas del dashboard
                        </p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            app/dashboard/layout.js
                        </code>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">
                            🛍️ E-commerce con Filtros
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Layout con filtros y categorías para todas las páginas de productos
                        </p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            app/shop/layout.js
                        </code>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">
                            📚 Documentación con TOC
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Layout con tabla de contenidos para todas las páginas de docs
                        </p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            app/docs/layout.js
                        </code>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">
                            👤 Área de Usuario
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Layout con información del usuario para páginas de perfil, configuración, etc.
                        </p>
                        <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            app/account/layout.js
                        </code>
                    </div>
                </div>
            </section>

            {/* Ejemplo Interactivo */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    🎮 Ejemplo Interactivo
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Visita la página del dashboard para ver un ejemplo de layout anidado de nivel 3:
                </p>

                <Link
                    href="/clase-1/ejemplos/layouts-anidados/dashboard"
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
                >
                    🚀 Ver Dashboard (Layout Nivel 3)
                </Link>
            </section>

            {/* Tips */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    💡 Tips y Mejores Prácticas
                </h2>

                <div className="space-y-3">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
                        <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">
                            ⚠️ Root Layout es Obligatorio
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Debe incluir las etiquetas &lt;html&gt; y &lt;body&gt;. Es el único layout que las necesita.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                            🔄 Los Layouts No Se Re-renderizan
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Durante la navegación, solo cambia el contenido de la página, no los layouts.
                        </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                        <h3 className="font-semibold text-green-800 dark:text-green-300 mb-1">
                            📦 Usa Layouts para Lógica Compartida
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Autenticación, providers de contexto, y otras lógicas compartidas van en layouts.
                        </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4">
                        <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-1">
                            🎨 Metadata Puede Ser Heredada
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Los layouts pueden exportar metadata que se combina con la metadata de las páginas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                <Link
                    href="/clase-1/ejemplos/ssg-demo"
                    className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:underline"
                >
                    ← Anterior: SSG Demo
                </Link>
                <Link
                    href="/clase-1"
                    className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:underline"
                >
                    Volver a Clase 1 →
                </Link>
            </footer>
        </div>
    );
}
