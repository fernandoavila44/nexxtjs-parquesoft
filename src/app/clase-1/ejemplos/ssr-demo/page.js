import Link from 'next/link';

// Esta función obtiene datos en cada petición (SSR)
async function getCurrentTime() {
    // Simulamos una llamada a API
    await new Promise(resolve => setTimeout(resolve, 100));

    return {
        serverTime: new Date().toISOString(),
        timestamp: Date.now(),
    };
}

// Función para obtener datos "dinámicos" (simulados)
async function getDynamicData() {
    // En una app real, esto vendría de una API o base de datos
    const res = await fetch('https://api.github.com/repos/vercel/next.js', {
        cache: 'no-store', // Importante: deshabilita el cache para SSR
    });

    if (!res.ok) {
        return {
            name: 'Next.js',
            stars: 'N/A',
            description: 'The React Framework',
            error: 'No se pudo obtener datos en tiempo real',
        };
    }

    const data = await res.json();

    return {
        name: data.name,
        stars: data.stargazers_count,
        description: data.description,
        lastUpdate: data.updated_at,
    };
}

export const metadata = {
    title: 'SSR Demo - Clase 1',
    description: 'Demostración de Server-Side Rendering en Next.js',
};

export default async function SSRDemo() {
    // Estos datos se obtienen en el servidor en CADA petición
    const timeData = await getCurrentTime();
    const repoData = await getDynamicData();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        🖥️ Server-Side Rendering (SSR)
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Datos generados en el servidor en cada petición
                    </p>
                </header>

                {/* Explicación */}
                <section className="mb-8">
                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 mb-6">
                        <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
                            ¿Qué es SSR?
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Server-Side Rendering genera el HTML en el servidor para cada petición.
                            Los datos siempre están actualizados, pero cada visita requiere procesamiento del servidor.
                        </p>
                    </div>
                </section>

                {/* Live Data Demo */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        📊 Datos en Tiempo Real
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2 mb-6">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                            <h3 className="text-lg font-semibold mb-2">⏰ Hora del Servidor</h3>
                            <p className="text-3xl font-bold mb-2">
                                {new Date(timeData.serverTime).toLocaleTimeString('es-ES')}
                            </p>
                            <p className="text-purple-100 text-sm">
                                {new Date(timeData.serverTime).toLocaleDateString('es-ES', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-6 text-white">
                            <h3 className="text-lg font-semibold mb-2">🔢 Timestamp</h3>
                            <p className="text-2xl font-bold mb-2">
                                {timeData.timestamp}
                            </p>
                            <p className="text-pink-100 text-sm">
                                Milisegundos desde epoch
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-6 text-white mb-6">
                        <h3 className="text-xl font-semibold mb-4">⭐ Datos de API en Vivo</h3>
                        <div className="space-y-2">
                            <p><strong>Repositorio:</strong> {repoData.name}</p>
                            <p><strong>⭐ Stars:</strong> {repoData.stars.toLocaleString()}</p>
                            <p><strong>Descripción:</strong> {repoData.description}</p>
                            {repoData.lastUpdate && (
                                <p className="text-indigo-100 text-sm">
                                    Última actualización: {new Date(repoData.lastUpdate).toLocaleString('es-ES')}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
                        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                            🔄 Recarga la página
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            Presiona F5 o recarga la página para ver cómo los datos se actualizan en cada petición.
                            Esto demuestra que el HTML se genera en el servidor cada vez.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                            🔄 Recargar Página
                        </button>
                    </div>
                </section>

                {/* Code Example */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        💻 Código de Implementación
                    </h2>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Paso 1: Función para obtener datos
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`async function getDynamicData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store' // ⚠️ Clave para SSR: deshabilita el cache
  });
  
  const data = await res.json();
  return data;
}`}
                        </pre>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Paso 2: Componente de servidor asíncrono
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`// app/ssr-demo/page.js
export default async function SSRPage() {
  // Obtiene datos en el servidor en cada petición
  const data = await getDynamicData();
  
  return (
    <div>
      <h1>Datos actualizados: {data.timestamp}</h1>
      {/* Renderiza los datos */}
    </div>
  );
}`}
                        </pre>
                    </div>
                </section>

                {/* Características */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        🎯 Características de SSR
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                                ✅ Ventajas
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Datos siempre actualizados</li>
                                <li>Mejor para contenido dinámico</li>
                                <li>Acceso a cookies y headers</li>
                                <li>Contenido personalizado por usuario</li>
                            </ul>
                        </div>

                        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4">
                            <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
                                ⚠️ Consideraciones
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Mayor carga en el servidor</li>
                                <li>Tiempo de respuesta variable</li>
                                <li>No se puede cachear en CDN</li>
                                <li>Costos de servidor más altos</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Cuándo usar */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        🤔 ¿Cuándo usar SSR?
                    </h2>

                    <div className="space-y-3">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                                📊 Dashboards y Paneles
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Datos que cambian frecuentemente y necesitan estar actualizados
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                                👤 Contenido Personalizado
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Páginas que dependen de la sesión del usuario o cookies
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                                🔒 Datos Sensibles
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Información que no debe cachearse por seguridad
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                                🔄 Feeds en Tiempo Real
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Noticias, redes sociales, datos de mercado, etc.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                    <Link
                        href="/clase-1/ejemplos/rutas-dinamicas"
                        className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                    >
                        ← Anterior: Rutas Dinámicas
                    </Link>
                    <Link
                        href="/clase-1/ejemplos/ssg-demo"
                        className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                    >
                        Siguiente: SSG Demo →
                    </Link>
                </footer>
            </div>
        </div>
    );
}
