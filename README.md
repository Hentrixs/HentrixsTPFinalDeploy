# WhatsApp Clone - Trabajo Final Front End

Este proyecto es una aplicación de chat inspirada en WhatsApp Web/Desktop, desarrollada como trabajo final para la cursada de Front End. Se centra en ofrecer una experiencia de usuario fluida, una arquitectura limpia y un diseño fiel al original.

## 🚀 Funcionalidades Principales

- **Gestión de Contactos**: Lista dinámica de contactos con visualización de últimos mensajes y notificaciones de mensajes no leídos.
- **Búsqueda Avanzada**: Buscador en tiempo real que filtra contactos instantáneamente por nombre.
- **Filtros de Categoría**: Organización de chats por "Todos", "No leídos", "Favoritos" y "Grupos".
- **Mensajería Reactiva**: Envío de mensajes con actualización inmediata en la lista de chats y persistencia de conversación.
- **Pantalla de Bienvenida**: Interfaz de "WhatsApp Desktop" que aparece por defecto cuando no hay un chat seleccionado, gestionada mediante rutas inteligentes.
- **Diseño Responsivo**: Adaptado para diferentes resoluciones, incluyendo modo escritorio y ajustes para pantallas menores.

## 🛠️ Tecnologías y Herramientas

### Core
- **React**: Biblioteca principal para la construcción de la interfaz por componentes.
- **Vite**: Herramienta de construcción y servidor de desarrollo ultra rápido.

### Enrutamiento y Navegación
- **React Router**: Gestión de rutas anidadas (`Nested Routes`), rutas de índice (`Index Routes`) y contenedores dinámicos (`Outlet`) para un intercambio de componentes profesional.

### Gestión de Estado
- **Context API**: Centralización del estado global de mensajes y filtros de la barra lateral.
- **Hooks (useState, useRef, useEffect)**: Manejo síncrono y asíncrono del estado, optimización de búsqueda y efectos secundarios.

### Estilos y Diseño
- **Vanilla CSS**: Estilos personalizados utilizando variables CSS, Flexbox y Media Queries para un control total del diseño.
- **react-icons**: Biblioteca de íconos para implementar el switch de temas (Sol/Luna) y otros elementos visuales de forma eficiente.
- **SVG**: Iconografía optimizada y escalable.

### Arquitectura
- **Service Pattern**: Separación de la lógica de datos (filtrado, búsqueda) en servicios independientes para un código más limpio y escalable.

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
