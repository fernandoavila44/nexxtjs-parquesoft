'use client';

export default function ReloadButton() {
    return (
        <button
            onClick={() => window.location.reload()}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
            🔄 Recargar Página
        </button>
    );
}
