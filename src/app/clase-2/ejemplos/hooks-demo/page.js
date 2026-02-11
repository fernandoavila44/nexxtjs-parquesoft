'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

// export const metadata = {
//     title: 'React Hooks - Clase 2',
//     description: 'Ejemplos de React Hooks en Next.js',
// };

export default function HooksDemoPage() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // useEffect para actualizar el reloj
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        🎣 React Hooks en Next.js
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Ejemplos prácticos de los hooks más importantes
                    </p>
                </header>

                {/* useState Demo */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        1. useState - Estado Local
                    </h2>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            <strong>useState</strong> permite agregar estado a componentes funcionales.
                            El estado se mantiene entre re-renderizados.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                Contador
                            </h3>
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <button
                                    onClick={() => setCount(count - 1)}
                                    className="bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full text-xl font-bold transition-colors"
                                >
                                    −
                                </button>
                                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400 min-w-[80px] text-center">
                                    {count}
                                </span>
                                <button
                                    onClick={() => setCount(count + 1)}
                                    className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full text-xl font-bold transition-colors"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => setCount(0)}
                                className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors text-sm"
                            >
                                Reset
                            </button>
                        </div>

                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-green-300 dark:border-green-600">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                Input Controlado
                            </h3>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Escribe tu nombre..."
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            />
                            {name && (
                                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        ¡Hola, <strong>{name}</strong>!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Código:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`'use client';
import { useState } from 'react';

export default function Component() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}`}
                        </pre>
                    </div>
                </section>

                {/* useEffect Demo */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        2. useEffect - Efectos Secundarios
                    </h2>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 mb-4">
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            <strong>useEffect</strong> ejecuta código después del renderizado.
                            Útil para APIs, subscripciones, timers, etc.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-600 mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                            ⏰ Reloj en Tiempo Real
                        </h3>
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-lg text-center">
                            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 font-mono">
                                {time}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                Se actualiza cada segundo usando useEffect
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Código:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`'use client';
import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    // Se ejecuta después del primer render
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    // Cleanup: se ejecuta al desmontar
    return () => clearInterval(interval);
  }, []); // [] = solo se ejecuta una vez
  
  return <div>{time}</div>;
}`}
                        </pre>
                    </div>
                </section>

                {/* useRouter Demo */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        3. useRouter - Navegación Programática
                    </h2>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 mb-4">
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            <strong>useRouter</strong> permite navegar entre páginas desde JavaScript.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-600 mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Navegación
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => router.push('/clase-2')}
                                className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors"
                            >
                                ← Ir a Clase 2
                            </button>
                            <button
                                onClick={() => router.push('/clase-1')}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors"
                            >
                                Ir a Clase 1 →
                            </button>
                            <button
                                onClick={() => router.back()}
                                className="bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg transition-colors"
                            >
                                ← Atrás
                            </button>
                            <button
                                onClick={() => router.refresh()}
                                className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors"
                            >
                                🔄 Refresh
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Código:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`'use client';
import { useRouter } from 'next/navigation';

export default function Component() {
  const router = useRouter();
  
  return (
    <div>
      <button onClick={() => router.push('/about')}>
        Ir a About
      </button>
      <button onClick={() => router.back()}>
        Atrás
      </button>
      <button onClick={() => router.refresh()}>
        Refresh
      </button>
    </div>
  );
}`}
                        </pre>
                    </div>
                </section>

                {/* usePathname & useSearchParams */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        4. usePathname & useSearchParams
                    </h2>

                    <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-400 p-4 mb-4">
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Obtén información sobre la ruta actual y los parámetros de búsqueda.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-pink-300 dark:border-pink-600 mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Información de la Ruta
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <strong>Pathname:</strong>
                                </p>
                                <p className="font-mono text-xs text-pink-600 dark:text-pink-400 mt-1">
                                    {pathname}
                                </p>
                            </div>
                            <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <strong>Search Params:</strong>
                                </p>
                                <p className="font-mono text-xs text-pink-600 dark:text-pink-400 mt-1">
                                    {searchParams.toString() || '(ninguno)'}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                Prueba agregar parámetros a la URL:
                            </p>
                            <Link
                                href="/clase-2/ejemplos/hooks-demo?nombre=Juan&edad=25"
                                className="text-sm text-pink-600 dark:text-pink-400 hover:underline"
                            >
                                ?nombre=Juan&edad=25
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Código:
                        </h3>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                            {`'use client';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Component() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const nombre = searchParams.get('nombre');
  const edad = searchParams.get('edad');
  
  return (
    <div>
      <p>Ruta: {pathname}</p>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}`}
                        </pre>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                    <Link
                        href="/clase-2/ejemplos/data-fetching"
                        className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
                    >
                        ← Anterior: Data Fetching
                    </Link>
                    <Link
                        href="/clase-2/ejemplos/state-management"
                        className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
                    >
                        Siguiente: Estado Global →
                    </Link>
                </footer>
            </div>
        </div>
    );
}
