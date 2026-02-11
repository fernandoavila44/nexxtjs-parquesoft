'use client';

import { useState } from 'react';

export default function ErrorHandlingDemo() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchSuccess = async () => {
        setLoading(true);
        try {
            // Simulamos una petición exitosa
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = { title: 'Datos obtenidos correctamente', id: 1 };
            setResult({ success: true, data, error: null });
        } catch (error) {
            setResult({ success: false, data: null, error: error.message });
        } finally {
            setLoading(false);
        }
    };

    const fetchError = async () => {
        setLoading(true);
        try {
            // Simulamos una petición que falla
            await new Promise(resolve => setTimeout(resolve, 1000));
            throw new Error('Error de red: No se pudo conectar al servidor');
        } catch (error) {
            setResult({ success: false, data: null, error: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Prueba el manejo de errores:
                </h4>
                <div className="flex gap-3">
                    <button
                        onClick={fetchSuccess}
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                        ✅ Petición Exitosa
                    </button>
                    <button
                        onClick={fetchError}
                        disabled={loading}
                        className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                        ❌ Petición con Error
                    </button>
                </div>
            </div>

            {loading && (
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        ⏳ Cargando...
                    </p>
                </div>
            )}

            {result && !loading && (
                <div className={`p-4 rounded-lg ${result.success
                        ? 'bg-green-100 dark:bg-green-900/30'
                        : 'bg-red-100 dark:bg-red-900/30'
                    }`}>
                    {result.success ? (
                        <div>
                            <p className="text-sm font-semibold text-green-900 dark:text-green-300 mb-2">
                                ✅ Éxito
                            </p>
                            <p className="text-xs text-gray-700 dark:text-gray-300">
                                {result.data.title}
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p className="text-sm font-semibold text-red-900 dark:text-red-300 mb-2">
                                ❌ Error
                            </p>
                            <p className="text-xs text-gray-700 dark:text-gray-300">
                                {result.error}
                            </p>
                        </div>
                    )}
                </div>
            )}

            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                    💡 Este es un Client Component porque necesita interactividad (botones y estado)
                </p>
            </div>
        </div>
    );
}
