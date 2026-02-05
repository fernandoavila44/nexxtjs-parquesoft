import Link from 'next/link';

// Esta función obtiene datos en tiempo de BUILD (SSG)
async function getStaticData() {
    // Simulamos una llamada a API
    const buildTime = new Date().toISOString();

    return {
        buildTime,
        message: 'Estos datos se generaron durante el build',
    };
}

// Función para obtener datos estáticos de una API
async function getRepositories() {
    try {
        const res = await fetch('https://api.github.com/users/vercel/repos?per_page=5&sort=stars', {
            // Por defecto, Next.js cachea las peticiones (SSG)
            // Esto es equivalente a: cache: 'force-cache'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch');
        }

        const repos = await res.json();

        return repos.map(repo => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            url: repo.html_url,
        }));
    } catch (error) {
        return [];
    }
}

export const metadata = {
    title: 'SSG Demo - Clase 1',
    description: 'Demostración de Static Site Generation en Next.js',
};

export default async function SSGDemo() {
    // Estos datos se obtienen UNA VEZ durante el build
    const staticData = await getStaticData();
    const repositories = await getRepositories();

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        ⚡ Static Site Generation (SSG)
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Páginas generadas en tiempo de build
                    </p>
                </header>

                {/* Explicación */}
                <section className="mb-8">
                    <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-6">
                        <h2 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                            ¿Qué es SSG?
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Static Site Generation genera el HTML una vez durante el build.
                            Las páginas son estáticas, ultra-rápidas y se sirven desde un CDN.
                        </p>
                    </div>
                </section>

                {/* Build Time Demo */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        🏗️ Datos Generados en Build Time
                    </h2>

                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white mb-6">
                        <h3 className="text-xl font-semibold mb-4">⏰ Tiempo de Build</h3>
                        <p className="text-3xl font-bold mb-2">
                            {new Date(staticData.buildTime).toLocaleTimeString('es-ES')}
                        </p>
                        <p className="text-green-100 mb-4">
                            {new Date(staticData.buildTime).toLocaleDateString('es-ES', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                        <p className="text-green-100 text-sm">
                            {staticData.message}
                        </p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
                        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                            🔍 Observa esto
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            Recarga la página varias veces. Notarás que el tiempo de build NO cambia.
                            Esto es porque el HTML se generó una sola vez durante el build y se reutiliza
                            para todas las peticiones.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                            >
                                🔄 Recargar Página
                            </button>
                            <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                                <span>El tiempo de build permanecerá igual ⚡</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Static Data from API */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        📦 Datos Estáticos de API
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Estos repositorios se obtuvieron de la API de GitHub durante el build:
                    </p>

                    <div className="space-y-3 mb-6">
                        {repositories.map((repo, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg p-4"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                            {repo.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                            {repo.description || 'Sin descripción'}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
                                        <span className="text-yellow-600 dark:text-yellow-400">⭐</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            {repo.stars.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                            💡 Nota Importante
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Estos datos NO se actualizarán hasta que vuelvas a hacer build de la aplicación.
                            Para datos que cambian frecuentemente, usa SSR o ISR (Incremental Static Regeneration).
                        </p>
                    </div>
                </section>

                {/* Code Example */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        💻 Código de Implementación
                    </h2>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Opción 1: Cache por defecto (SSG)
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`async function getStaticData() {
  // Por defecto, Next.js cachea las peticiones
  const res = await fetch('https://api.example.com/data');
  
  // También puedes ser explícito:
  // const res = await fetch('https://api.example.com/data', {
  //   cache: 'force-cache'
  // });
  
  const data = await res.json();
  return data;
}`}
                        </pre>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Opción 2: Revalidación Incremental (ISR)
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // Revalida cada hora (3600 segundos)
  });
  
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();
  
  return <div>{/* Renderiza los datos */}</div>;
}`}
                        </pre>
                    </div>
                </section>

                {/* ISR Explanation */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        🔄 Revalidación Incremental (ISR)
                    </h2>

                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-6 text-white mb-4">
                        <h3 className="text-xl font-semibold mb-3">
                            Lo mejor de ambos mundos
                        </h3>
                        <p className="text-indigo-100 mb-4">
                            ISR combina las ventajas de SSG (velocidad) con SSR (datos actualizados).
                            Las páginas se regeneran en segundo plano después de un tiempo especificado.
                        </p>
                        <div className="bg-indigo-700/50 rounded-lg p-4">
                            <h4 className="font-semibold mb-2">¿Cómo funciona?</h4>
                            <ol className="list-decimal list-inside space-y-2 text-indigo-100 text-sm">
                                <li>La primera petición sirve la página estática (rápido)</li>
                                <li>Después del tiempo de revalidación, la siguiente petición dispara una regeneración</li>
                                <li>Mientras se regenera, se sigue sirviendo la versión anterior</li>
                                <li>Una vez regenerada, las nuevas peticiones reciben la versión actualizada</li>
                            </ol>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                            <div className="text-3xl mb-2">⚡</div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Rápido</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Sirve páginas estáticas desde CDN
                            </p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                            <div className="text-3xl mb-2">🔄</div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Actualizado</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Datos se actualizan automáticamente
                            </p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                            <div className="text-3xl mb-2">💰</div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Económico</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Menos carga en el servidor
                            </p>
                        </div>
                    </div>
                </section>

                {/* Características */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        🎯 Características de SSG
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                                ✅ Ventajas
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Rendimiento excepcional</li>
                                <li>Mejor SEO</li>
                                <li>Bajo costo de hosting</li>
                                <li>Escalabilidad infinita</li>
                                <li>Funciona sin JavaScript</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4">
                            <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                                ⚠️ Limitaciones
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Datos pueden quedar desactualizados</li>
                                <li>Build time aumenta con muchas páginas</li>
                                <li>No sirve para contenido personalizado</li>
                                <li>Requiere rebuild para actualizar</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Cuándo usar */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        🤔 ¿Cuándo usar SSG?
                    </h2>

                    <div className="space-y-3">
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-1">
                                📝 Blogs y Documentación
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Contenido que no cambia frecuentemente
                            </p>
                        </div>

                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-1">
                                🛍️ E-commerce (con ISR)
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Catálogos de productos que se actualizan periódicamente
                            </p>
                        </div>

                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-1">
                                🎨 Portafolios y Landing Pages
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Sitios de marketing y páginas corporativas
                            </p>
                        </div>

                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-1">
                                📰 Sitios de Noticias (con ISR)
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Artículos que se actualizan cada cierto tiempo
                            </p>
                        </div>
                    </div>
                </section>

                {/* Comparación SSG vs SSR */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        ⚖️ SSG vs SSR: Comparación
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700">
                                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Característica</th>
                                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">SSG</th>
                                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">SSR</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Rendimiento</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">⚡ Excelente</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">🔄 Variable</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Datos actualizados</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">📅 En build time</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">✅ Siempre</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Costo de servidor</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">💰 Muy bajo</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">💸 Alto</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Escalabilidad</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">♾️ Infinita</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">📊 Limitada</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Personalización</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">❌ No</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">✅ Sí</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                    <Link
                        href="/clase-1/ejemplos/ssr-demo"
                        className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
                    >
                        ← Anterior: SSR Demo
                    </Link>
                    <Link
                        href="/clase-1/ejemplos/layouts-anidados"
                        className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
                    >
                        Siguiente: Layouts Anidados →
                    </Link>
                </footer>
            </div>
        </div>
    );
}
