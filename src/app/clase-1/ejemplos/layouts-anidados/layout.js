export default function LayoutsAnidadosLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
            <div className="border-4 border-orange-500 dark:border-orange-600 m-4 rounded-lg">
                <div className="bg-orange-500 dark:bg-orange-600 text-white p-4">
                    <h2 className="text-xl font-bold">📐 Layout de Ejemplos (Nivel 2)</h2>
                    <p className="text-orange-100 text-sm">
                        Este layout envuelve todas las páginas en /clase-1/ejemplos/layouts-anidados/*
                    </p>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
