'use client'; // ⚠️ Obligatorio para usar hooks

import { useState, useEffect } from 'react';

export default function ClientComponentDemo() {
    const [count, setCount] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    📋 Características:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Requiere 'use client'</li>
                    <li>Puede usar hooks</li>
                    <li>Maneja interactividad</li>
                    <li>Envía JavaScript al cliente</li>
                </ul>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Contador interactivo:</strong>
                </p>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setCount(count - 1)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        −
                    </button>
                    <span className="text-2xl font-bold text-green-900 dark:text-green-300 min-w-[60px] text-center">
                        {count}
                    </span>
                    <button
                        onClick={() => setCount(count + 1)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        +
                    </button>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    💡 Haz clic en los botones para interactuar
                </p>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Estado del componente:</strong>
                </p>
                <div className="space-y-1 text-xs font-mono">
                    <p className="text-gray-700 dark:text-gray-300">
                        useState: <span className="text-green-600 dark:text-green-400">✓ Funcionando</span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        useEffect: <span className="text-green-600 dark:text-green-400">
                            {mounted ? '✓ Ejecutado' : '⏳ Pendiente'}
                        </span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        onClick: <span className="text-green-600 dark:text-green-400">✓ Disponible</span>
                    </p>
                </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                    ✅ Este componente puede usar hooks y manejar eventos
                </p>
            </div>
        </div>
    );
}
