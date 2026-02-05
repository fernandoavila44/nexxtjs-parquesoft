import Link from 'next/link';

export const metadata = {
    title: 'Rutas Dinámicas - Clase 1',
    description: 'Ejemplos de rutas dinámicas en Next.js',
};

export default function RutasDinamicasPage() {
    // Datos de ejemplo
    const posts = [
        { id: 1, slug: 'introduccion-nextjs', title: 'Introducción a Next.js' },
        { id: 2, slug: 'rutas-dinamicas', title: 'Rutas Dinámicas' },
        { id: 3, slug: 'server-components', title: 'Server Components' },
    ];

    const users = [
        { id: 1, username: 'juan', name: 'Juan Pérez' },
        { id: 2, username: 'maria', name: 'María García' },
        { id: 3, username: 'carlos', name: 'Carlos López' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        🔗 Rutas Dinámicas
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Aprende a crear rutas con parámetros dinámicos
                    </p>
                </header>

                {/* Explicación */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        ¿Qué son las Rutas Dinámicas?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Las rutas dinámicas permiten crear páginas basadas en parámetros variables.
                        Se definen usando corchetes en el nombre de la carpeta: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">[param]</code>
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                            📁 Estructura de Carpetas
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`app/
├── blog/
│   └── [slug]/
│       └── page.js           → /blog/mi-post
├── user/
│   └── [username]/
│       └── page.js           → /user/juan
└── products/
    └── [category]/
        └── [id]/
            └── page.js       → /products/electronics/123`}
                        </pre>
                    </div>
                </section>

                {/* Ejemplo 1: Blog Posts */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ejemplo 1: Blog Posts
                    </h2>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Código de la ruta dinámica:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            {`// app/clase-1/ejemplos/rutas-dinamicas/blog/[slug]/page.js

export default function BlogPost({ params }) {
  // params.slug contiene el valor del parámetro
  return (
    <div>
      <h1>Post: {params.slug}</h1>
    </div>
  );
}`}
                        </pre>
                    </div>

                    <div className="grid gap-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Prueba estos posts:
                        </h3>
                        {posts.map(post => (
                            <Link
                                key={post.id}
                                href={`/clase-1/ejemplos/rutas-dinamicas/blog/${post.slug}`}
                                className="block p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">{post.title}</span>
                                    <span className="text-blue-100 text-sm">/{post.slug}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Ejemplo 2: User Profiles */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ejemplo 2: Perfiles de Usuario
                    </h2>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Código de la ruta dinámica:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            {`// app/clase-1/ejemplos/rutas-dinamicas/user/[username]/page.js

export default function UserProfile({ params }) {
  return (
    <div>
      <h1>Perfil de @{params.username}</h1>
    </div>
  );
}`}
                        </pre>
                    </div>

                    <div className="grid gap-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Visita estos perfiles:
                        </h3>
                        {users.map(user => (
                            <Link
                                key={user.id}
                                href={`/clase-1/ejemplos/rutas-dinamicas/user/${user.username}`}
                                className="block p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold">{user.name}</span>
                                    <span className="text-purple-100 text-sm">@{user.username}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Conceptos Avanzados */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Conceptos Avanzados
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                                📦 Catch-all Routes
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Captura múltiples segmentos de URL usando <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">[...slug]</code>
                            </p>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`// app/docs/[...slug]/page.js
// Coincide con: /docs/a, /docs/a/b, /docs/a/b/c

export default function Docs({ params }) {
  // params.slug es un array: ['a', 'b', 'c']
  return <div>Path: {params.slug.join('/')}</div>;
}`}
                            </pre>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4">
                            <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                                🎯 Optional Catch-all Routes
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Hace que los parámetros sean opcionales usando <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">[[...slug]]</code>
                            </p>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`// app/shop/[[...categories]]/page.js
// Coincide con: /shop, /shop/electronics, /shop/electronics/phones

export default function Shop({ params }) {
  const categories = params.categories || [];
  return <div>Categories: {categories.join(' > ')}</div>;
}`}
                            </pre>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4">
                            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                                🔍 Accediendo a Query Parameters
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Para acceder a query parameters (?key=value), usa <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">searchParams</code>
                            </p>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`// app/search/page.js
export default function Search({ searchParams }) {
  // URL: /search?q=nextjs&sort=date
  const query = searchParams.q;      // 'nextjs'
  const sort = searchParams.sort;    // 'date'
  
  return <div>Buscando: {query}</div>;
}`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                    <Link
                        href="/clase-1"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← Volver a Clase 1
                    </Link>
                    <Link
                        href="/clase-1/ejemplos/ssr-demo"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Siguiente: SSR Demo →
                    </Link>
                </footer>
            </div>
        </div>
    );
}
