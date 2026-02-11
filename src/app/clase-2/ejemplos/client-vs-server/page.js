import Link from 'next/link';
import ServerComponentDemo from './ServerComponentDemo';
import ClientComponentDemo from './ClientComponentDemo';

export const metadata = {
    title: 'Client vs Server Components - Clase 2',
    description: 'Comparación entre Client Components y Server Components',
};

export default function ClientVsServerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        🔄 Client vs Server Components
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Entiende las diferencias fundamentales
                    </p>
                </header>

                {/* Comparison Table */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        📊 Comparación Detallada
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700">
                                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Característica</th>
                                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left bg-blue-100 dark:bg-blue-900/30">Server Component</th>
                                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left bg-green-100 dark:bg-green-900/30">Client Component</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Dónde se ejecuta</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-blue-50 dark:bg-blue-900/20">🖥️ Servidor</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">💻 Navegador</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">JavaScript enviado</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-blue-50 dark:bg-blue-900/20">✅ Ninguno</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">📦 Sí</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Puede usar hooks</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-blue-50 dark:bg-blue-900/20">❌ No</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">✅ Sí</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Interactividad</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-blue-50 dark:bg-blue-900/20">❌ No</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">✅ Sí</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Acceso a DB/APIs del servidor</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-blue-50 dark:bg-blue-900/20">✅ Directo</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">❌ Vía API</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Puede ser async</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-blue-50 dark:bg-blue-900/20">✅ Sí</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">❌ No</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Por defecto en Next.js</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-blue-50 dark:bg-blue-900/20">✅ Sí</td>
                                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-green-50 dark:bg-green-900/20">❌ Requiere 'use client'</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Live Demos */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        🎮 Demos Interactivos
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Server Component Demo */}
                        <div className="border-4 border-blue-500 dark:border-blue-600 rounded-lg overflow-hidden">
                            <div className="bg-blue-500 dark:bg-blue-600 text-white p-4">
                                <h3 className="text-xl font-bold">🖥️ Server Component</h3>
                                <p className="text-blue-100 text-sm">Renderizado en el servidor</p>
                            </div>
                            <div className="p-6 bg-blue-50 dark:bg-blue-900/20">
                                <ServerComponentDemo />
                            </div>
                        </div>

                        {/* Client Component Demo */}
                        <div className="border-4 border-green-500 dark:border-green-600 rounded-lg overflow-hidden">
                            <div className="bg-green-500 dark:bg-green-600 text-white p-4">
                                <h3 className="text-xl font-bold">💻 Client Component</h3>
                                <p className="text-green-100 text-sm">Renderizado en el navegador</p>
                            </div>
                            <div className="p-6 bg-green-50 dark:bg-green-900/20">
                                <ClientComponentDemo />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Code Examples */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        💻 Ejemplos de Código
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Server Component (por defecto):
                            </h3>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`// No necesita directiva 'use client'
// Puede ser async y obtener datos directamente

async function getServerData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store'
  });
  return res.json();
}

export default async function ServerComponent() {
  const data = await getServerData();
  
  return (
    <div>
      <h1>{data.title}</h1>
      <p>Renderizado: {new Date().toISOString()}</p>
    </div>
  );
}`}
                            </pre>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Client Component (requiere 'use client'):
                            </h3>
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                {`'use client'; // ⚠️ Obligatorio para usar hooks

import { useState, useEffect } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Fetch data en el cliente
    fetch('/api/data')
      .then(r => r.json())
      .then(setData);
  }, []);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </button>
      {data && <p>{data.title}</p>}
    </div>
  );
}`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        ✅ Mejores Prácticas
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                                ✓ Usa Server Components cuando:
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                <li>Necesitas obtener datos del servidor</li>
                                <li>Accedes a recursos del backend (DB, archivos, etc.)</li>
                                <li>Quieres mantener código sensible en el servidor</li>
                                <li>Reduces el JavaScript enviado al cliente</li>
                                <li>No necesitas interactividad</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                                ✓ Usa Client Components cuando:
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                <li>Necesitas interactividad (onClick, onChange, etc.)</li>
                                <li>Usas hooks (useState, useEffect, etc.)</li>
                                <li>Usas APIs del navegador (localStorage, window, etc.)</li>
                                <li>Necesitas event listeners</li>
                                <li>Usas librerías que dependen del navegador</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
                            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                                💡 Tip: Composición
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                                Puedes usar Server Components dentro de Client Components pasándolos como children:
                            </p>
                            <pre className="bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                                {`// ClientWrapper.js
'use client';
export default function ClientWrapper({ children }) {
  return <div className="interactive">{children}</div>;
}

// page.js (Server Component)
export default function Page() {
  return (
    <ClientWrapper>
      <ServerComponent /> {/* ✅ Funciona! */}
    </ClientWrapper>
  );
}`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Decision Tree */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        🌳 Árbol de Decisión
                    </h2>

                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                        <div className="space-y-3 font-mono text-sm">
                            <div className="bg-white dark:bg-gray-800 p-3 rounded">
                                <strong className="text-purple-600 dark:text-purple-400">¿Necesitas interactividad?</strong>
                                <div className="ml-4 mt-2">
                                    <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded mb-2">
                                        <strong className="text-green-600 dark:text-green-400">Sí →</strong> Client Component
                                    </div>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                                        <strong className="text-blue-600 dark:text-blue-400">No →</strong> ¿Necesitas obtener datos?
                                        <div className="ml-4 mt-2">
                                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded mb-2">
                                                <strong className="text-blue-700 dark:text-blue-300">Sí →</strong> Server Component
                                            </div>
                                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                                                <strong className="text-blue-700 dark:text-blue-300">No →</strong> Server Component (por defecto)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                    <Link
                        href="/clase-2"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← Volver a Clase 2
                    </Link>
                    <Link
                        href="/clase-2/ejemplos/data-fetching"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Siguiente: Data Fetching →
                    </Link>
                </footer>
            </div>
        </div>
    );
}
