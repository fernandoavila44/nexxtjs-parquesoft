async function fetchUsers() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
        { id: 1, name: 'Juan Pérez' },
        { id: 2, name: 'María García' },
        { id: 3, name: 'Carlos López' }
    ];
}

async function fetchPosts() {
    await new Promise(resolve => setTimeout(resolve, 1200));
    return [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
        { id: 4, title: 'Post 4' }
    ];
}

export default async function ParallelFetchingDemo() {
    const startTime = Date.now();

    // ✅ Ambas peticiones se hacen simultáneamente
    const [users, posts] = await Promise.all([
        fetchUsers(),
        fetchPosts()
    ]);

    const endTime = Date.now();
    const totalTime = endTime - startTime;

    return (
        <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Resultados:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Usuarios ({users.length}):
                        </p>
                        <ul className="text-xs space-y-1">
                            {users.map(user => (
                                <li key={user.id} className="text-gray-600 dark:text-gray-400">
                                    • {user.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Posts ({posts.length}):
                        </p>
                        <ul className="text-xs space-y-1">
                            {posts.map(post => (
                                <li key={post.id} className="text-gray-600 dark:text-gray-400">
                                    • {post.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    ⏱️ <strong>Tiempo total:</strong> ~{totalTime}ms
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    💡 Ambas peticiones se ejecutaron en paralelo. El tiempo total es el máximo de ambas (~1200ms), no la suma.
                </p>
            </div>
        </div>
    );
}
