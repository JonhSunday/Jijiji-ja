# LUNE — Tienda online

## Descripción

LUNE es una tienda online ficticia de ropa y accesorios creada como proyecto escolar. La página permite explorar productos, buscarlos, filtrarlos por categoría y agregarlos a un carrito.

La idea de la tienda es tener una identidad moderna, juvenil y sencilla, con colores neutros y detalles en bordó. Los productos utilizan fotografías de Unsplash cargadas mediante URL.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Google Fonts

No se utilizaron frameworks como React, Vue o Angular.

## Funcionalidades principales

- Mostrar productos.
- Buscar productos por nombre.
- Filtrar productos por categoría.
- Ver nombre, imagen, precio y descripción.
- Agregar productos al carrito.
- Aumentar o disminuir cantidades.
- Eliminar productos.
- Calcular subtotal y total automáticamente.
- Mostrar un mensaje cuando se realiza una acción.
- Mostrar un mensaje cuando el carrito está vacío.
- Diseño responsive para computadora, tablet y celular.

## Funcionalidades opcionales

### Favoritos
Cada producto tiene un botón de corazón. Los favoritos se guardan en LocalStorage.

### Modo oscuro
El botón de la luna permite cambiar entre modo claro y oscuro. La elección también queda guardada.

### Descuentos
Hay tres códigos de ejemplo:

- LUNE10 → 10% de descuento
- LUNE20 → 20% de descuento
- BIENVENIDA → 15% de descuento

### LocalStorage
El carrito y los favoritos se guardan en el navegador, por lo que no se pierden al recargar la página.

## Cómo utilizar la página

1. Descargar o clonar el proyecto.
2. Mantener los cuatro archivos en la misma carpeta.
3. Abrir `index.html` en un navegador.
4. También se puede utilizar Visual Studio Code y abrir el archivo con Live Server.

## Cómo cambiar los productos

Los productos están en `script.js`, dentro de:

`const products = [...]`

Cada producto tiene:

- `id`: número identificador.
- `name`: nombre.
- `price`: precio.
- `category`: categoría.
- `description`: descripción.
- `image`: URL de la imagen.

## Cómo cambiar los colores

Los colores principales están al comienzo de `style.css`, dentro de `:root`.

Por ejemplo:

`--bg` = fondo.

`--text` = color del texto.

`--accent` = color principal de la tienda.

`--card` = fondo de las tarjetas.

## Cómo cambiar el nombre

El nombre aparece principalmente en `index.html`, en:

- El `<title>`.
- El logo del `<header>`.
- El `<footer>`.

También aparece en algunos mensajes de `script.js`.

## Cómo cambiar las categorías

Las categorías se escriben dentro de cada producto en `script.js`.

Por ejemplo:

`category: "Ropa"`

Si se cambia por `"Accesorios"` o `"Calzado"`, el filtro se actualiza automáticamente.

## Cómo cambiar los descuentos

Los códigos están en la función `applyDiscount()` de `script.js`.

Ejemplo:

`LUNE10: 10`

Significa que el código LUNE10 aplica un 10% de descuento.

## Uso de Inteligencia Artificial

La Inteligencia Artificial se utilizó como herramienta de apoyo durante el desarrollo del proyecto. Ayudó a organizar la estructura inicial del sitio, proponer ideas de diseño y revisar partes del código.

El proyecto fue revisado y adaptado para comprender cómo funciona cada parte y poder explicarla oralmente.

## Cómo subirlo a GitHub

1. Crear una cuenta en GitHub.
2. Crear un repositorio nuevo.
3. Subir `index.html`, `style.css`, `script.js` y `README.md`.
4. Guardar los cambios.

## Cómo publicarlo con GitHub Pages

1. Entrar al repositorio.
2. Ir a `Settings`.
3. Entrar en `Pages`.
4. En "Build and deployment", elegir `Deploy from a branch`.
5. Seleccionar la rama `main` y la carpeta `/root`.
6. Guardar.
7. GitHub generará un enlace público para la página.

## Estructura

```text
lune-tienda/
│
├── index.html
├── style.css
├── script.js
└── README.md
```
