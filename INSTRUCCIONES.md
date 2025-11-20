# 🚀 Instrucciones de Instalación y Ejecución

## Paso 1: Instalar Node.js (si no lo tienes)
Si no tienes Node.js instalado, descárgalo desde: https://nodejs.org/

Verifica que esté instalado ejecutando en la terminal:
```bash
node --version
npm --version
```



## Paso 2: Instalar las dependencias del proyecto
Abre la terminal en la carpeta del proyecto (`E:\Clover\Clover`) y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias (React, TypeScript, Tailwind CSS, etc.).

## Paso 3: Ejecutar el servidor de desarrollo
Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

## Paso 4: Abrir en el navegador
Después de ejecutar `npm run dev`, verás algo como:

```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Abre tu navegador y ve a: **http://localhost:5173/**

## ¡Listo! 🎉

Tu aplicación debería estar funcionando. Verás el Sistema EPP con:
- Dashboard con estadísticas
- Inventario de productos
- Gestión de asignaciones
- Y todas las funcionalidades

## Comandos útiles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Crear versión de producción
- `npm run preview` - Previsualizar versión de producción

## Solución de problemas

Si encuentras algún error:
1. Asegúrate de estar en la carpeta correcta del proyecto
2. Borra la carpeta `node_modules` y ejecuta `npm install` de nuevo
3. Verifica que tengas Node.js versión 18 o superior

