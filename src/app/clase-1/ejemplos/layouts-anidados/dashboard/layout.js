export default function DashboardLayout({ children }) {
    return (
        <div className="border-4 border-green-500 dark:border-green-600 rounded-lg overflow-hidden">
            <div className="bg-green-500 dark:bg-green-600 text-white p-4">
                <h3 className="text-lg font-bold">🎯 Dashboard Layout (Nivel 3)</h3>
                <p className="text-green-100 text-sm">
                    Este es el tercer nivel de layouts anidados
                </p>
            </div>
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-48 bg-green-100 dark:bg-green-900/30 p-4">
                    <nav className="space-y-2">
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            Navegación
                        </div>
                        <a href="#" className="block px-3 py-2 bg-green-200 dark:bg-green-800 rounded text-gray-900 dark:text-white text-sm">
                            📊 Overview
                        </a>
                        <a href="#" className="block px-3 py-2 hover:bg-green-200 dark:hover:bg-green-800 rounded text-gray-700 dark:text-gray-300 text-sm">
                            📈 Analytics
                        </a>
                        <a href="#" className="block px-3 py-2 hover:bg-green-200 dark:hover:bg-green-800 rounded text-gray-700 dark:text-gray-300 text-sm">
                            ⚙️ Settings
                        </a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
