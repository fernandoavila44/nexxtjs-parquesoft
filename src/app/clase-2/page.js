import Link from 'next/link';

export const metadata = {
  title: 'Clase 2: Data Fetching y Estado',
  description: 'Aprende sobre data fetching, client vs server components, hooks y manejo de estado en Next.js',
};

export default function Clase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Clase 2: Data Fetching y Manejo de Estado
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Client Components, Server Components, Hooks y Estado Global
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-8 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Contenido de la Clase
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#client-server" className="text-purple-600 dark:text-purple-400 hover:underline">
                1. Client Components vs Server Components
              </a>
            </li>
            <li>
              <a href="#data-fetching" className="text-purple-600 dark:text-purple-400 hover:underline">
                2. Patrones de Data Fetching
              </a>
            </li>
            <li>
              <a href="#hooks" className="text-purple-600 dark:text-purple-400 hover:underline">
                3. React Hooks en Next.js
              </a>
            </li>
            <li>
              <a href="#state" className="text-purple-600 dark:text-purple-400 hover:underline">
                4. Manejo de Estado
              </a>
            </li>
            <li>
              <a href="#ejemplos" className="text-purple-600 dark:text-purple-400 hover:underline">
                5. Ejemplos Prácticos
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1: Client vs Server Components */}
        <section id="client-server" className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            1. Client Components vs Server Components
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Next.js 13+ introduce el concepto de Server Components por defecto. 
              Entender la diferencia es fundamental para construir aplicaciones eficientes.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  🖥️ Server Components
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Renderizados en el servidor</li>
                  <li>No envían JavaScript al cliente</li>
                  <li>Pueden acceder a bases de datos</li>
                  <li>No pueden usar hooks o interactividad</li>
                  <li><strong>Por defecto en Next.js</strong></li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                  💻 Client Components
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Renderizados en el navegador</li>
                  <li>Pueden usar hooks (useState, useEffect)</li>
                  <li>Manejan interactividad del usuario</li>
                  <li>Requieren directiva 'use client'</li>
                  <li>Envían JavaScript al cliente</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Ejemplo de Client Component:
              </h3>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`'use client'; // ⚠️ Esta directiva es obligatoria

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </button>
  );
}`}
              </pre>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Ejemplo de Server Component:
              </h3>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// No necesita 'use client'

async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function ServerComponent() {
  const data = await getData();
  
  return <div>{data.title}</div>;
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section 2: Data Fetching */}
        <section id="data-fetching" className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            2. Patrones de Data Fetching
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Next.js ofrece múltiples formas de obtener datos dependiendo de tus necesidades.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4">
                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
                  🔄 Parallel Data Fetching
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  Obtén múltiples datos simultáneamente para mejor rendimiento
                </p>
                <pre className="bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
{`const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json())
]);`}
                </pre>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 p-4">
                <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                  ➡️ Sequential Data Fetching
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  Obtén datos que dependen de otros datos
                </p>
                <pre className="bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
{`const user = await fetch('/api/user').then(r => r.json());
const posts = await fetch(\`/api/posts/\${user.id}\`)
  .then(r => r.json());`}
                </pre>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4">
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                  ⚠️ Error Handling
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  Maneja errores apropiadamente
                </p>
                <pre className="bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
{`try {
  const data = await fetch('/api/data').then(r => r.json());
} catch (error) {
  console.error('Error:', error);
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: React Hooks */}
        <section id="hooks" className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            3. React Hooks en Next.js
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Los hooks solo funcionan en Client Components. Aquí están los más importantes:
            </p>

            <div className="grid gap-3 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                  useState - Estado Local
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Maneja estado que cambia con la interacción del usuario
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                  useEffect - Efectos Secundarios
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ejecuta código después del renderizado (APIs, subscripciones, etc.)
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-1">
                  useRouter - Navegación Programática
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Navega entre páginas desde JavaScript
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-pink-900 dark:text-pink-300 mb-1">
                  useSearchParams - Query Parameters
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Lee y modifica parámetros de búsqueda en la URL
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: State Management */}
        <section id="state" className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            4. Manejo de Estado
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Existen diferentes niveles de estado en una aplicación Next.js:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  1️⃣ Estado Local (useState)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Para estado que solo necesita un componente
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                  2️⃣ Estado Compartido (Props)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Pasa estado entre componentes padre e hijo
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                  3️⃣ Estado Global (Context API)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Para estado que necesitan múltiples componentes en diferentes niveles
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                  4️⃣ Estado del Servidor (Server State)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Datos obtenidos del servidor (cache, revalidación, etc.)
                </p>
              </div>
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
              href="/clase-2/ejemplos/client-vs-server"
              className="block p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                🔄 Client vs Server
              </h3>
              <p className="text-blue-100">
                Comparación visual y ejemplos interactivos
              </p>
            </Link>

            <Link 
              href="/clase-2/ejemplos/data-fetching"
              className="block p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                📊 Data Fetching
              </h3>
              <p className="text-purple-100">
                Patrones de obtención de datos
              </p>
            </Link>

            <Link 
              href="/clase-2/ejemplos/hooks-demo"
              className="block p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                🎣 React Hooks
              </h3>
              <p className="text-green-100">
                Ejemplos de useState, useEffect y más
              </p>
            </Link>

            <Link 
              href="/clase-2/ejemplos/state-management"
              className="block p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                💾 Estado Global
              </h3>
              <p className="text-orange-100">
                Context API y estado compartido
              </p>
            </Link>

            <Link 
              href="/clase-2/ejemplos/todo-app"
              className="block p-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow md:col-span-2"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                ✅ Proyecto: Todo App
              </h3>
              <p className="text-pink-100">
                Aplicación completa con CRUD, filtros y persistencia
              </p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
          <Link 
            href="/"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
          >
            ← Volver al inicio
          </Link>
          <Link 
            href="/clase-1"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
          >
            Ver Clase 1 →
          </Link>
        </footer>
      </div>
    </div>
  );
}
