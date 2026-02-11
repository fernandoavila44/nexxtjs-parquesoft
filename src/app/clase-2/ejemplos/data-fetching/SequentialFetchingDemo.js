async function fetchUser() {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { id: 1, name: 'Juan Pérez' };
}

async function fetchUserPosts(userId) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
        { id: 1, title: 'Mi primer post', userId },
        { id: 2, title: 'Aprendiendo Next.js', userId },
        { id: 3, title: 'React es genial', userId }
    ];
}

export default async function SequentialFetchingDemo() {
    const startTime = Date.now();

    // 1. Primero obtiene el usuario
    const user = await fetchUser();
    const userTime = Date.now();

    // 2. Luego obtiene los posts de ese usuario
    const posts = await fetchUserPosts(user.id);
    const endTime = Date.now();

    const totalTime = endTime - startTime;
    const userFetchTime = userTime - startTime;
    const postsFetchTime = endTime - userTime;

    return (
        <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Secuencia de ejecución:
                </h4>
                <div className="space-y-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded">
                        <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                            1️⃣ Usuario obtenido
                        </p>
                        <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                            {user.name} (ID: {user.id})
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Tiempo: ~{userFetchTime}ms
                        </p>
                    </div>

                    <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                        <p className="text-sm font-semibold text-orange-900 dark:text-orange-300">
                            2️⃣ Posts del usuario obtenidos
                        </p>
                        <ul className="text-xs space-y-1 mt-2">
                            {posts.map(post => (
                                <li key={post.id} className="text-gray-700 dark:text-gray-300">
                                    • {post.title}
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Tiempo: ~{postsFetchTime}ms
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    ⏱️ <strong>Tiempo total:</strong> ~{totalTime}ms
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    ⚠️ Las peticiones se ejecutaron una después de la otra. El tiempo total es la suma de ambas (~{userFetchTime + postsFetchTime}ms).
                </p>
            </div>
        </div>
    );
}
