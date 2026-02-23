---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-size: 28px;
  }
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 42px;
  }
---
# **Módulo 2: HTML - Fundamentos**

### Clase 6 a 10

Duración: 40 minutos cada clase  
Incluye ejercicios prácticos y tarea integradora

---

<!-- _class: default -->

# **Clase 6: Introducción a HTML**

## Temas:
- Sintaxis básica de HTML
- Estructura de documento HTML5
- Etiquetas básicas: `<html>`, `<head>`, `<body>`

---

## **Sintaxis básica de HTML**
- HTML usa **etiquetas** para marcar contenido.
- Una etiqueta se escribe entre `< >`, generalmente con apertura y cierre:
  ```html
  <etiqueta>contenido</etiqueta>
  ```
- Las etiquetas pueden tener **atributos**:
  ```html
  <etiqueta atributo="valor">contenido</etiqueta>
  ```

---

## **Estructura de un documento HTML5**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi primera página</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>
</body>
</html>
```

- `<!DOCTYPE html>`: indica que es HTML5.
- `<html>`: raíz del documento.
- `<head>`: metadatos (título, codificación, enlaces a CSS, etc.).
- `<body>`: contenido visible.

---

## **Ejemplo práctico**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Mi página</title>
</head>
<body>
    <p>Este es mi primer párrafo.</p>
</body>
</html>
```

---

## **Ejercicio en clase (15 min)**
Crear tu primera página HTML que incluya:
- Un título principal (`<h1>`)
- Un párrafo de presentación
- Un subtítulo (`<h2>`)

Guárdala como `index.html` y ábrela en el navegador.

---

## **Tarea para casa**
Agrega a tu página:
- Otro párrafo
- Un encabezado de nivel 3
- Comentarios HTML explicando cada parte

---

# **Clase 7: Etiquetas de texto y contenido**

## Temas:
- Encabezados (`<h1>` a `<h6>`)
- Párrafos, negritas, cursivas
- Listas ordenadas y no ordenadas

---

## **Encabezados**
```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Sección</h3>
<!-- ... hasta h6 -->
```
- Usarlos jerárquicamente (importante para accesibilidad y SEO).

---

## **Énfasis en el texto**
- **Negrita**: `<strong>` (importancia) o `<b>` (estilo)
- *Cursiva*: `<em>` (énfasis) o `<i>` (estilo)

```html
<p>Esto es <strong>muy importante</strong> y esto es <em>enfático</em>.</p>
```

---

## **Listas**
- **No ordenadas** (`<ul>`):
  ```html
  <ul>
      <li>Manzanas</li>
      <li>Peras</li>
  </ul>
  ```
- **Ordenadas** (`<ol>`):
  ```html
  <ol>
      <li>Primero</li>
      <li>Segundo</li>
  </ol>
  ```

---

## **Ejemplo combinado**
```html
<h1>Mi biografía</h1>
<p>Me llamo Ana y me gusta <strong>programar</strong>.</p>
<h2>Mis hobbies</h2>
<ul>
    <li>Leer</li>
    <li>Viajar</li>
    <li>Codificar</li>
</ul>
```

---

## **Ejercicio en clase (20 min)**
Crear una página de biografía personal que incluya:
- Nombre como encabezado principal
- Párrafo de presentación
- Lista de habilidades o gustos (usar negritas/cursivas)
- Lista ordenada de metas

---

## **Tarea para casa**
Ampliar la biografía:
- Agregar una sección de "libros favoritos" con lista anidada.
- Usar correctamente los niveles de encabezado.

---

# **Clase 8: Enlaces e imágenes**

## Temas:
- Etiqueta `<a>` y atributos
- Rutas absolutas y relativas
- Imágenes con `<img>`

---

## **Enlaces con `<a>`**
- Atributo `href`: destino del enlace.
- `target="_blank"` abre en nueva pestaña.
- `title` para información emergente.

```html
<a href="https://ejemplo.com" target="_blank" title="Ir a Ejemplo">
    Visitar Ejemplo
</a>
```

---

## **Rutas**
- **Absoluta**: URL completa (https://...)
- **Relativa**: desde la ubicación actual del archivo
  - `imagen.jpg` (misma carpeta)
  - `carpeta/archivo.html`
  - `../otra-carpeta/` (subir un nivel)

---

## **Imágenes con `<img>`**
- Es una etiqueta vacía (no necesita cierre).
- Atributos:
  - `src`: ruta de la imagen.
  - `alt`: texto alternativo (obligatorio para accesibilidad).
  - `width` y `height` (en píxeles o porcentaje).

```html
<img src="foto.jpg" alt="Descripción de la foto" width="300">
```

---

## **Ejemplo galería simple**
```html
<h2>Galería</h2>
<img src="img/playa.jpg" alt="Playa al atardecer">
<img src="img/montaña.jpg" alt="Vista de montaña">
<p>Visita <a href="galeria.html">más fotos</a>.</p>
```

---

## **Ejercicio en clase (20 min)**
Crear una galería simple con:
- 3 imágenes (pueden ser de placeholder como `https://picsum.photos/200/300`).
- Un enlace a cada imagen que lleve a la imagen en grande (o a su fuente).
- Un enlace de regreso al inicio.

---

## **Tarea para casa**
Hacer una página "Mis enlaces favoritos" con:
- Lista de enlaces a sitios útiles, usando `target="_blank"`.
- Incluir un favicon (ícono en pestaña) y una imagen de perfil.

---

# **Clase 9: Tablas y formularios básicos**

## Temas:
- Estructura de tablas
- Elementos de formulario: `<input>`, `<textarea>`, `<button>`

---

## **Tablas en HTML**
```html
<table border="1">
    <caption>Horario</caption>
    <tr>
        <th>Día</th>
        <th>Actividad</th>
    </tr>
    <tr>
        <td>Lunes</td>
        <td>Estudio</td>
    </tr>
</table>
```
- `<tr>` fila, `<td>` celda, `<th>` cabecera, `<caption>` título.

---

## **Formularios: estructura básica**
- `<form>` envuelve los campos.
- Atributos: `action` (URL destino), `method` (GET/POST).
- Campos:
  - `<input type="text">`, `<input type="email">`, etc.
  - `<textarea>` para texto largo.
  - `<button type="submit">Enviar</button>`

---

## **Ejemplo de formulario**
```html
<form action="/enviar" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" rows="4"></textarea>
    
    <button type="submit">Enviar</button>
</form>
```

---

## **Combinando tablas y formularios**
Se puede usar una tabla para alinear etiquetas y campos:

```html
<form>
  <table>
    <tr>
      <td><label for="nombre">Nombre:</label></td>
      <td><input type="text" id="nombre" name="nombre"></td>
    </tr>
    <tr>
      <td><label for="email">Email:</label></td>
      <td><input type="email" id="email" name="email"></td>
    </tr>
  </table>
  <button>Enviar</button>
</form>
```

---

## **Ejercicio en clase (20 min)**
Crear un formulario de contacto usando una tabla para organizar los campos:
- Nombre, correo, mensaje (textarea).
- Un botón de enviar.
- Añadir una tabla con horarios de atención aparte.

---

## **Tarea para casa**
Diseñar un formulario de registro con:
- Campos: nombre, contraseña, fecha de nacimiento, país (select), términos (checkbox).
- Validación simple (required, type email, etc.).

---

# **Clase 10: HTML5 semántico**

## Temas:
- Etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Ventajas del HTML semántico

---

## **¿Qué es HTML semántico?**
Usar etiquetas que describen el significado del contenido, no solo su presentación.

| En lugar de `<div>` | Usamos |
|---------------------|--------|
| `<div class="header">` | `<header>` |
| `<div class="nav">` | `<nav>` |
| `<div class="main">` | `<main>` |
| `<div class="section">` | `<section>` |
| `<div class="article">` | `<article>` |
| `<div class="footer">` | `<footer>` |

---

## **Estructura semántica típica**
```html
<body>
    <header>
        <h1>Mi sitio web</h1>
        <nav> ... </nav>
    </header>
    <main>
        <article>
            <h2>Artículo principal</h2>
            <p>...</p>
        </article>
        <section>
            <h2>Comentarios</h2>
            ...
        </section>
    </main>
    <footer>
        <p>Derechos reservados</p>
    </footer>
</body>
```

---

## **Ventajas del HTML semántico**
- **Accesibilidad**: lectores de pantalla entienden la estructura.
- **SEO**: los motores de búsqueda priorizan contenido relevante.
- **Mantenibilidad**: código más claro y fácil de modificar.

---

## **Ejemplo de conversión**
**Antes (no semántico):**
```html
<div class="header">...</div>
<div class="content">...</div>
```
**Después:**
```html
<header>...</header>
<main>...</main>
```

---

## **Ejercicio en clase (20 min)**
Dado un trozo de página con solo `<div>`, convertirlo a HTML5 semántico usando las etiquetas adecuadas.

Ejemplo de página a convertir (proporcionar código con divs).

---

## **Tarea para casa**
Tomar la página de biografía personal creada en clases anteriores y reestructurarla aplicando etiquetas semánticas. Añadir un `<nav>` con enlaces internos.

---

# **Tarea integradora del módulo**

## **Objetivo:**
Crear una página web personal que integre todos los temas vistos.

### **Requisitos:**
- Estructura HTML5 correcta (doctype, meta, etc.)
- Uso de encabezados, párrafos, listas.
- Al menos una imagen y enlaces internos/externos.
- Una tabla (ej. horario, lista de precios).
- Un formulario de contacto (con campos variados).
- Estructura semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

Entrega: archivo HTML bien comentado.

---

## **¡Manos a la obra!**
¡Mucho éxito en el módulo!
```