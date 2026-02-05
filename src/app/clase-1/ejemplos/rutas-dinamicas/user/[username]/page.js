import Link from 'next/link';

export default function UserProfile({ params }) {
    // Simulamos datos de usuario basados en el username
    const userData = {
        username: params.username,
        name: params.username.charAt(0).toUpperCase() + params.username.slice(1),
        bio: `Perfil de ejemplo para @${params.username}`,
        joinDate: 'Enero 2024',
        posts: 42,
        followers: 1234,
        following: 567,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <Link href="/clase-1" className="hover:text-purple-600 dark:hover:text-purple-400">
                        Clase 1
                    </Link>
                    {' > '}
                    <Link href="/clase-1/ejemplos/rutas-dinamicas" className="hover:text-purple-600 dark:hover:text-purple-400">
                        Rutas Dinámicas
                    </Link>
                    {' > '}
                    <span className="text-gray-900 dark:text-white">Usuario</span>
                </nav>

                {/* Profile Header */}
                <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                        {userData.name.charAt(0)}
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {userData.name}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                        @{userData.username}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        {userData.bio}
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-900 dark:text-purple-300">
                            {userData.posts}
                        </div>
                        <div className="text-sm text-purple-700 dark:text-purple-400">
                            Posts
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-pink-900 dark:text-pink-300">
                            {userData.followers}
                        </div>
                        <div className="text-sm text-pink-700 dark:text-pink-400">
                            Seguidores
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-300">
                            {userData.following}
                        </div>
                        <div className="text-sm text-indigo-700 dark:text-indigo-400">
                            Siguiendo
                        </div>
                    </div>
                </div>

                {/* Dynamic Route Info */}
                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 mb-6">
                    <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
                        🔍 Información de la Ruta Dinámica
                    </h2>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p><strong>Parámetro username:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{params.username}</code></p>
                        <p><strong>Ruta completa:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/clase-1/ejemplos/rutas-dinamicas/user/{params.username}</code></p>
                        <p><strong>Archivo:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/clase-1/ejemplos/rutas-dinamicas/user/[username]/page.js</code></p>
                    </div>
                </div>

                {/* Code Example */}
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        💻 Código de esta página:
                    </h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`// app/clase-1/ejemplos/rutas-dinamicas/user/[username]/page.js

export default function UserProfile({ params }) {
  // params.username contiene: "${params.username}"
  
  // En una app real, obtendrías los datos del usuario:
  // const user = await getUserByUsername(params.username);
  
  return (
    <div>
      <h1>@{params.username}</h1>
      {/* Renderiza el perfil del usuario */}
    </div>
  );
}`}
                    </pre>
                </div>

                {/* Use Cases */}
                <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 mb-6">
                    <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                        💡 Casos de Uso Comunes
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Perfiles de usuario: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/user/[username]</code></li>
                        <li>Detalles de producto: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/product/[id]</code></li>
                        <li>Posts de blog: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/blog/[slug]</code></li>
                        <li>Categorías: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/category/[name]</code></li>
                    </ul>
                </div>

                {/* Navigation */}
                <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Link
                        href="/clase-1/ejemplos/rutas-dinamicas"
                        className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                    >
                        ← Volver a Rutas Dinámicas
                    </Link>
                </footer>
            </div>
        </div>
    );
}
