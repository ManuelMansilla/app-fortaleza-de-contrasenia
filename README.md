# App Fortaleza de Contraseña

Aplicación web en React para evaluar la fortaleza de una contraseña, copiarla al portapapeles y generar contraseñas aleatorias con opciones avanzadas.

## Características

* **Entrada de contraseña**: campo de texto para ingresar y editar la contraseña.
* **Mostrar/Ocultar**: botón para alternar la visibilidad de la contraseña.
* **Clasificación en tiempo real**: muestra "Poco segura", "Segura" o "Muy segura" a medida que se escribe.
* **Copiar al portapapeles**: botón para copiar la contraseña y mensaje de confirmación que desaparece a los 3 segundos.
* **Generador aleatorio**:

  * Longitud por defecto: 12 caracteres.
  * Incluye mayúsculas, minúsculas, números y símbolos.
* **Panel avanzado**: permite configurar:

  * Largo de la contraseña (mínimo 4, máximo 32).
  * Inclusión de minúsculas, mayúsculas, números y caracteres especiales.

## Estructura del proyecto

```
app-fortaleza-de-contrasenia/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PasswordInput.js
│   │   ├── StrengthIndicator.js
│   │   ├── CopyButton.js
│   │   └── PasswordGenerator.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Cómo ejecutar en local

1. **Clonar el repositorio**

   ```bash
   git clone git@github.com:ManuelMansilla/app-pronostico-del-clima.git
   cd app-fortaleza-de-contrasenia
   ```
2. **Instalar dependencias**

   ```bash
   npm install
   ```
3. **Iniciar servidor de desarrollo**

   ```bash
   npm start
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Repositorio

[Enlace al repositorio en GitHub](https://github.com/ManuelMansilla/app-fortaleza-de-contrasenia)

## Página

[Enlace a la página en Netlify](https://fortaleza-de-contrasenia.netlify.app/)
