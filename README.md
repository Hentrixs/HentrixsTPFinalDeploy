# WhatsApp Clone - Trabajo Final Front End

Este proyecto es una aplicación de chat inspirada en WhatsApp Web/Desktop, desarrollada como trabajo final para la cursada de Front End. Se centra en ofrecer una experiencia de usuario fluida, una arquitectura limpia y un diseño fiel al original.

## 📋 Descripción del Desafío

El desafío consistió en desarrollar una **réplica funcional de WhatsApp Web** que cumpliera con los siguientes requisitos técnicos del TP Final:

- ✅ Aplicación desplegada en Vercel con funcionalidad completa
- ✅ Código versionado en GitHub con historial de commits
- ✅ Diseño 100% responsivo (320px - 2000px)
- ✅ Estilos accesibles con contraste adecuado y modo claro/oscuro
- ✅ Desarrollo en React con arquitectura de componentes
- ✅ Gestión de estado mediante Context API
- ✅ Enrutamiento dinámico con React Router (rutas anidadas y parámetros)
- ✅ Implementación de formularios funcionales
- ✅ Múltiples páginas con navegación fluida

El objetivo principal fue **replicar la experiencia de usuario de WhatsApp** manteniendo una arquitectura escalable y código limpio, aplicando los principios de programación vistos en clase (DRY, YAGNI, KISS).

## 🚀 Funcionalidades Principales

- **Gestión de Contactos**: Lista dinámica de contactos con visualización de últimos mensajes y notificaciones de mensajes no leídos.
- **Búsqueda Avanzada**: Buscador en tiempo real que filtra contactos instantáneamente por nombre.
- **Filtros de Categoría**: Organización de chats por "Todos", "No leídos", "Favoritos" y "Grupos".
- **Mensajería Reactiva**: Envío de mensajes con actualización inmediata en la lista de chats y persistencia de conversación.
- **Pantalla de Bienvenida**: Interfaz de "WhatsApp Desktop" que aparece por defecto cuando no hay un chat seleccionado, gestionada mediante rutas inteligentes.
- **Diseño Responsivo**: Adaptado para diferentes resoluciones, incluyendo modo escritorio y ajustes para pantallas menores.

## 🛠️ Tecnologías y Librerías Utilizadas

### Core
- **React 19.2.0**: Biblioteca principal para la construcción de la interfaz por componentes, utilizando hooks modernos y Context API.
- **Vite 7.2.4**: Herramienta de construcción y servidor de desarrollo ultra rápido con HMR (Hot Module Replacement).

### Enrutamiento y Navegación
- **React Router 7.10.0**: Gestión completa de rutas con:
  - Rutas anidadas (`Nested Routes`) para layouts compartidos
  - Rutas de índice (`Index Routes`) para la pantalla de bienvenida
  - Contenedores dinámicos (`Outlet`) para intercambio de componentes
  - Parámetros de URL (`/chat/:id`) para navegación dinámica entre conversaciones

### Gestión de Estado
- **Context API**: Implementación de tres contextos globales:
  - `ThemeContext`: Manejo del tema claro/oscuro
  - `MessageBoxContext`: Estado de mensajes y conversaciones activas
  - `ContactSidebarContext`: Filtros de búsqueda y categorías de contactos
- **Hooks Nativos**: `useState`, `useRef`, `useEffect`, `useContext` para manejo de estado local y efectos secundarios

### Estilos y Diseño
- **Vanilla CSS**: Estilos personalizados con sistema de diseño basado en:
  - Variables CSS (`:root` y `[data-theme]`) para tematización
  - Flexbox para layouts responsivos
  - Media Queries para breakpoints (513px, 1176px)
  - Paleta de colores oficial de WhatsApp
- **react-icons 5.5.0**: Biblioteca de íconos para UI (Material Design Icons)
- **SVG**: Iconografía optimizada y escalable

### Arquitectura
- **Service Pattern**: Separación de lógica de negocio en servicios independientes (`src/services/`)
- **Component-Based Architecture**: Estructura modular con carpetas `Components/`, `Contexts/`, `Layouts/`

## 🚧 Dificultades y Soluciones Implementadas

### 1. **Gestión de Estado Compartido entre Componentes**
**Problema**: Sincronizar el estado de mensajes entre la lista de contactos y el cuadro de chat sin prop drilling.

**Solución**: Implementación de Context API con `MessageBoxContext` y `ContactSidebarContext`, permitiendo que componentes distantes accedan al estado global sin pasar props manualmente.

### 2. **Enrutamiento Responsivo Desktop/Mobile**
**Problema**: WhatsApp Web muestra ambas columnas en desktop, pero en mobile debe navegar entre vistas.

**Solución**: Uso de rutas anidadas con `Outlet` y CSS condicional basado en media queries. En desktop, ambos componentes se renderizan simultáneamente; en mobile, React Router maneja la navegación entre vistas.

### 3. **Persistencia Visual del Tema Claro/Oscuro**
**Problema**: Lógica invertida inicial donde `darkTheme = true` activaba el tema claro.

**Solución**: Refactorización completa renombrando `darkTheme` → `lightTheme` y ajustando la lógica en `ThemeContext`, `MainLayout` y `ContactSearchForm` para mantener coherencia semántica.

### 4. **Filtrado en Tiempo Real de Contactos**
**Problema**: Renderizado ineficiente al filtrar contactos mientras el usuario escribe.

**Solución**: Implementación de un servicio de búsqueda (`searchcontact`) que filtra datos antes del renderizado, combinado con `useRef` para acceso directo al input sin re-renders innecesarios.

### 5. **Compatibilidad de Rutas en Vercel**
**Problema**: Errores de case-sensitivity en imports al deployar en Vercel (Linux) vs desarrollo local (Windows).

**Solución**: Normalización de nombres de archivos y corrección de imports para coincidir exactamente con el sistema de archivos (`WhatsAppHeader` vs `WhatsappHeader`).

### 6. **Arquitectura de Contextos Acoplada**
**Problema**: `ThemeContextProvider` renderizaba directamente `MainLayout`, limitando la reutilización.

**Solución**: Aunque se mantuvo el diseño actual por funcionalidad, se documentó como deuda técnica para futuras refactorizaciones donde el provider renderice `{children}`.

## 📦 Instalación y Uso

1. Clonar el repositorio.
2. Instalar dependencias: `npm install`
3. Iniciar en modo desarrollo: `npm run dev`

## 🤖 Colaboración con IA y Metodología de Trabajo

A partir de la segunda semana del inicio del proyecto, se incorporó el uso de Inteligencia Artificial (IA) como una herramienta estratégica de desarrollo. Esta colaboración se centró en tres pilares fundamentales:

1.  **Automatización de Procesos Repetitivos**: Agilización de tareas redundantes en el maquetado y estructuración inicial de componentes.
2.  **Refactorización y Optimización**: Limpieza de partes del código que estaban "hardcodeadas", migrando hacia un sistema de diseño basado en variables CSS (`:root`) y patrones de arquitectura más robustos (Services, Context API).
3.  **Aprendizaje Ad-hoc**: Uso de la IA como mentor personalizado para la resolución de problemas lógicos complejos y la enseñanza de mejores prácticas de React y CSS en tiempo real.
4.  **Interfaz y Estilos**: Automatización de la paleta de colores para el "Light Mode" mediante IA, facilitando la transición visual, mientras que la lógica técnica del switch de temas fue desarrollada íntegramente por el usuario.

Esta sinergia permitió elevar la calidad técnica del proyecto manteniendo al usuario como el director creativo y arquitecto de la solución.

---
*Este proyecto está en constante actualización y mejora como parte del proceso de aprendizaje en la UTN.*
