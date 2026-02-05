import Link from 'next/link';

export const metadata = {
    title: 'Clase 1: Fundamentos de Next.js',
    description: 'Aprende sobre rutas, layouts, SSR y SSG en Next.js',
};

export default function Clase1() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                {/* Header */}
                <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Clase 1: Fundamentos de Next.js
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Rutas, Layouts, SSR y SSG
                    </p>
                </header>

                {/* Navigation */}
                <nav className="mb-8 bg-blue-50 dark:bg-gray-700 rounded-lg p-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Contenido de la Clase
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#rutas" className="text-blue-600 dark:text-blue-400 hover:underline">
                                1. Sistema de Rutas en Next.js
                            </a>
                        </li>
                        <li>
                            <a href="#layouts" className="text-blue-600 dark:text-blue-400 hover:underline">
                                2. Layouts y Componentes Compartidos
                            </a>
                        </li>
                        <li>
                            <a href="#ssr" className="text-blue-600 dark:text-blue-400 hover:underline">
                                3. Server-Side Rendering (SSR)
                            </a>
                        </li>
                        <li>
                            <a href="#ssg" className="text-blue-600 dark:text-blue-400 hover:underline">
                                4. Static Site Generation (SSG)
                            </a>
                        </li>
                        <li>
                            <a href="#ejemplos" className="text-blue-600 dark:text-blue-400 hover:underline">
                                5. Ejemplos Prácticos
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Section 1: Rutas */}
                <section id="rutas" className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        1. Sistema de Rutas en Next.js
                    </h2>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Next.js utiliza un sistema de rutas basado en archivos (file-based routing) en la carpeta <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/</code>.
                        </p>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                                📁 Estructura de Carpetas
                            </h3>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`app/
├── page.js                    → /
├── about/
│   └── page.js               → /about
├── blog/
│   ├── page.js               → /blog
│   └── [slug]/
│       └── page.js           → /blog/:slug
└── dashboard/
    ├── layout.js
    └── page.js               → /dashboard`}
                            </pre>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                                🔑 Conceptos Clave
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li><strong>page.js</strong>: Define una página accesible públicamente</li>
                                <li><strong>layout.js</strong>: Define un layout compartido para rutas hijas</li>
                                <li><strong>[param]</strong>: Rutas dinámicas con parámetros</li>
                                <li><strong>(grupo)</strong>: Organización sin afectar la URL</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 2: Layouts */}
                <section id="layouts" className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        2. Layouts y Componentes Compartidos
                    </h2>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Los layouts permiten compartir UI entre múltiples páginas. Se mantienen montados durante la navegación.
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Ejemplo de Layout:
                            </h3>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <nav>
        <h2>Dashboard Navigation</h2>
      </nav>
      <main>{children}</main>
    </div>
  );
}`}
                            </pre>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-4">
                            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                                ✅ Ventajas de los Layouts
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Evitan re-renderizados innecesarios</li>
                                <li>Mantienen el estado durante la navegación</li>
                                <li>Pueden anidarse para crear jerarquías</li>
                                <li>Soportan metadata específica por sección</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 3: SSR */}
                <section id="ssr" className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        3. Server-Side Rendering (SSR)
                    </h2>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            SSR genera el HTML en el servidor en cada petición. Ideal para contenido dinámico y datos que cambian frecuentemente.
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Ejemplo de SSR:
                            </h3>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`// app/posts/page.js
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'no-store' // Deshabilita el cache
  });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    <div>
      <h1>Posts (SSR)</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}`}
                            </pre>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 mb-4">
                            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
                                🎯 Cuándo usar SSR
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Datos que cambian con frecuencia</li>
                                <li>Contenido personalizado por usuario</li>
                                <li>Datos sensibles que no deben cachearse</li>
                                <li>Necesitas acceso a cookies o headers</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 4: SSG */}
                <section id="ssg" className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        4. Static Site Generation (SSG)
                    </h2>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            SSG genera el HTML en tiempo de build. Las páginas son estáticas y se sirven desde un CDN, ofreciendo el mejor rendimiento.
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Ejemplo de SSG:
                            </h3>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`// app/products/page.js
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    cache: 'force-cache' // Cache por defecto
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  
  return (
    <div>
      <h1>Products (SSG)</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}`}
                            </pre>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4 mb-4">
                            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                                ⚡ Cuándo usar SSG
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Contenido que no cambia frecuentemente</li>
                                <li>Blogs, documentación, páginas de marketing</li>
                                <li>Mejor rendimiento y SEO</li>
                                <li>Reducción de costos de servidor</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 mb-4">
                            <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                                🔄 Revalidación Incremental (ISR)
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Combina lo mejor de SSG y SSR: páginas estáticas que se regeneran en intervalos.
                            </p>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 } // Revalida cada 60 segundos
  });
  return res.json();
}`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Section 5: Ejemplos */}
                <section id="ejemplos" className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        5. Ejemplos Prácticos
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Link
                            href="/clase-1/ejemplos/rutas-dinamicas"
                            className="block p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">
                                🔗 Rutas Dinámicas
                            </h3>
                            <p className="text-blue-100">
                                Explora cómo crear rutas con parámetros dinámicos
                            </p>
                        </Link>

                        <Link
                            href="/clase-1/ejemplos/ssr-demo"
                            className="block p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">
                                🖥️ SSR Demo
                            </h3>
                            <p className="text-purple-100">
                                Ejemplo práctico de Server-Side Rendering
                            </p>
                        </Link>

                        <Link
                            href="/clase-1/ejemplos/ssg-demo"
                            className="block p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">
                                ⚡ SSG Demo
                            </h3>
                            <p className="text-green-100">
                                Ejemplo práctico de Static Site Generation
                            </p>
                        </Link>

                        <Link
                            href="/clase-1/ejemplos/layouts-anidados"
                            className="block p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">
                                📐 Layouts Anidados
                            </h3>
                            <p className="text-orange-100">
                                Aprende a crear layouts jerárquicos
                            </p>
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← Volver al inicio
                    </Link>
                </footer>
            </div>
        </div>
    );
}
