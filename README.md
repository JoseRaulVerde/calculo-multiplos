# Cálculo de Múltiplos

Este proyecto es una aplicación interactiva desarrollada con **Ionic**, **Angular** y **Firebase**. Permite a los usuarios calcular los múltiplos de números específicos (3, 5 y 7) e interactuar con una base de datos en tiempo real.

## Características

- **Cálculo de Múltiplos:** Ingrese cualquier número para identificar sus múltiplos de 3, 5 y 7.
- **Interfaz Dinámica:** Implementación de scroll y diseño responsivo para dispositivos móviles.
- **Visualización de Resultados:** Muestra los números procesados con colores diferenciados según sus múltiplos.
  - Verde para múltiplos de 3.
  - Azul para múltiplos de 5.
  - Rojo para múltiplos de 7.
  - Negro si no tiene múltiplos.
- **Firebase Realtime Database:**
  - Guarda los números y colores asociados en la base de datos en tiempo real.
  - Visualiza los números guardados con el historial en orden inverso (lo más reciente primero).
- **Skeleton Loader:** Visualiza un cargador animado mientras se obtienen los datos de Firebase.
- **Diseño Responsivo:** Optimizado para dispositivos móviles y escritorio.

## Tecnologías Utilizadas

- **Ionic Framework:** Para la construcción de la interfaz móvil y web.
- **Angular:** Para la lógica de la aplicación y gestión de componentes.
- **Firebase Realtime Database:** Como base de datos en tiempo real.
- **TypeScript:** Para una escritura tipada del código.
- **HTML y CSS:** Para el diseño y maquetación de la aplicación.

## Capturas de Pantalla

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.g

cd tu-repositorio
Instala las dependencias:

npm install
Configura Firebase:

Crea un proyecto en Firebase.
Configura las credenciales en el archivo src/config/firebaseconfig.ts.

Inicia el servidor de desarrollo:

ionic serve
Uso
Ingrese un número en el campo proporcionado.
Presione el botón "Buscar Múltiplo".
Revise los resultados y los números guardados en la base de datos en tiempo real.
