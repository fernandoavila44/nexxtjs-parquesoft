'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all'); // all, active, completed
    const [search, setSearch] = useState('');

    // Cargar todos desde localStorage al montar
    useEffect(() => {
        const saved = localStorage.getItem('todos');
        if (saved) {
            setTodos(JSON.parse(saved));
        }
    }, []);

    // Guardar todos en localStorage cuando cambien
    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: newTodo,
                    completed: false,
                    createdAt: new Date().toISOString()
                }
            ]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    // Filtrar y buscar todos
    const filteredTodos = todos
        .filter(todo => {
            if (filter === 'active') return !todo.completed;
            if (filter === 'completed') return todo.completed;
            return true;
        })
        .filter(todo =>
            todo.text.toLowerCase().includes(search.toLowerCase())
        );

    const stats = {
        total: todos.length,
        active: todos.filter(t => !t.completed).length,
        completed: todos.filter(t => t.completed).length
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-6">
                    <header className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-6">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                            ✅ Todo App
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Proyecto práctico con CRUD completo
                        </p>
                    </header>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                {stats.total}
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Total</div>
                        </div>
                        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                                {stats.active}
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Activas</div>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                                {stats.completed}
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">Completadas</div>
                        </div>
                    </div>

                    {/* Add Todo Form */}
                    <form onSubmit={addTodo} className="mb-6">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)}
                                placeholder="¿Qué necesitas hacer?"
                                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Agregar
                            </button>
                        </div>
                    </form>

                    {/* Search and Filter */}
                    <div className="mb-6 space-y-3">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="🔍 Buscar tareas..."
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />

                        <div className="flex gap-2">
                            <button
                                onClick={() => setFilter('all')}
                                className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${filter === 'all'
                                        ? 'bg-purple-500 text-white'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                    }`}
                            >
                                Todas
                            </button>
                            <button
                                onClick={() => setFilter('active')}
                                className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${filter === 'active'
                                        ? 'bg-yellow-500 text-white'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                    }`}
                            >
                                Activas
                            </button>
                            <button
                                onClick={() => setFilter('completed')}
                                className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${filter === 'completed'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                    }`}
                            >
                                Completadas
                            </button>
                        </div>
                    </div>

                    {/* Todo List */}
                    <div className="space-y-2 mb-6">
                        {filteredTodos.length === 0 ? (
                            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                                {search ? (
                                    <p>No se encontraron tareas con "{search}"</p>
                                ) : todos.length === 0 ? (
                                    <p>No hay tareas. ¡Agrega una para empezar!</p>
                                ) : (
                                    <p>No hay tareas {filter === 'active' ? 'activas' : 'completadas'}</p>
                                )}
                            </div>
                        ) : (
                            filteredTodos.map(todo => (
                                <div
                                    key={todo.id}
                                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${todo.completed
                                            ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
                                            : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleTodo(todo.id)}
                                        className="w-5 h-5 rounded cursor-pointer"
                                    />
                                    <span
                                        className={`flex-1 ${todo.completed
                                                ? 'line-through text-gray-500 dark:text-gray-400'
                                                : 'text-gray-900 dark:text-white'
                                            }`}
                                    >
                                        {todo.text}
                                    </span>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-bold px-3 py-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Clear Completed */}
                    {stats.completed > 0 && (
                        <button
                            onClick={clearCompleted}
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors"
                        >
                            Limpiar Completadas ({stats.completed})
                        </button>
                    )}
                </div>

                {/* Features Info */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        🎯 Características Implementadas
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                                ✅ CRUD Completo
                            </h3>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li>• Crear tareas</li>
                                <li>• Leer/mostrar tareas</li>
                                <li>• Actualizar (marcar completada)</li>
                                <li>• Eliminar tareas</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                                💾 Persistencia
                            </h3>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li>• LocalStorage</li>
                                <li>• Auto-guardado</li>
                                <li>• Carga automática</li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                                🔍 Filtros y Búsqueda
                            </h3>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li>• Filtrar por estado</li>
                                <li>• Búsqueda en tiempo real</li>
                                <li>• Estadísticas</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                                🎨 UX/UI
                            </h3>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li>• Diseño moderno</li>
                                <li>• Responsive</li>
                                <li>• Dark mode</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Code Concepts */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        💡 Conceptos Aplicados
                    </h2>

                    <div className="space-y-3">
                        <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-pink-900 dark:text-pink-300 mb-1">
                                useState - Manejo de Estado
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Múltiples estados: todos, newTodo, filter, search
                            </p>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">
                                useEffect - Efectos Secundarios
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Carga y guardado automático en localStorage
                            </p>
                        </div>

                        <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold text-teal-900 dark:text-teal-300 mb-1">
                                Array Methods - Manipulación de Datos
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                map(), filter(), find() para operaciones CRUD
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
                    <div className="flex justify-between">
                        <Link
                            href="/clase-2/ejemplos/state-management"
                            className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            ← Anterior: Estado Global
                        </Link>
                        <Link
                            href="/clase-2"
                            className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:underline"
                        >
                            Volver a Clase 2 →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
