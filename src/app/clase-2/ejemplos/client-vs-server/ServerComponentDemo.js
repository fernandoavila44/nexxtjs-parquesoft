// Server Component - no necesita 'use client'

async function getServerTime() {
    // Simulamos una operación del servidor
    return new Date().toISOString();
}

export default async function ServerComponentDemo() {
    const serverTime = await getServerTime();

    return (
        <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    📋 Características:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>No envía JavaScript al cliente</li>
                    <li>Puede ser async</li>
                    <li>Acceso directo al servidor</li>
                    <li>Sin interactividad</li>
                </ul>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                    <strong>Hora del servidor:</strong>
                </p>
                <p className="text-lg font-mono text-blue-900 dark:text-blue-300">
                    {serverTime}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    💡 Recarga la página para ver un nuevo timestamp
                </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                    ⚠️ Este componente no puede usar onClick, useState, o useEffect
                </p>
            </div>
        </div>
    );
}
