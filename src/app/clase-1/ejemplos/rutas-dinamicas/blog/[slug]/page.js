import Link from 'next/link';

export default function BlogPost({ params }) {
    // Simulamos obtener datos del post basado en el slug
    const postData = {
        slug: params.slug,
        title: params.slug.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        date: new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        author: 'Instructor Next.js',
        content: `Este es un ejemplo de una página dinámica generada usando el parámetro de ruta: "${params.slug}".
    
En una aplicación real, usarías este parámetro para obtener datos de una base de datos o API.`,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <Link href="/clase-1" className="hover:text-blue-600 dark:hover:text-blue-400">
                        Clase 1
                    </Link>
                    {' > '}
                    <Link href="/clase-1/ejemplos/rutas-dinamicas" className="hover:text-blue-600 dark:hover:text-blue-400">
                        Rutas Dinámicas
                    </Link>
                    {' > '}
                    <span className="text-gray-900 dark:text-white">Blog</span>
                </nav>

                {/* Article Header */}
                <article>
                    <header className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {postData.title}
                        </h1>
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                            <span>📅 {postData.date}</span>
                            <span>✍️ {postData.author}</span>
                        </div>
                    </header>

                    {/* Dynamic Route Info */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-6">
                        <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                            🔍 Información de la Ruta Dinámica
                        </h2>
                        <div className="space-y-2 text-gray-700 dark:text-gray-300">
                            <p><strong>Parámetro slug:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{params.slug}</code></p>
                            <p><strong>Ruta completa:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/clase-1/ejemplos/rutas-dinamicas/blog/{params.slug}</code></p>
                            <p><strong>Archivo:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/clase-1/ejemplos/rutas-dinamicas/blog/[slug]/page.js</code></p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose dark:prose-invert max-w-none mb-8">
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                            {postData.content}
                        </p>
                    </div>

                    {/* Code Example */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            💻 Código de esta página:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`// app/clase-1/ejemplos/rutas-dinamicas/blog/[slug]/page.js

export default function BlogPost({ params }) {
  // params.slug contiene: "${params.slug}"
  
  return (
    <div>
      <h1>{params.slug}</h1>
      {/* Renderiza el contenido del post */}
    </div>
  );
}`}
                        </pre>
                    </div>

                    {/* How it works */}
                    <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-6">
                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                            ✅ ¿Cómo funciona?
                        </h3>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>La carpeta <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">[slug]</code> indica un parámetro dinámico</li>
                            <li>Next.js captura el valor de la URL y lo pasa como <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">params.slug</code></li>
                            <li>Puedes usar este valor para obtener datos específicos</li>
                            <li>Cada URL única genera una página diferente</li>
                        </ol>
                    </div>
                </article>

                {/* Navigation */}
                <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Link
                        href="/clase-1/ejemplos/rutas-dinamicas"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← Volver a Rutas Dinámicas
                    </Link>
                </footer>
            </div>
        </div>
    );
}
