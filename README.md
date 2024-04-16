# StudentsFrom

## Descripción
StudentsFrom es una aplicación web desarrollada con React y Vite que permite obtener información sobre estudiantes que han aprobado un curso consultando una API específica. El formulario de consulta recibe datos del estudiante, realiza una petición a la API y muestra si el estudiante aprobó o no el curso.

## Configuración del Proyecto

### Instalación
Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la terminal:

```bash
npm install
```

### Ejecución
Para ejecutar la aplicación en un entorno de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado.

### Pruebas
Para ejecutar las pruebas del proyecto, utiliza el siguiente comando:

```bash
npm test
```

## Estructura del Proyecto
La estructura del proyecto es la siguiente:

```
StudentsFrom/
├── node_modules/       # Dependencias del proyecto
├── public/             # Archivos públicos
├── src/                # Código fuente de la aplicación
│   ├── __test__/       # Testeo
│   ├── _mocks_/       # MOCKS de Testeo
│   ├── components/     # Componentes reutilizables
│   ├── Pages/          # Páginas de la aplicación
│   │  ├── Search/          # Páginas de la aplicación
│   │  │  ├── components/       # Componentes reutilizables de la página
│   │  │  ├── services/       # Funciones de servicio para realizar peticiones a la API
│   │  │  ├── schemas/        # Esquemas de validación de formularios con Yup
│   ├── App.jsx         # Componente principal de la aplicación
│   └── main.jsx       # Punto de entrada de la aplicación
├── .gitignore          # Archivos y directorios ignorados por Git
├── package.json        # Archivo de configuración de npm
└── README.md           # Documentación del proyecto
```

## Componentes Principales
### App.jsx
El componente App es el componente principal de la aplicación. Se encarga de definir las rutas y renderizar las páginas correspondientes.

### Pages/Search/SearchForm.jsx
La página SearchForm contiene el formulario de consulta donde se ingresan los datos del estudiante. Este formulario realiza una petición a la API y muestra si el estudiante aprobó o no el curso.

## Dependencias Principales
- **React:** Biblioteca JavaScript para construir interfaces de usuario.
- **Vite:** Build tool para aplicaciones web modernas.
- **React Hook Form:** Librería para manejar formularios en React.
- **Jest:** Framework de pruebas para JavaScript.
- **axios:** Cliente HTTP para realizar peticiones a la API.



## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto
Para cualquier consulta o sugerencia, no dudes en ponerte en contacto con el equipo de desarrollo a través de correo electrónico.
