import Link from 'next/link';
import ParallelFetchingDemo from './ParallelFetchingDemo';
import SequentialFetchingDemo from './SequentialFetchingDemo';
import ErrorHandlingDemo from './ErrorHandlingDemo';

export const metadata = {
    title: 'Data Fetching - Clase 2',
    description: 'Patrones de obtención de datos en Next.js',
};

export default function DataFetchingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        📊 Patrones de Data Fetching
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Aprende las mejores formas de obtener datos
                    </p>
                </header>

                {/* Introduction */}
                <section className="mb-10">
                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 mb-6">
                        <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
                            ¿Por qué importa el patrón de fetching?
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            La forma en que obtienes datos afecta directamente el rendimiento de tu aplicación.
                            Elegir el patrón correcto puede hacer que tu app sea significativamente más rápida.
                        </p>
                    </div>
                </section>

                {/* Pattern 1: Parallel Fetching */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        1. 🔄 Parallel Data Fetching
                    </h2>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                            ¿Cuándo usar?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Cuando necesitas múltiples datos que NO dependen entre sí.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            ✅ <strong>Ventaja:</strong> Todas las peticiones se hacen simultáneamente, reduciendo el tiempo total.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Código:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`async function getData() {
  // ✅ Ambas peticiones se hacen al mismo tiempo
  const [users, posts] = await Promise.all([
    fetch('https://api.example.com/users').then(r => r.json()),
    fetch('https://api.example.com/posts').then(r => r.json())
  ]);
  
  return { users, posts };
}

export default async function Page() {
  const { users, posts } = await getData();
  
  return (
    <div>
      <h1>Users: {users.length}</h1>
      <h1>Posts: {posts.length}</h1>
    </div>
  );
}`}
                        </pre>
                    </div>

                    <div className="border-4 border-blue-500 dark:border-blue-600 rounded-lg overflow-hidden">
                        <div className="bg-blue-500 dark:bg-blue-600 text-white p-4">
                            <h3 className="text-xl font-bold">Demo en Vivo</h3>
                        </div>
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/20">
                            <ParallelFetchingDemo />
                        </div>
                    </div>
                </section>

                {/* Pattern 2: Sequential Fetching */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        2. ➡️ Sequential Data Fetching
                    </h2>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 mb-4">
                        <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                            ¿Cuándo usar?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Cuando una petición DEPENDE del resultado de otra.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            ⚠️ <strong>Advertencia:</strong> Más lento que parallel, pero necesario cuando hay dependencias.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Código:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`async function getData() {
  // 1. Primero obtiene el usuario
  const user = await fetch('https://api.example.com/user/1')
    .then(r => r.json());
  
  // 2. Luego obtiene los posts de ese usuario
  const posts = await fetch(\`https://api.example.com/posts?userId=\${user.id}\`)
    .then(r => r.json());
  
  return { user, posts };
}

export default async function Page() {
  const { user, posts } = await getData();
  
  return (
    <div>
      <h1>{user.name}'s Posts</h1>
      <p>Total: {posts.length}</p>
    </div>
  );
}`}
                        </pre>
                    </div>

                    <div className="border-4 border-orange-500 dark:border-orange-600 rounded-lg overflow-hidden">
                        <div className="bg-orange-500 dark:bg-orange-600 text-white p-4">
                            <h3 className="text-xl font-bold">Demo en Vivo</h3>
                        </div>
                        <div className="p-6 bg-orange-50 dark:bg-orange-900/20">
                            <SequentialFetchingDemo />
                        </div>
                    </div>
                </section>

                {/* Pattern 3: Error Handling */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        3. ⚠️ Error Handling
                    </h2>

                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mb-4">
                        <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                            ¿Por qué es importante?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Las peticiones pueden fallar por muchas razones: red, servidor caído, timeout, etc.
                            Siempre debes manejar estos casos para dar una buena experiencia al usuario.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Código:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    
    if (!res.ok) {
      throw new Error(\`HTTP error! status: \${res.status}\`);
    }
    
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { data: null, error: error.message };
  }
}

export default async function Page() {
  const { data, error } = await getData();
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return <div>{data.title}</div>;
}`}
                        </pre>
                    </div>

                    <div className="border-4 border-red-500 dark:border-red-600 rounded-lg overflow-hidden">
                        <div className="bg-red-500 dark:bg-red-600 text-white p-4">
                            <h3 className="text-xl font-bold">Demo en Vivo</h3>
                        </div>
                        <div className="p-6 bg-red-50 dark:bg-red-900/20">
                            <ErrorHandlingDemo />
                        </div>
                    </div>
                </section>

                {/* Comparison */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        ⚖️ Comparación de Rendimiento
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700">
                                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Patrón</th>
                                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Tiempo</th>
                                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Cuándo usar</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Parallel</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">
                                        ⚡ Rápido (max de todas)
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                                        Datos independientes
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Sequential</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20">
                                        🐌 Lento (suma de todas)
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                                        Datos dependientes
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
                        <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                            💡 Ejemplo de tiempos
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Si tienes 3 peticiones que tardan 1 segundo cada una:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm mt-2">
                            <li><strong>Parallel:</strong> ~1 segundo total (todas al mismo tiempo)</li>
                            <li><strong>Sequential:</strong> ~3 segundos total (una tras otra)</li>
                        </ul>
                    </div>
                </section>

                {/* Best Practices */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        ✅ Mejores Prácticas
                    </h2>

                    <div className="space-y-3">
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                                1. Usa Parallel cuando sea posible
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Siempre que los datos no dependan entre sí, usa Promise.all() para mejor rendimiento
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                                2. Maneja errores apropiadamente
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Usa try/catch y verifica res.ok antes de parsear JSON
                            </p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-1">
                                3. Considera el cache
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Usa las opciones de cache de Next.js: force-cache, no-store, o revalidate
                            </p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-1">
                                4. Muestra loading states
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Usa Suspense y loading.js para mejorar la experiencia del usuario
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                    <Link
                        href="/clase-2/ejemplos/client-vs-server"
                        className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                    >
                        ← Anterior: Client vs Server
                    </Link>
                    <Link
                        href="/clase-2/ejemplos/hooks-demo"
                        className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                    >
                        Siguiente: React Hooks →
                    </Link>
                </footer>
            </div>
        </div>
    );
}
