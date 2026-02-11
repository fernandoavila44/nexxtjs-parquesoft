'use client';

import { createContext, useContext, useState } from 'react';
import Link from 'next/link';

// Crear el contexto
const ThemeContext = createContext();
const UserContext = createContext();

// Provider del tema
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Provider del usuario
function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (name) => {
        setUser({ name, loggedIn: true });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

// Componente que usa el contexto del tema
function ThemeDisplay() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`p-6 rounded-lg ${theme === 'light'
                ? 'bg-yellow-100 dark:bg-yellow-900/30'
                : 'bg-gray-800 text-white'
            }`}>
            <h3 className="font-semibold mb-3">
                Tema Actual: {theme === 'light' ? '☀️ Claro' : '🌙 Oscuro'}
            </h3>
            <button
                onClick={toggleTheme}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
                Cambiar Tema
            </button>
        </div>
    );
}

// Componente que usa el contexto del usuario
function UserDisplay() {
    const { user, login, logout } = useContext(UserContext);
    const [name, setName] = useState('');

    return (
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-600">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Estado del Usuario
            </h3>
            {user ? (
                <div className="space-y-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            ✅ Sesión iniciada como: <strong>{user.name}</strong>
                        </p>
                    </div>
                    <button
                        onClick={logout}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            ) : (
                <div className="space-y-3">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre..."
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <button
                        onClick={() => name && login(name)}
                        disabled={!name}
                        className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-2 rounded-lg transition-colors"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            )}
        </div>
    );
}

export default function StateManagementPage() {
    return (
        <ThemeProvider>
            <UserProvider>
                <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
                    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                        <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                💾 Manejo de Estado Global
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Context API para compartir estado
                            </p>
                        </header>

                        {/* Introduction */}
                        <section className="mb-10">
                            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 p-4 mb-6">
                                <h2 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                                    ¿Qué es Context API?
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Context API permite compartir estado entre componentes sin pasar props manualmente
                                    a través de cada nivel del árbol de componentes.
                                </p>
                            </div>
                        </section>

                        {/* Live Demos */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                🎮 Demos Interactivos
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <ThemeDisplay />
                                <UserDisplay />
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    💡 Ambos componentes acceden al mismo estado global usando Context.
                                    Los cambios se reflejan automáticamente en todos los componentes que usan el contexto.
                                </p>
                            </div>
                        </section>

                        {/* Code Example */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                💻 Implementación
                            </h2>

                            <div className="space-y-4">
                                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        1. Crear el Context:
                                    </h3>
                                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                        {`'use client';
import { createContext, useContext, useState } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Crear el Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useTheme() {
  return useContext(ThemeContext);
}`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        2. Envolver la app con el Provider:
                                    </h3>
                                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                        {`export default function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  );
}`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        3. Usar el Context en componentes:
                                    </h3>
                                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                        {`function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
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

                            <div className="space-y-3">
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <h3 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                                        ✓ Crea hooks personalizados
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        Usa hooks como useTheme() en lugar de useContext(ThemeContext) directamente
                                    </p>
                                </div>

                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                                        ✓ Separa contextos por dominio
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        No pongas todo en un solo contexto. Crea contextos separados para temas, usuario, etc.
                                    </p>
                                </div>

                                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                                    <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">
                                        ⚠️ Evita re-renders innecesarios
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                        Divide contextos grandes en contextos más pequeños para evitar que todos los componentes se re-rendericen
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                            <Link
                                href="/clase-2/ejemplos/hooks-demo"
                                className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:underline"
                            >
                                ← Anterior: React Hooks
                            </Link>
                            <Link
                                href="/clase-2/ejemplos/todo-app"
                                className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:underline"
                            >
                                Siguiente: Todo App →
                            </Link>
                        </footer>
                    </div>
                </div>
            </UserProvider>
        </ThemeProvider>
    );
}
