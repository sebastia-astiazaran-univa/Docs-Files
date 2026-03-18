---
marp: true
theme: default
paginate: true
backgroundColor: '#0a0a0f'
color: '#e8e8f0'
style: |
  section {
    font-family: 'Segoe UI', sans-serif;
    background-color: #0a0a0f;
    color: #e8e8f0;
    padding: 50px 60px;
  }
  h1 {
    color: #00d4aa;
    font-size: 2em;
    border-bottom: 3px solid #00d4aa;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  h2 {
    color: #7c5cfc;
    font-size: 1.5em;
  }
  h3 {
    color: #f5a623;
    font-size: 1.1em;
    margin-bottom: 8px;
  }
  code {
    background: #1a1a28;
    color: #00d4aa;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.85em;
  }
  pre {
    background: #1a1a28;
    border: 1px solid #2a2a40;
    border-radius: 8px;
    padding: 20px;
  }
  pre code {
    background: transparent;
    padding: 0;
    color: #e8e8f0;
    font-size: 0.8em;
  }
  ul li, ol li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
  .activity {
    background: #1a1a28;
    border-left: 4px solid #f5a623;
    padding: 16px 20px;
    border-radius: 0 8px 8px 0;
    margin-top: 16px;
  }
  .tip {
    background: #0d1f1a;
    border-left: 4px solid #00d4aa;
    padding: 12px 16px;
    border-radius: 0 8px 8px 0;
    font-size: 0.9em;
  }
  strong { color: #f5a623; }
  em { color: #e85d9d; }
  .cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
  }
  .tag {
    background: #00d4aa22;
    border: 1px solid #00d4aa;
    color: #00d4aa;
    padding: 4px 16px;
    border-radius: 4px;
    font-size: 0.7em;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: inline-block;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    background: #7c5cfc22;
    color: #7c5cfc;
    padding: 8px 12px;
    text-align: left;
    border-bottom: 2px solid #7c5cfc;
  }
  td {
    padding: 8px 12px;
    border-bottom: 1px solid #2a2a40;
    font-size: 0.9em;
  }
---

<!-- PORTADA PARCIAL 1 -->
# 🌐 Diseño Web
## Primer Parcial
### Fundamentos del Desarrollo Web e HTML

<div class="tag">Feb – Mar 2025 · Prof. Astiazaran</div>

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 1: Intro al Desarrollo Web            -->
<!-- ════════════════════════════════════════════ -->

# Clase 1 — ¿Qué es el Desarrollo Web?

<div class="tag">Semana 2 · Introducción</div>

**¿Qué vamos a hacer hoy?**

- 🔍 Entender cómo funciona internet de forma básica
- 💻 Conocer qué hace un desarrollador web
- 🛠️ Ver las herramientas que vamos a usar todo el semestre

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Cómo funciona internet?

Cuando abres una página web pasan 3 cosas:

1. **Tu navegador** (Chrome, Firefox) *pide* algo
2. **Un servidor** en algún lugar del mundo *responde*
3. **Tu navegador** muestra lo que recibió

```
Tú (cliente) ──── pide ────▶ Servidor
             ◀─── responde ─── Servidor
```

> 💡 Es como pedir comida a domicilio: tú pides, el restaurante prepara, te lo mandan.

---

## ¿Qué hace un desarrollador web?

| Rol | Qué hace | Tecnologías |
|-----|----------|-------------|
| **Frontend** | Lo que el usuario *ve* | HTML, CSS, JavaScript |
| **Backend** | Lo que pasa *detrás* | Python, Node.js, PHP |
| **Fullstack** | Los dos | Todo lo anterior |

**En esta materia:** nos enfocamos en **Frontend** 🎨

---

## Nuestras herramientas del semestre

### 1. VS Code — Editor de código
Tu "cuaderno" para escribir código. Gratis y profesional.

### 2. Google Chrome + DevTools
Para ver tu código en acción. `F12` abre las herramientas.

### 3. GitHub
Para guardar y compartir tu trabajo. Como un "Google Drive para código".

---

## 🎯 Actividad — Clase 1

### "Detectives de la web" (20 min)

1. Abre **3 páginas web** que uses seguido (YouTube, Instagram, lo que sea)
2. En cada una, abre las **DevTools** (`F12` o clic derecho → Inspeccionar)
3. Anota en tu libreta:
   - ¿De qué color es el fondo? ¿Cómo creen que lo pusieron?
   - ¿Qué parte te parece más difícil de hacer?
   - ¿Qué quisieras poder construir tú?

**Comparte con el grupo:** ¿qué encontraron?

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 2: Proceso de Diseño y Wireframes     -->
<!-- ════════════════════════════════════════════ -->

# Clase 2 — Proceso de Diseño y Wireframes

<div class="tag">Semana 2 · UX / Prototipado</div>

**¿Qué vamos a aprender?**

- 🗺️ Qué es el proceso de diseño web
- ✏️ Cómo hacer un wireframe (boceto de un sitio)
- 📐 Por qué planear *antes* de programar salva vidas

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## El proceso de diseño web

No se empieza a programar de inmediato. Primero:

```
1. INVESTIGAR  →  ¿Para quién es? ¿Qué necesita?
2. PLANEAR     →  Mapa del sitio, flujo de usuario
3. DISEÑAR     →  Wireframe → Prototipo
4. PROGRAMAR   →  HTML, CSS, JS
5. PUBLICAR    →  Subirlo al internet
```

> 💡 Los mejores desarrolladores son también buenos diseñadores (o trabajan muy cerca de uno)

---

## ¿Qué es un wireframe?

Un **wireframe** es el "esqueleto" de una página web.
Se hace *antes* de agregar colores, imágenes o código.

**¿Para qué sirve?**
- Para pensar en la estructura sin distraerte con el diseño
- Para mostrarle la idea a alguien sin programar nada
- Para detectar problemas antes de que cuesten tiempo

> 📝 Puedes hacerlo en papel, en Figma, o incluso en PowerPoint

---

## Partes de una página web típica

```
┌─────────────────────────────────┐
│          HEADER / NAV           │
├─────────────────────────────────┤
│                                 │
│           HERO / BANNER         │
│                                 │
├──────────┬──────────┬───────────┤
│  Sección │  Sección │  Sección  │
│    1     │    2     │    3      │
├─────────────────────────────────┤
│             FOOTER              │
└─────────────────────────────────┘
```

---

## 🎯 Actividad — Clase 2

### "Wireframe en papel" (20 min)

**Escoge una idea de sitio web** (puede ser tuyo o de algo que uses):
- Una página de tu grupo/equipo favorito
- Un portafolio personal
- Un menú de una taquería imaginaria
- Cualquier idea que se te ocurra

**Dibuja en papel:**
1. El **encabezado** (nombre, menú de navegación)
2. La **sección principal** (¿qué ve el usuario primero?)
3. Al menos **2 secciones** más
4. El **pie de página** (contacto, redes, etc.)

*Guarda este wireframe, lo vas a necesitar para tu proyecto del parcial.*

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 3: Arquitectura de la Información     -->
<!-- ════════════════════════════════════════════ -->

# Clase 3 — Arquitectura de la Información

<div class="tag">Semana 3 · Estructura web</div>

**¿Qué vamos a aprender?**

- 🗂️ Cómo organizar el contenido de un sitio web
- 🧩 Qué son los elementos básicos de un sitio
- 🖼️ Diferentes tipos de páginas y para qué sirven

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## Arquitectura de la Información

Es la forma en que **organizamos** el contenido de un sitio para que sea fácil de encontrar.

**Piénsalo como organizar tu mochila:**
- Si metes todo revuelto → tardas en encontrar algo
- Si tienes una sección para cada cosa → todo está a la mano

Lo mismo pasa con un sitio web 🎒

---

## Tipos de páginas más comunes

| Página | ¿Qué muestra? |
|--------|---------------|
| **Home** | Presentación, lo más importante |
| **About** | Quiénes somos |
| **Servicios/Productos** | Qué ofrecemos |
| **Blog/Noticias** | Contenido actualizable |
| **Contacto** | Cómo comunicarse |

---

## Mapa de sitio (Sitemap)

Es el "plano" de cómo están conectadas las páginas:

```
          [Home]
         /   |   \
   [About] [Blog] [Contacto]
              |
          [Post 1]
          [Post 2]
```

---

## 🎯 Actividad — Clase 3

### "Mapea tu sitio" (20 min)

Con el wireframe que hiciste la clase pasada:

1. **Define cuántas páginas** va a tener tu sitio (mínimo 2)
2. **Dibuja el mapa** de cómo se conectan las páginas
3. **Escribe qué contenido** va en cada sección:
   - ¿Hay textos? ¿Imágenes? ¿Listas?
   - ¿Hay algo que se repite en todas las páginas (navbar, footer)?

**Bonus:** Da el mapa de tu sitio a un compañero y pregúntale:
- ¿Entiendes qué hace este sitio?
- ¿Puedes encontrar la información fácilmente?

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 4: Introducción a HTML                -->
<!-- ════════════════════════════════════════════ -->

# Clase 4 — Introducción a HTML

<div class="tag">Semana 3 · HTML Básico</div>

**¿Qué vamos a aprender?**

- 📄 Qué es HTML y para qué sirve
- 🏷️ Cómo funcionan las etiquetas
- 🖊️ Escribir nuestra primera página web

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Qué es HTML?

**HTML** = HyperText Markup Language

Es el lenguaje que **estructura** una página web.
No es un lenguaje de programación — es un lenguaje de **marcado**.

> 💡 HTML es como el **esqueleto** de una página.
> CSS le da el **aspecto** y JavaScript le da el **movimiento**.

---

## Anatomía de una etiqueta HTML

```html
<etiqueta atributo="valor"> contenido </etiqueta>
   │          │        │         │
  nombre    extra    valor    lo que
 del tag    info    del attr  se muestra
```

**Ejemplo real:**
```html
<p class="intro">Hola, soy una párrafo</p>
```

---

## Estructura de un documento HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <p>Esta es mi primera página web.</p>
  </body>
</html>
```

> 📌 `<head>` = información para el navegador (no visible)
> 📌 `<body>` = lo que el usuario ve

---

## Etiquetas esenciales

```html
<!-- Encabezados (del más grande al más pequeño) -->
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Sección</h3>

<!-- Texto -->
<p>Este es un párrafo normal.</p>
<strong>Texto en negritas</strong>
<em>Texto en itálicas</em>

<!-- Listas -->
<ul>
  <li>Sin orden (bullets)</li>
  <li>Otro elemento</li>
</ul>

<ol>
  <li>Con número</li>
  <li>Segundo</li>
</ol>
```

---

## 🎯 Actividad — Clase 4

### "Mi primera página web" (20 min)

Abre VS Code, crea un archivo `index.html` y escribe:

1. Un `<h1>` con tu nombre
2. Un `<h2>` con el nombre de tu materia favorita
3. Un `<p>` contando (en 2 oraciones) quién eres
4. Una lista `<ul>` con 3 cosas que te gustan
5. Una lista `<ol>` con los pasos para hacer tu comida favorita

**Abre el archivo en Chrome** (arrastra el archivo al navegador)

¿Se ve como esperabas? ¿Qué está raro?

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 5: Etiquetas de Texto y Semántica     -->
<!-- ════════════════════════════════════════════ -->

# Clase 5 — Etiquetas de Texto y HTML Semántico

<div class="tag">Semanas 3–4 · HTML Semántico</div>

**¿Qué vamos a aprender?**

- 📝 Más etiquetas para organizar texto
- 🧠 Qué es el HTML semántico y por qué importa
- ♿ Accesibilidad básica: hacer páginas para todos

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## HTML Semántico: etiquetas con significado

En HTML5 hay etiquetas que no solo estructuran — **describen** qué es cada parte:

```html
<header>  <!-- Encabezado del sitio -->
  <nav>   <!-- Menú de navegación -->
    ...
  </nav>
</header>

<main>          <!-- Contenido principal -->
  <section>     <!-- Sección de contenido -->
    <article>   <!-- Artículo independiente -->
      ...
    </article>
  </section>
</main>

<footer>  <!-- Pie de página -->
  ...
</footer>
```

---

## ¿Por qué es importante lo semántico?

1. **Google** entiende mejor tu página y la muestra en búsquedas
2. **Lectores de pantalla** (para personas con discapacidad visual) pueden navegar
3. **Tú mismo** puedes leer el código más fácil 6 meses después

> 💡 `<div>` funciona igual que `<section>` visualmente, pero `<section>` le dice a todos *qué* es ese bloque.

---

## Más etiquetas de texto útiles

```html
<!-- Cita -->
<blockquote>
  "El mejor código es el que no tienes que escribir" — alguien sabio
</blockquote>

<!-- Código (para mostrar código en la página) -->
<code>console.log("Hola")</code>

<!-- Línea horizontal (separador) -->
<hr>

<!-- Salto de línea (usar con moderación) -->
<br>

<!-- Abreviación con tooltip -->
<abbr title="HyperText Markup Language">HTML</abbr>
```

---

## 🎯 Actividad — Clase 5

### "Artículo de revista web" (20 min)

Crea un archivo `articulo.html` que sea **un artículo sobre cualquier tema que te guste** (un videojuego, un artista, un deporte, lo que sea):

Debe incluir:
- Estructura semántica: `<header>`, `<main>`, `<article>`, `<footer>`
- Un `<h1>` con el título del artículo
- Al menos 2 `<h2>` como subtítulos
- 3 párrafos `<p>` de contenido
- Una lista de datos curiosos con `<ul>`
- Una cita `<blockquote>` (inventada o real)

*Este archivo lo vas a mejorar en las próximas clases.*

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 6: Enlaces e Imágenes                 -->
<!-- ════════════════════════════════════════════ -->

# Clase 6 — Enlaces e Imágenes

<div class="tag">Semana 4 · HTML Multimedia</div>

**¿Qué vamos a aprender?**

- 🔗 Cómo crear enlaces entre páginas (y a otras webs)
- 🖼️ Cómo insertar imágenes correctamente
- ♿ Texto alternativo: por qué siempre hay que ponerlo

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## Enlaces — `<a>`

**a** viene de *anchor* (ancla). Conecta páginas.

```html
<!-- Enlace a otra página web -->
<a href="https://google.com">Ir a Google</a>

<!-- Enlace a otra página TU sitio -->
<a href="contacto.html">Contacto</a>

<!-- Enlace que abre en una pestaña nueva -->
<a href="https://youtube.com" target="_blank">YouTube</a>

<!-- Enlace a una sección de la misma página -->
<a href="#seccion-2">Ver sección 2</a>

<!-- Ancla de destino -->
<section id="seccion-2">...</section>
```

---

## Imágenes — `<img>`

```html
<!-- Imagen básica -->
<img src="foto.jpg" alt="Descripción de la foto">

<!-- Imagen de internet -->
<img
  src="https://picsum.photos/400/300"
  alt="Foto aleatoria"
  width="400"
  height="300"
>
```

**Reglas de oro:**
- ✅ Siempre poner `alt` con una descripción real
- ✅ Siempre poner `width` y `height`
- ❌ Nunca usar imágenes sin permiso de uso

---

## 🎯 Actividad — Clase 6

### "Mini sitio de 2 páginas" (20 min)

Crea una carpeta `mi_sitio/` con:

**`index.html`** — Página principal
- Tu nombre como `<h1>`
- Una imagen (puedes usar `https://picsum.photos/300/200`)
- Un párrafo sobre ti
- Un enlace que diga "Mis gustos" que lleve a `gustos.html`

**`gustos.html`** — Segunda página
- Un `<h1>` con "Mis cosas favoritas"
- 3 imágenes de cosas que te gustan (de internet está bien)
- Cada imagen debe tener su `alt` descriptivo
- Un enlace que diga "Regresar al inicio" que lleve a `index.html`

*Navega entre las dos páginas y verifica que los links funcionen.*

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 7: Tablas y Formularios               -->
<!-- ════════════════════════════════════════════ -->

# Clase 7 — Tablas y Formularios

<div class="tag">Semana 4 · HTML Avanzado</div>

**¿Qué vamos a aprender?**

- 📊 Cómo crear tablas de datos en HTML
- 📋 Cómo hacer formularios (login, contacto, encuestas)
- ✅ Tipos de inputs: texto, email, checkbox, botón

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## Tablas HTML

Las tablas son para **datos**, no para hacer layouts (eso fue en los años 90 😅)

```html
<table>
  <thead>                      <!-- Encabezado de la tabla -->
    <tr>                       <!-- Fila (row) -->
      <th>Nombre</th>          <!-- Celda encabezado -->
      <th>Materia</th>
    </tr>
  </thead>
  <tbody>                      <!-- Cuerpo de la tabla -->
    <tr>
      <td>Ana García</td>      <!-- Celda de datos -->
      <td>Diseño Web</td>
    </tr>
    <tr>
      <td>Luis Torres</td>
      <td>Diseño Web</td>
    </tr>
  </tbody>
</table>
```

---

## Formularios HTML

```html
<form action="#" method="post">

  <!-- Input de texto -->
  <label for="nombre">Tu nombre:</label>
  <input type="text" id="nombre" name="nombre" placeholder="Ej: María">

  <!-- Email -->
  <label for="correo">Correo:</label>
  <input type="email" id="correo" name="correo">

  <!-- Menú desplegable -->
  <label for="grupo">Grupo:</label>
  <select id="grupo" name="grupo">
    <option value="a">4TPOA</option>
    <option value="b">4TPOB</option>
  </select>

  <!-- Botón de envío -->
  <button type="submit">Enviar</button>

</form>
```

---

## Tipos de input más usados

```html
<input type="text">       <!-- Texto libre -->
<input type="email">      <!-- Valida formato email -->
<input type="password">   <!-- Oculta el texto -->
<input type="number">     <!-- Solo números -->
<input type="date">       <!-- Selector de fecha -->
<input type="checkbox">   <!-- Casilla sí/no -->
<input type="radio">      <!-- Opción única de varias -->
<textarea>                <!-- Texto largo (párrafo) -->
```

---

## 🎯 Actividad — Clase 7

### "Formulario de registro de clase" (20 min)

Crea `formulario.html` — un formulario de registro para *algo* (puede ser tu sitio del proyecto, un evento inventado, lo que quieras):

Debe tener al menos:
- Input de **nombre** y **apellido**
- Input de **correo** (tipo email)
- **Menú select** con al menos 3 opciones
- Al menos **2 checkboxes** (ej: "Acepto términos", "Quiero recibir noticias")
- Un **botón** de enviar

Bonus: agrega una tabla con el "horario" de algún evento o materia.

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 8: GitHub                             -->
<!-- ════════════════════════════════════════════ -->

# Clase 8 — GitHub y Control de Versiones

<div class="tag">Semana 5 · GitHub</div>

**¿Qué vamos a aprender?**

- 💾 Qué es el control de versiones y por qué importa
- 🐙 Cómo usar GitHub para guardar y compartir código
- 🌐 Cómo publicar tu sitio web GRATIS con GitHub Pages

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Por qué necesitamos guardar versiones?

¿Te ha pasado esto?

- `proyecto_final.html`
- `proyecto_final_2.html`
- `proyecto_final_ESTE_SI.html`
- `proyecto_final_de_verdad_ultimo.html`

**Git** resuelve ese problema. Guarda el historial completo de cambios.

> 💡 Git es como el "Control Z" con memoria infinita y en equipo.

---

## Git vs GitHub

| Git | GitHub |
|-----|--------|
| Programa que instalas | Página web |
| Guarda versiones en tu computadora | Guarda versiones en internet |
| Se usa en la terminal | Se usa en el navegador |
| Gratis | Gratis (plan básico) |

> En esta clase usamos **GitHub directamente desde el navegador** — sin terminal.

---

## Flujo básico de GitHub

```
1. Crear cuenta en github.com
          ↓
2. Crear un repositorio (como una carpeta)
          ↓
3. Subir tus archivos
          ↓
4. Hacer commit (guardar con un mensaje)
          ↓
5. Activar GitHub Pages → ¡URL pública gratis!
```

---

## GitHub Pages — tu sitio en internet

**Pasos para publicar:**

1. Ve a tu repositorio en GitHub
2. Clic en **Settings**
3. Busca **Pages** en el menú izquierdo
4. En **Source**, selecciona `main` branch
5. Guarda — en 2 minutos tienes una URL como:

```
https://tunombre.github.io/mi-repositorio/
```

¡Tu sitio ya está en internet! 🎉

---

## 🎯 Actividad — Clase 8

### "Mi sitio en internet" (20 min)

1. **Crea una cuenta** en [github.com](https://github.com) (si ya tienes, úsala)
2. **Crea un repositorio nuevo** llamado `mi-primer-sitio`
3. **Sube** el `index.html` que hiciste en la Clase 4 o 6
4. **Activa GitHub Pages** siguiendo los pasos de la diapositiva anterior
5. **Comparte la URL** con el profesor

**Al final de la actividad** cada quien debe tener una URL pública que funcione.

---

<!-- ════════════════════════════════════════════ -->
<!-- PROYECTO PARCIAL 1                          -->
<!-- ════════════════════════════════════════════ -->

# 🏆 Proyecto — Primer Parcial

<div class="tag">Entrega: Semana 5 · Viernes</div>

## "Mi Sitio Personal"

Un sitio web de **2–3 páginas** sobre ti (o un personaje/tema que elijas).

---

## Requisitos del Proyecto P1

### Página 1 — Home (`index.html`)
- Tu nombre/personaje en `<h1>`
- Una imagen con `alt` correcto
- Un párrafo de presentación
- Navegación con links a las otras páginas

### Página 2 — Sobre mí / About (`about.html`)
- Usa estructura semántica completa (`header`, `main`, `footer`)
- Lista de gustos, habilidades o datos curiosos
- Al menos una tabla (puede ser tu horario, tus materias, etc.)

### Página 3 — Contacto (`contacto.html`)
- Formulario con nombre, email, y mensaje (textarea)
- Botón de enviar

---

## Criterios de evaluación P1

| Criterio | Puntos |
|----------|--------|
| HTML válido (sin errores de sintaxis) | 20 |
| Uso correcto de etiquetas semánticas | 20 |
| Navegación funcional entre páginas | 20 |
| Formulario con todos los campos | 20 |
| Sitio publicado en GitHub Pages | 20 |
| **Total** | **100** |

> 💡 **Tip:** Entra a [validator.w3.org](https://validator.w3.org) y pega tu código — te dice si hay errores.

---

## ¡Suerte con el primer parcial! 🚀

### Lo que aprendiste:
- ✅ Cómo funciona internet
- ✅ Wireframes y planificación
- ✅ HTML: estructura, etiquetas, semántica
- ✅ Imágenes, enlaces, tablas, formularios
- ✅ GitHub y publicación web

### Lo que viene (2do Parcial):
- 🎨 CSS — dale estilo a todo lo que hiciste
- 📐 Flexbox y Grid — layouts modernos
- 📱 Diseño responsivo — que funcione en el celular
- 🚀 Bootstrap y Tailwind

---

*Diseño Web · Primer Parcial · Prof. Sebastian Astiazaran Lopez*
*CBTIS / Preparatoria · Feb–Mar 2025*
