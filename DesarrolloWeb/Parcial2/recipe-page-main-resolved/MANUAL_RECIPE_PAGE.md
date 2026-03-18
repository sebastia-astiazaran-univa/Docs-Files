# Manual para el proyecto Recipe Page

**Para alumnos de preparatoria — Desarrollo Web**

Este manual te guía paso a paso para resolver el reto *Recipe page* de Frontend Mentor usando HTML y CSS, con diseño adaptable a móvil y escritorio.

---

## 1. Introducción al reto

### 1.1 ¿Qué vas a construir?

Vas a crear **una página web de una receta de omelette**. La página tendrá:

- Una imagen principal de la receta
- Título y descripción
- Tiempo de preparación
- Lista de ingredientes
- Pasos (instrucciones) numerados
- Tabla de información nutricional

El objetivo es que tu página se **parezca lo más posible** al diseño de referencia.

### 1.2 Archivos importantes del proyecto

Dentro de la carpeta `recipe-page-main` encontrarás:

| Archivo o carpeta | Para qué sirve |
|-------------------|----------------|
| `index.html` | Archivo principal de la página (aquí escribirás el contenido) |
| `assets/images/image-omelette.jpeg` | Imagen del omelette |
| `style-guide.md` | Colores, fuentes y tamaños que debes usar |
| `design/mobile-design.jpg` | Cómo debe verse en celular |
| `design/desktop-design.jpg` | Cómo debe verse en computadora |

**Recomendación:** Ten abierta una ventana con el diseño (mobile o desktop) para ir comparando mientras programas.

### 1.3 Frontend Mentor y el style-guide

El reto viene de **Frontend Mentor**, una página con ejercicios para practicar HTML y CSS. El archivo **style-guide.md** indica los colores exactos (en formato HSL), las fuentes (Young Serif y Outfit) y el tamaño de letra base (16px). Usa ese archivo como referencia cuando apliques estilos.

---

## 2. Preparar el entorno de trabajo

### 2.1 Abrir el proyecto en VS Code

1. Abre **VS Code**.
2. Menú **Archivo → Abrir carpeta** (o *File → Open Folder*).
3. Navega hasta la carpeta **recipe-page-main** y selecciónala.
4. Haz clic en **Abrir**.

Deberías ver en el panel izquierdo los archivos del proyecto (`index.html`, carpeta `assets`, etc.).

### 2.2 Instalar Live Server (solo la primera vez)

1. En VS Code, abre el panel de **Extensiones** (ícono de cuadrados).
2. Busca **Live Server**.
3. Instala la extensión **Live Server** (autor: Ritwick Dey).
4. Reinicia VS Code si te lo pide.

### 2.3 Ver la página en el navegador

1. Abre el archivo `index.html`.
2. Clic derecho dentro del editor → **Open with Live Server**.
3. Se abrirá el navegador con tu página (por ejemplo `http://127.0.0.1:5500/...`).

Cada vez que guardes (`Ctrl + S` o `Cmd + S`), la página se actualizará sola.

---

## 3. Analizar el diseño y el contenido

### 3.1 Observar el diseño

Abre las imágenes `design/mobile-design.jpg` y `design/desktop-design.jpg`. Fíjate en:

- Una **tarjeta blanca** centrada sobre un fondo de color claro.
- Arriba: **imagen** de la receta.
- Debajo: **título** grande, **texto** descriptivo, recuadro de **tiempo de preparación**, lista de **ingredientes**, lista **numerada** de instrucciones y sección de **nutrición** con filas (Calorías, Carbohidratos, Proteína, Grasa).

### 3.2 Lista de secciones

Antes de escribir código, haz una lista de las partes de la página:

1. Imagen principal  
2. Título y descripción  
3. Tiempo de preparación  
4. Ingredientes  
5. Instrucciones  
6. Nutrición  
7. Pie de página (attribution)

### 3.3 Relacionar con etiquetas HTML

Piensa qué etiquetas usarás:

- **Contenedor general:** `main`, `article` o `div` con clase (por ejemplo `recipe-card`).
- **Títulos:** `h1` (título principal), `h2` o `h3` (subtítulos).
- **Párrafos:** `p`.
- **Listas:** `ul` y `li` para ingredientes; `ol` y `li` para instrucciones.
- **Nutrición:** tabla (`table`, `tr`, `td`) o varios `div` por fila.

Usar etiquetas que describan el contenido (semántica) ayuda a la accesibilidad y al orden del código.

---

## 4. Construir la estructura HTML paso a paso

Trabaja siempre en **index.html**.

### Paso 1: Estructura base del documento

Asegúrate de tener:

- `<!DOCTYPE html>`
- `<html lang="en">`
- `<head>...</head>` con:
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - `<title>Frontend Mentor | Recipe page</title>`
- `<body>...</body>`

### Paso 2: Contenedor principal

Dentro de `<body>`, crea un contenedor para toda la “tarjeta” de la receta. Por ejemplo:

```html
<main class="recipe-card">
  <!-- aquí irá todo el contenido -->
</main>
```

Todo el contenido visible (imagen, títulos, listas, etc.) irá dentro de este contenedor.

### Paso 3: Imagen de la receta

Arriba del texto, inserta la imagen:

```html
<img src="./assets/images/image-omelette.jpeg" alt="Omelette simple en un plato">
```

- `src`: ruta a la imagen.
- `alt`: descripción breve para accesibilidad (lectores de pantalla).

### Paso 4: Título y descripción

Debajo de la imagen:

- Un **h1** con el título, por ejemplo: *Simple Omelette Recipe*.
- Un **p** con el párrafo que describe la receta (puedes usar el texto que ya viene en el `index.html` inicial).

### Paso 5: Tiempo de preparación

Crea una sección solo para el tiempo:

- Un **h2** o **h3** con el texto “Preparation time”.
- Una lista (por ejemplo **ul** con **li**) con: Total, Preparation, Cooking y sus tiempos.

Puedes envolver esta parte en un **section** o **div** con una clase, por ejemplo `prep-time`, para luego darle un fondo de color en CSS.

### Paso 6: Ingredientes

- Título “Ingredients” (**h2**).
- Lista **ul** con cada ingrediente en un **li**.

### Paso 7: Instrucciones

- Título “Instructions” (**h2**).
- Lista **ol** (ordenada); cada paso de la receta en un **li**.

### Paso 8: Nutrición

- Título “Nutrition” (**h2**).
- Un párrafo que diga que la tabla muestra valores por porción sin rellenos adicionales.
- Luego:
  - Opción A: una **table** con filas para Calories, Carbs, Protein, Fat y sus valores.
  - Opción B: varios **div** (o una lista) donde cada fila tenga dos partes: nombre del nutriente y cantidad.

### Paso 9: Attribution

Al final del `body`, mantén el bloque de atribución:

```html
<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
  Coded by <a href="#">Tu Nombre</a>.
</div>
```

Sustituye “Tu Nombre” por tu nombre cuando entregues.

---

## 5. Conectar la hoja de estilos CSS

### 5.1 Crear styles.css

1. En el panel de archivos de VS Code, clic derecho sobre la carpeta del proyecto.
2. **New File**.
3. Nombre del archivo: **styles.css**.

### 5.2 Enlazar el CSS en el HTML

En el **head** de `index.html`, antes de `</head>`, añade:

```html
<link rel="stylesheet" href="styles.css">
```

### 5.3 Comprobar que funciona

En `styles.css` escribe:

```css
body {
  background-color: #f0f0f0;
}
```

Guarda y mira el navegador. Si el fondo cambia, el CSS está bien enlazado. Luego puedes cambiar el color por el que indique el `style-guide.md`.

---

## 6. Estilos base y tipografía

### 6.1 Reset básico

Al inicio de `styles.css` puedes poner:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
```

`box-sizing: border-box` hace que el ancho y alto incluyan padding y borde, lo que facilita maquetar.

### 6.2 Colores y fuentes del style-guide

Según **style-guide.md**:

- **Colores:** White, Stone 100, Stone 150, Stone 600, Stone 900, Brown 800, Rose 800, Rose 50 (todos en HSL).
- **Fuentes:** Young Serif (peso 400) y Outfit (400, 600, 700). Puedes enlazarlas desde Google Fonts en el `<head>`.

Ejemplo de enlace a Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Young+Serif&display=swap" rel="stylesheet">
```

### 6.3 Estilos globales del body

En `styles.css`:

- `font-family`: por ejemplo Outfit para el texto general.
- `background-color`: fondo de la página (p. ej. Stone 100).
- `color`: color del texto (p. ej. Stone 600).
- Para centrar la tarjeta: puedes usar `display: flex`, `justify-content: center`, `align-items: center` y `min-height: 100vh` en el `body`.

### 6.4 Estilo de la tarjeta (.recipe-card)

- `background-color: white`
- `border-radius: 16px` (o el valor que prefieras)
- `max-width: 600px` (o 736px para desktop)
- `padding: 24px` (o más en desktop)
- `box-shadow` suave (opcional)

### 6.5 Títulos y párrafos

- **h1:** fuente Young Serif, tamaño grande, color Brown 800 o Stone 900.
- **h2:** mismo estilo o un poco más pequeño; color similar.
- **p:** tamaño 16px, color Stone 600, `line-height` cómodo (p. ej. 1.5).

Recuerda el **modelo de caja**: contenido, padding, borde y margin. El padding es el espacio interior; el margin, el espacio exterior.

---

## 7. Maquetar las secciones (versión móvil primero)

Usa como referencia **design/mobile-design.jpg**.

### 7.1 Imagen

- Que la imagen ocupe todo el ancho del contenedor: `width: 100%`.
- `border-radius` en las esquinas si lo tiene el diseño (p. ej. 12px).

### 7.2 Tiempo de preparación

- La caja de “Preparation time” suele tener fondo Rose 50.
- `padding`, `border-radius`, y un poco de `margin` arriba y abajo.
- Lista con `padding-left` para las viñetas.

### 7.3 Ingredientes

- `ul` con `list-style` que prefieras (disc, etc.).
- `margin` y `padding` en la lista y en cada `li` para que no quede todo pegado.

### 7.4 Instrucciones

- La lista **ol** ya numera sola.
- Puedes dar `font-weight: bold` al número o dejar el estilo por defecto.
- Separa cada `li` con `margin-bottom`.

### 7.5 Nutrición

- Cada fila: dos columnas (nombre del nutriente y valor).
- Puedes usar **table** o **div** con `display: flex` y `justify-content: space-between`.
- Líneas entre filas: `border-bottom` en cada fila (excepto quizá la última).

Ejemplo de fila con flex:

```css
.nutrition-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid hsl(30, 18%, 87%);
}
```

---

## 8. Hacer la página responsive (escritorio)

### 8.1 Enfoque mobile first

Primero diseñas para pantalla pequeña (móvil). Luego, con **media queries**, añades estilos para pantallas más grandes.

### 8.2 Media query

Al final de `styles.css`:

```css
@media (min-width: 768px) {
  .recipe-card {
    max-width: 736px;
    padding: 40px;
  }
}
```

Todo lo que pongas dentro de `@media (min-width: 768px) { ... }` solo se aplica cuando el ancho de la pantalla sea **mayor o igual** a 768px.

### 8.3 Ajustes para escritorio

Dentro de la media query puedes:

- Aumentar `max-width` de `.recipe-card`.
- Aumentar `padding`.
- Ajustar tamaños de fuente si lo indica el diseño desktop.
- Ajustar márgenes para que la tarjeta quede centrada y con buen espacio.

Compara siempre con **design/desktop-design.jpg**.

---

## 9. Revisión final

- [ ] Todas las secciones están (imagen, título, descripción, tiempo, ingredientes, instrucciones, nutrición).
- [ ] El texto es legible (tamaño y contraste).
- [ ] En pantalla estrecha (móvil) se ve bien.
- [ ] En pantalla ancha (escritorio) se ve bien.
- [ ] Has puesto tu nombre en “Coded by”.
- [ ] Los colores y fuentes se acercan al style-guide.

---

## Ejemplo guiado (cómo pensar el proyecto)

### Parte 1: Pensar antes de programar

1. Abre el diseño (mobile o desktop).
2. Di en voz alta o por escrito: “Arriba hay una imagen, luego un título grande, luego un texto…”
3. Anota: imagen → `img`; título → `h1`; texto → `p`; cada bloque (tiempo, ingredientes, etc.) → `section` con `h2` y listas o tabla.

### Parte 2: HTML por capas

1. Primero escribe solo la estructura: un `main` y dentro varias `section` con solo los títulos (h1, h2).
2. Luego ve rellenando cada sección: primero la imagen, después el título y el párrafo, después la lista de ingredientes, etc.

### Parte 3: Probar estilos

1. Cambia el color de fondo del `body` y mira el resultado.
2. Añade un `border: 1px solid red` a `.recipe-card` para ver hasta dónde llega la caja.
3. Modifica el `padding` y observa cómo cambia el espacio interior.

### Parte 4: Probar la media query

1. Añade la media query y cambia el `max-width` de `.recipe-card`.
2. Redimensiona la ventana del navegador: en pantalla pequeña verás el estilo móvil; en pantalla grande, el de escritorio.

---

**¡Listo!** Con estos pasos puedes completar el proyecto Recipe page de forma ordenada y entender cada parte. Si algo no te sale, revisa el diseño y el style-guide y ajusta poco a poco.
