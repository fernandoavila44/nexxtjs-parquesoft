'use client';

export default function ReloadButton() {
    return (
        <div className="flex gap-3">
            <button
                onClick={() => window.location.reload()}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
                🔄 Recargar Página
            </button>
            <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                <span>El tiempo de build permanecerá igual ⚡</span>
            </div>
        </div>
    );
}
