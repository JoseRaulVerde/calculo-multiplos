# Cálculo de Múltiplos

Este proyecto es una aplicación interactiva desarrollada con **Ionic**, **Angular** y **Firebase**. Permite a los usuarios calcular los múltiplos de números específicos (3, 5 y 7) e interactuar con una base de datos en tiempo real.

## Características

- **Cálculo de Múltiplos:** Ingrese cualquier número para identificar sus múltiplos de 3, 5 y 7.
- **Interfaz Dinámica:** Implementación de scroll y diseño responsivo para dispositivos móviles.
- **Visualización de Resultados:**
  - Muestra los números procesados con colores diferenciados según sus múltiplos:
    - **Verde:** Múltiplos de 3.
    - **Azul:** Múltiplos de 5.
    - **Rojo:** Múltiplos de 7.
    - **Negro:** Si no tiene múltiplos.
- **Firebase Realtime Database:**
  - Guarda los números y colores asociados en la base de datos en tiempo real.
  - Visualiza los números guardados con el historial en orden inverso (lo más reciente primero).
- **Skeleton Loader:** Cargador animado mientras se obtienen los datos de Firebase.
- **Diseño Responsivo:** Optimizado para dispositivos móviles y escritorio.

## Tecnologías Utilizadas

- **Ionic Framework:** Para la construcción de la interfaz móvil y web.
- **Angular:** Para la lógica de la aplicación y gestión de componentes.
- **Firebase Realtime Database:** Como base de datos en tiempo real.
- **TypeScript:** Para una escritura tipada del código.
- **HTML y CSS:** Para el diseño y maquetación de la aplicación.

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/JoseRaulVerde/calculo-multiplos.git
   cd calculo-multiplos
   ```

## Configura Firebase:

1. **Crea un proyecto en Firebase Console.**
2. **Agrega las credenciales en el archivo** `src/environments/environment.ts`.
3. **Usa el archivo de ejemplo proporcionado:** `src/environments/environment.example.ts`.

### Ejemplo:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    databaseURL: "TU_DATABASE_URL",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
  },
};
```
