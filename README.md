# 📚 Curso de Next.js - Material Educativo (Parquesoft)

Este repositorio contiene el material de estudio, código de ejemplo y proyectos prácticos para el **Curso de Next.js**. El objetivo de este proyecto es enseñar a construir aplicaciones web modernas utilizando Next.js desde sus fundamentos hasta conceptos avanzados de obtención de datos y manejo de estado.

El proyecto está estructurado de manera interactiva, permitiendo a los estudiantes explorar teoría y probar demostraciones funcionales en tiempo real para cada tema.

---

## 🛠️ Temáticas del Curso

El curso está organizado en clases progresivas:

### 🚀 Clase 1: Fundamentos de Next.js
En esta clase se abordan los pilares fundamentales del framework utilizando el **App Router**:
- **Sistema de Rutas basado en Archivos (File-based Routing):** Uso de `page.js` para páginas públicas, `layout.js` para vistas compartidas, rutas dinámicas mediante `[param]` y agrupación de rutas utilizando `(grupo)`.
- **Layouts y Componentes Compartidos:** Jerarquías y cómo mantener el estado de la UI durante la navegación sin re-renderizados innecesarios.
- **Server-Side Rendering (SSR):** Generación de HTML dinámico en el servidor por cada petición para datos que cambian frecuentemente.
- **Static Site Generation (SSG):** Generación de HTML estático en tiempo de compilación para óptimo rendimiento y SEO.
- **Incremental Static Regeneration (ISR):** Combinación de estático y dinámico mediante revalidación en intervalos de tiempo.

*Ejemplos prácticos incluidos:*
- [x] Rutas Dinámicas
- [x] Demostración de SSR
- [x] Demostración de SSG
- [x] Layouts Anidados

---

### 📊 Clase 2: Data Fetching y Manejo de Estado
Esta clase se enfoca en la interactividad, la comunicación con APIs y la administración de datos en la aplicación:
- **Client vs Server Components:** Entendimiento profundo del renderizado híbrido de Next.js, cuándo usar la directiva `'use client'` y cómo minimizar el bundle de JavaScript en el cliente.
- **Patrones de Data Fetching:** Obtención de datos en paralelo (`Promise.all`) versus secuencial, y control de errores en las peticiones.
- **React Hooks en Next.js:** Uso de hooks estándar de React (`useState`, `useEffect`) y hooks de enrutamiento de Next.js (`useRouter`, `useSearchParams`).
- **Manejo de Estado:** Estrategias de estado Local, Compartido (Props), Global (Context API) y de Servidor (Caching y revalidación).

*Ejemplos prácticos y proyectos incluidos:*
- [x] Comparación interactiva de Client vs Server Components
- [x] Patrones de Data Fetching en acción
- [x] Demostración de React Hooks
- [x] Gestión de Estado Global mediante Context API
- [x] **Proyecto Práctico: Todo App** (Aplicación de tareas completa con CRUD, filtrados y persistencia en LocalStorage)

---

### 🔒 Próximas Clases
- **Clase 3 (Próximamente):** Optimización, carga de archivos, despliegue y prácticas recomendadas en producción.

---

## 🚀 Cómo Empezar

### Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### Instalación de Dependencias
Clona este repositorio e instala los paquetes necesarios:

```bash
npm install
# o
yarn install
# o
pnpm install
```

### Ejecutar Servidor de Desarrollo
Para iniciar la aplicación en modo desarrollo, ejecuta:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la interfaz interactiva y comenzar el aprendizaje.

