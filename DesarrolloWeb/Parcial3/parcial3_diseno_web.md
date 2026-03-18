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
    color: #e85d9d;
    font-size: 2em;
    border-bottom: 3px solid #e85d9d;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  h2 {
    color: #00d4aa;
    font-size: 1.5em;
  }
  h3 {
    color: #f5a623;
    font-size: 1.1em;
    margin-bottom: 8px;
  }
  code {
    background: #1a1a28;
    color: #e85d9d;
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
    font-size: 0.78em;
    line-height: 1.5;
  }
  ul li, ol li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
  strong { color: #f5a623; }
  em { color: #7c5cfc; }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    background: #e85d9d22;
    color: #e85d9d;
    padding: 8px 12px;
    text-align: left;
    border-bottom: 2px solid #e85d9d;
  }
  td {
    padding: 8px 12px;
    border-bottom: 1px solid #2a2a40;
    font-size: 0.9em;
  }
  .tag {
    background: #e85d9d22;
    border: 1px solid #e85d9d;
    color: #e85d9d;
    padding: 4px 16px;
    border-radius: 4px;
    font-size: 0.7em;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: inline-block;
  }
---

<!-- PORTADA PARCIAL 3 -->
# ⚡ Diseño Web
## Tercer Parcial
### JavaScript, APIs y Frameworks Modernos

<div class="tag">May – Jun 2025 · Prof. Astiazaran</div>

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 18: Preprocesadores CSS               -->
<!-- ════════════════════════════════════════════ -->

# Clase 18 — Preprocesadores CSS (Sass/SCSS)

<div class="tag">Semana 12 · SCSS</div>

**¿Qué vamos a aprender?**

- ⚡ Qué es Sass y por qué hace el CSS más poderoso
- 🔧 Variables, anidamiento y mixins
- 📁 Cómo organizar estilos en varios archivos

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Qué problema resuelve Sass?

CSS normal tiene limitaciones:

```css
/* CSS normal — repetitivo 😩 */
.btn-primario { background: #7c5cfc; color: white; }
.titulo       { color: #7c5cfc; }
.link:hover   { color: #7c5cfc; }
/* Si cambias el morado, debes buscarlo en todo el archivo... */
```

Con Sass:
```scss
/* SCSS — una variable para todo ✅ */
$color-primario: #7c5cfc;

.btn-primario { background: $color-primario; }
.titulo       { color: $color-primario; }
.link:hover   { color: $color-primario; }
/* Cambias $color-primario y se actualiza todo 🎉 */
```

---

## Variables en SCSS

```scss
// Variables de diseño
$color-fondo:    #0a0a0f;
$color-primario: #7c5cfc;
$color-texto:    #e8e8f0;
$color-muted:    #6b6b8a;

$fuente-base:    'Segoe UI', sans-serif;
$fuente-codigo:  'Courier New', monospace;

$radio-borde:    8px;
$sombra:         0 4px 20px rgba(0,0,0,0.4);

// Usar las variables
body {
  background: $color-fondo;
  color: $color-texto;
  font-family: $fuente-base;
}
```

---

## Anidamiento en SCSS

```scss
/* CSS normal — tienes que repetir el selector */
nav { background: #12121a; }
nav ul { list-style: none; display: flex; }
nav ul li { padding: 0 16px; }
nav ul li a { color: white; text-decoration: none; }
nav ul li a:hover { color: $color-primario; }

/* SCSS — anidado, más fácil de leer ✅ */
nav {
  background: #12121a;

  ul {
    list-style: none;
    display: flex;
  }

  li {
    padding: 0 16px;

    a {
      color: white;
      text-decoration: none;

      &:hover { color: $color-primario; }
      /* & = referencia al selector padre (li a) */
    }
  }
}
```

---

## Mixins — fragmentos reutilizables

```scss
// Definir un mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin tarjeta($color-borde: #2a2a40) {
  background: #12121a;
  border: 1px solid $color-borde;
  border-radius: $radio-borde;
  padding: 24px;
}

// Usar el mixin
.hero {
  @include flex-center;
  height: 100vh;
}

.card {
  @include tarjeta(#7c5cfc);
}
```

---

## 🎯 Actividad — Clase 18

### "Migra tu CSS a SCSS" (20 min)

> Para esta actividad puedes usar [Sass Playground](https://sass-lang.com/playground/) en el navegador (no necesitas instalar nada)

1. Toma los estilos del P2 y **crea variables** para:
   - Todos los colores usados
   - Las fuentes
   - Los border-radius y sombras comunes

2. **Anida** al menos 2 selectores que actualmente están separados

3. **Crea un mixin** llamado `@mixin card` con los estilos de tus tarjetas

4. Pega el código en el Sass Playground y verifica que el CSS resultante sea correcto

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 19: Fetch API                         -->
<!-- ════════════════════════════════════════════ -->

# Clase 19 — Fetch API y Datos Externos

<div class="tag">Semana 12 · JavaScript + APIs</div>

**¿Qué vamos a aprender?**

- 🔌 Qué es una API y cómo hablar con una
- 📡 Cómo usar `fetch()` para pedir datos desde JavaScript
- 🖥️ Cómo mostrar esos datos en tu página

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Qué es una API?

**API** = Application Programming Interface

Es como un mesero entre tu aplicación y una base de datos:

```
Tu página web  ──── "Dame info del clima" ────▶  Servidor de API
               ◀──── { temp: 28, ciudad: "GDL" } ──── Servidor
```

> 💡 Existen miles de APIs gratuitas: clima, pokémon, memes, películas, países, etc.

---

## JavaScript — lo básico que necesitamos

```javascript
// Variables
const nombre = "Juan";
let edad = 17;

// Función
function saludar(nombre) {
  return "Hola " + nombre;
}

// Arrow function (forma moderna)
const saludar = (nombre) => `Hola ${nombre}`;

// Seleccionar elementos del HTML
const titulo = document.querySelector('#titulo');
titulo.textContent = "Texto nuevo";
titulo.innerHTML = "<strong>Texto en negritas</strong>";
```

---

## Fetch básico

```javascript
// fetch devuelve una "promesa" — una respuesta que llegará después
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(respuesta => respuesta.json())  // convertir a JSON
  .then(datos => {
    console.log(datos);                  // ver los datos
    console.log(datos.name);             // "pikachu"
  });
```

## Fetch con async/await (más moderno y fácil de leer)

```javascript
async function obtenerPokemon(nombre) {
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## Mostrar datos en el HTML

```javascript
async function mostrarPokemon() {
  const datos = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
                      .then(r => r.json());

  // Modificar el HTML con los datos recibidos
  document.querySelector('#nombre').textContent = datos.name;
  document.querySelector('#imagen').src = datos.sprites.front_default;
  document.querySelector('#peso').textContent = datos.weight + ' kg';
}

// Llamar la función cuando carga la página
mostrarPokemon();
```

---

## 🎯 Actividad — Clase 19

### "Mi app de Pokémon" (20 min)

Crea `pokemon.html` con:

```html
<input id="buscar" placeholder="Nombre de Pokémon (ej: charizard)">
<button onclick="buscarPokemon()">Buscar</button>

<div id="resultado">
  <img id="sprite" src="" alt="">
  <h2 id="nombre"></h2>
  <p id="tipo"></p>
</div>
```

```javascript
async function buscarPokemon() {
  const nombre = document.querySelector('#buscar').value.toLowerCase();
  const datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
                      .then(r => r.json());
  document.querySelector('#sprite').src = datos.sprites.front_default;
  document.querySelector('#nombre').textContent = datos.name;
  document.querySelector('#tipo').textContent = datos.types[0].type.name;
}
```

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 20: Introducción a React / Vue        -->
<!-- ════════════════════════════════════════════ -->

# Clase 20 — Introducción a React

<div class="tag">Semanas 12–13 · Framework JS</div>

**¿Qué vamos a aprender?**

- ⚛️ Qué es React y por qué todos lo usan
- 🧩 Componentes: la pieza central de React
- 🔄 Estado (`useState`): datos que cambian y actualizan la pantalla

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Qué problema resuelve React?

Con JavaScript vanilla (puro):

```javascript
// Si cambia un dato, tienes que actualizar el HTML manualmente
let contador = 0;
document.querySelector('#num').textContent = contador;

function incrementar() {
  contador++;
  document.querySelector('#num').textContent = contador; // repetir siempre
}
```

Con React:
```jsx
// Cuando cambia el estado, React actualiza el HTML solo ✨
function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}
```

---

## Componentes en React

Un componente es una **función que regresa HTML** (llamado JSX):

```jsx
// Componente simple
function Saludo() {
  return <h1>Hola desde React! 👋</h1>;
}

// Componente con props (propiedades / parámetros)
function TarjetaUsuario({ nombre, rol }) {
  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <p>{rol}</p>
    </div>
  );
}

// Usar el componente
function App() {
  return (
    <TarjetaUsuario nombre="Ana García" rol="Diseñadora Web" />
  );
}
```

---

## useState — datos reactivos

```jsx
import { useState } from 'react';

function MiComponente() {
  // [valorActual, funcionParaCambiarlo] = useState(valorInicial)
  const [nombre, setNombre] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />

      <p>Hola, {nombre || 'extraño'}!</p>

      {visible && <p>Este texto puede ocultarse</p>}

      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
}
```

---

## React en el navegador (sin instalar nada)

Para practicar sin configuración, usa **CodeSandbox** o **StackBlitz**:

1. Ve a [stackblitz.com/fork/react](https://stackblitz.com/fork/react)
2. Ya tienes React listo para usar en el navegador
3. Edita `App.jsx` y ve los cambios en tiempo real

> 💡 Para proyectos reales necesitarías Node.js instalado y `npm create vite@latest`, pero para aprender el navegador es perfecto.

---

## 🎯 Actividad — Clase 20

### "Contador interactivo" (20 min)

En CodeSandbox o StackBlitz, crea un `App.jsx` con:

```jsx
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState('blue');

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ color: color, fontSize: '4rem' }}>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>➕ Sumar</button>
      <button onClick={() => setContador(contador - 1)}>➖ Restar</button>
      <button onClick={() => setContador(0)}>🔄 Reiniciar</button>
      <br/><br/>
      <button onClick={() => setColor('hotpink')}>💖 Rosa</button>
      <button onClick={() => setColor('lime')}>💚 Verde</button>
    </div>
  );
}
export default App;
```

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 21: Optimización                      -->
<!-- ════════════════════════════════════════════ -->

# Clase 21 — Optimización de Rendimiento

<div class="tag">Semana 13 · Performance</div>

**¿Qué vamos a aprender?**

- 🚀 Qué hace que un sitio web sea lento
- 🖼️ Cómo optimizar imágenes (el problema #1 de velocidad)
- 📊 Cómo medir el rendimiento con Lighthouse

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Por qué importa la velocidad?

```
Tiempo de carga  →  % usuarios que se van
     1 seg       →   7% se van
     3 segs      →   40% se van
     5 segs      →   53% se van
```

> 💡 Google también da mejor posición en búsquedas a sitios rápidos.
> Un sitio lento pierde visitas Y posicionamiento.

---

## Las causas más comunes de lentitud

| Causa | Solución |
|-------|---------|
| Imágenes muy grandes | Comprimir, usar WebP, lazy loading |
| Muchas fuentes | Usar máximo 2, solo los pesos necesarios |
| CSS/JS grandes | Minificar, solo cargar lo necesario |
| No hay caché | Configurar headers de caché |
| Servidor lento | Usar CDN o mejor hosting |

---

## Optimización de imágenes

```html
<!-- ❌ Malo: imagen enorme cargada siempre -->
<img src="foto-4000x3000.jpg" alt="foto">

<!-- ✅ Bueno: tamaño correcto + lazy loading -->
<img
  src="foto-800x600.webp"
  alt="foto"
  width="800"
  height="600"
  loading="lazy"
>
```

**Herramientas para comprimir:**
- [squoosh.app](https://squoosh.app) — gratis, en el navegador
- Convierte JPG/PNG a **WebP** (30–40% más pequeño)

---

## Lighthouse — auditar tu sitio

1. Abre tu sitio en Chrome
2. `F12` → DevTools → pestaña **Lighthouse**
3. Clic en **"Analyze page load"**
4. Espera y revisa el reporte

**El score tiene 4 categorías:**
- ⚡ Performance (velocidad)
- ♿ Accessibility (accesibilidad)
- 💡 Best Practices (buenas prácticas)
- 🔍 SEO (posicionamiento en Google)

> 🎯 Objetivo: 80+ en cada categoría

---

## 🎯 Actividad — Clase 21

### "Auditoria de tu proyecto" (20 min)

1. Abre tu proyecto del P2 en Chrome (o cualquier sitio)
2. Corre **Lighthouse** (`F12` → Lighthouse → Analyze)
3. Anota los scores en cada categoría
4. Identifica los **3 problemas principales** que señala
5. Intenta corregir **al menos 1**:
   - Si es imagen: comprímela en squoosh.app y actualiza
   - Si es `alt` faltante: agrégalo
   - Si es contraste bajo: cambia el color

Comparte tu score inicial y final con el grupo.

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 22: Deploy Continuo                   -->
<!-- ════════════════════════════════════════════ -->

# Clase 22 — Deploy y Publicación Web

<div class="tag">Semana 13 · Deploy</div>

**¿Qué vamos a aprender?**

- 🌐 Qué es el "deploy" y cómo funciona
- 🚀 Publicar en Vercel y Netlify (gratis y en minutos)
- 🔄 Deploy automático: cada push = sitio actualizado

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Qué es el deploy?

**Deploy** = poner tu sitio en internet para que todos puedan verlo.

```
Tu computadora  →  GitHub  →  Vercel / Netlify  →  Internet 🌐
   (código)        (nube)       (servidor)           (usuarios)
```

**¿Por qué Vercel/Netlify y no solo GitHub Pages?**
- Más fácil de configurar
- Funciona con sitios dinámicos (React, Vue)
- Deploy automático al hacer push
- URL bonita desde el primer momento

---

## Deploy en Vercel — paso a paso

```
1. Ve a vercel.com y crea cuenta con GitHub

2. "New Project" → selecciona tu repositorio de GitHub

3. Vercel detecta automáticamente el tipo de proyecto:
   - HTML estático → solo lo sube
   - React → lo compila y sube

4. Clic en "Deploy"
   → En 1-2 minutos tienes una URL como:
   https://mi-proyecto-tunombre.vercel.app

5. Cada vez que hagas push a main → se actualiza solo ✨
```

---

## Variables de entorno

Si tu proyecto usa API keys secretas:

```javascript
// ❌ Nunca pongas API keys en el código directamente
const API_KEY = "abc123secreto";

// ✅ Usa variables de entorno
const API_KEY = process.env.VITE_API_KEY;
```

En Vercel: `Settings → Environment Variables → Agregar`

> 🔒 Las variables de entorno son invisibles en el código público de GitHub

---

## 🎯 Actividad — Clase 22

### "Mi proyecto en Vercel" (20 min)

1. **Crea cuenta** en [vercel.com](https://vercel.com) con tu cuenta de GitHub
2. **Importa** el repositorio de tu proyecto del P2
3. **Despliega** — clic en Deploy
4. **Comparte la URL** con el profesor y compañeros
5. Haz un pequeño cambio en tu HTML (cambiar texto, color lo que sea), haz commit y push en GitHub
6. Verifica que **Vercel actualiza automáticamente** en ~1 minuto

**Al final todos deben tener su URL pública de Vercel.**

---

<!-- ════════════════════════════════════════════ -->
<!-- PROYECTO PARCIAL 3 + PROYECTO FINAL         -->
<!-- ════════════════════════════════════════════ -->

# 🏆 Proyecto — Tercer Parcial

<div class="tag">Entrega: Semana 15–16</div>

## "App Interactiva con Datos"

Una pequeña aplicación web que consume datos de una API real.

---

## Requisitos del Proyecto P3

### Opción A — Buscador de Pokémon
- Input para buscar por nombre
- Muestra imagen, nombre y tipo del Pokémon
- Botón para guardar favoritos (mostrar lista)
- API: [pokeapi.co](https://pokeapi.co)

### Opción B — Info de Países
- Input para buscar un país
- Muestra bandera, capital, población
- API: [restcountries.com](https://restcountries.com)

### Opción C — Galería de Imágenes
- Grid de fotos de un tema
- API: [picsum.photos](https://picsum.photos) o [unsplash](https://unsplash.com/developers)

---

## Criterios de evaluación P3

| Criterio | Puntos |
|----------|--------|
| Fetch a una API real y datos mostrados | 30 |
| Interactividad (input, botones funcionando) | 25 |
| Diseño cuidado (CSS, responsivo) | 25 |
| Sitio publicado en Vercel o Netlify | 20 |
| **Total** | **100** |

> 💡 **Bonus +10:** Si usas React con useState

---

# 🎓 Proyecto Final del Semestre

<div class="tag">Entrega: Semana 16 · Junio 2025</div>

## "Mi Portafolio Web"

El proyecto final integra **todo** lo que aprendiste en el semestre.

---

## ¿Qué es un portafolio web?

Es una página que muestra quién eres y qué sabes hacer como desarrollador.
Es la primera cosa que un empleador o cliente verá de ti.

**Datos reales:** más del 70% de los estudiantes de diseño/desarrollo consiguen trabajo o clientes mostrando su portafolio.

---

## Requisitos del Proyecto Final

### Secciones obligatorias:

**1. Hero / Inicio**
- Tu nombre, rol ("Estudiante de Desarrollo Web")
- Botón "Ver mi trabajo" que lleva a proyectos

**2. Sobre mí**
- Párrafo de quién eres
- Lista de habilidades (HTML, CSS, JavaScript, etc.)

**3. Proyectos** *(aquí van los 3 proyectos del semestre)*
- Captura o descripción del P1, P2 y P3
- Link a GitHub y link al sitio publicado

**4. Contacto**
- Formulario de contacto
- Links a redes sociales / GitHub

---

## Requisitos técnicos del Proyecto Final

| Requisito | Descripción |
|-----------|-------------|
| HTML semántico | `header`, `main`, `section`, `footer` |
| CSS propio | Variables, Flexbox o Grid |
| Responsivo | Funciona en celular y desktop |
| Al menos 1 JS | Animación, toggle de tema, o similar |
| 1 API o dato externo | Clima, quote, o cualquier API |
| GitHub Pages o Vercel | URL pública que funcione |

---

## Criterios de evaluación — Proyecto Final

| Criterio | Puntos |
|----------|--------|
| Estructura HTML semántica y válida | 15 |
| Diseño visual propio y cuidado | 20 |
| Sección de proyectos con links funcionando | 20 |
| Responsivo (celular + desktop) | 15 |
| Al menos 1 elemento interactivo en JS | 15 |
| Publicado y accesible en internet | 15 |
| **Total** | **100** |

> 🌟 **Bonus +15:** Si usas React para construir el portafolio

---

## Inspiración para tu portafolio

### Ideas para hacerlo único:
- **Tema oscuro/claro** con un botón que lo cambie (JavaScript)
- **Animación de escritura** en el hero ("Hola, soy... Ana García")
- **Filtro de proyectos** por tecnología
- **Sección de habilidades** con barras de progreso animadas
- **Cursor personalizado** con CSS

> 💡 Guarda inspiración en [awwwards.com](https://www.awwwards.com) o [dribbble.com](https://dribbble.com)

---

## ¡Llegaste al final del semestre! 🎉

### Lo que aprendiste (todo el semestre):
- ✅ HTML — estructura semántica de páginas web
- ✅ CSS — estilos, Flexbox, Grid, responsivo
- ✅ GitHub — control de versiones y publicación
- ✅ Bootstrap y Tailwind — frameworks CSS
- ✅ Sass/SCSS — CSS más poderoso
- ✅ Fetch API — conectar a servicios externos
- ✅ React/Vue — interfaces dinámicas
- ✅ Deploy — publicar proyectos reales

### Siguiente paso:
¡Sigue construyendo! Cada proyecto que hagas te hace mejor.

---

*Diseño Web · Tercer Parcial · Prof. Sebastian Astiazaran Lopez*
*CBTIS / Preparatoria · May–Jun 2025*
