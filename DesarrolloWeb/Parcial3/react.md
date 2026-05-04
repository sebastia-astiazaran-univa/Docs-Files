---
marp: true
html: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Fira+Code:wght@400;500&display=swap');

  :root {
    --bg: #0F172A;
    --bg2: #1E293B;
    --bg3: #243044;
    --accent: #61DAFB;
    --green: #4ADE80;
    --amber: #FBBF24;
    --coral: #F87171;
    --purple: #A78BFA;
    --muted: #94A3B8;
    --white: #F1F5F9;
    --border: #334155;
  }

  section {
    background: #0F172A;
    color: #F1F5F9;
    font-family: 'Inter', sans-serif;
    padding: 48px 60px;
    font-size: 18px;
  }

  h1 {
    font-size: 2.4em;
    font-weight: 900;
    color: #F1F5F9;
    margin-bottom: 0.15em;
    line-height: 1.1;
  }

  h2 {
    font-size: 1.75em;
    font-weight: 700;
    color: #F1F5F9;
    margin-bottom: 0.3em;
    border-bottom: 3px solid #61DAFB;
    padding-bottom: 0.2em;
  }

  h3 {
    font-size: 1.1em;
    font-weight: 600;
    color: #61DAFB;
    margin: 0.5em 0 0.2em;
  }

  p { color: #CBD5E1; line-height: 1.6; }

  code {
    font-family: 'Fira Code', monospace;
    background: #0D1117;
    color: #A5D6FF;
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.88em;
  }

  pre {
    background: #0D1117 !important;
    border: 1px solid #334155;
    border-radius: 10px;
    padding: 18px 20px;
    font-size: 0.78em;
    line-height: 1.6;
  }

  pre code {
    background: transparent;
    padding: 0;
    color: #E6EDF3;
    font-size: 1em;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  ul li {
    padding: 5px 0 5px 26px;
    position: relative;
    color: #CBD5E1;
  }

  ul li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: #61DAFB;
    font-weight: 700;
  }

  strong { color: #F1F5F9; }

  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    margin-top: 16px;
  }

  .box {
    background: #1E293B;
    border-radius: 12px;
    padding: 18px 20px;
  }

  .box-green  { border-top: 3px solid #4ADE80; }
  .box-amber  { border-top: 3px solid #FBBF24; }
  .box-coral  { border-top: 3px solid #F87171; }
  .box-accent { border-top: 3px solid #61DAFB; }
  .box-purple { border-top: 3px solid #A78BFA; }

  .label {
    display: inline-block;
    font-size: 0.7em;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 20px;
    margin-bottom: 8px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .label-green  { background: #14532d; color: #4ADE80; }
  .label-accent { background: #0c2d3e; color: #61DAFB; }
  .label-amber  { background: #3f2a00; color: #FBBF24; }
  .label-coral  { background: #3f1010; color: #F87171; }
  .label-purple { background: #2d1f5e; color: #A78BFA; }

  .chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
  }

  .chip {
    background: #1E293B;
    border: 1px solid #334155;
    border-radius: 20px;
    padding: 4px 14px;
    font-size: 0.78em;
    color: #CBD5E1;
  }

  .arrow-center {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: #61DAFB;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85em;
  }

  th {
    background: #243044;
    color: #94A3B8;
    font-weight: 600;
    padding: 10px 14px;
    text-align: left;
    border-bottom: 2px solid #334155;
  }

  td {
    padding: 9px 14px;
    border-bottom: 1px solid #1E293B;
    color: #CBD5E1;
  }

  tr:nth-child(even) td { background: #1a2335; }

  .highlight { color: #61DAFB; font-weight: 600; }
  .highlight-green { color: #4ADE80; font-weight: 600; }
  .highlight-amber { color: #FBBF24; font-weight: 600; }
  .highlight-coral { color: #F87171; font-weight: 600; }

  section.portada {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.portada h1 { font-size: 3em; }

  section[data-marpit-pagination]::after {
    color: #475569;
    font-size: 0.75em;
  }
---

<!-- _class: portada -->
<!-- _paginate: false -->

<span style="color:#61DAFB; font-size:0.85em; font-weight:600; letter-spacing:0.1em; text-transform:uppercase;">Módulo · Diseño Web</span>

# De HTML/CSS/JS a React

<p style="color:#94A3B8; font-size:1.1em; margin-top:0.3em;">Todo lo que ya saben tiene un equivalente en React.<br>Este módulo conecta lo conocido con lo nuevo.</p>

<div class="chip-row">
  <span class="chip">⚛ Componentes</span>
  <span class="chip">🎨 JSX</span>
  <span class="chip">📦 Estado</span>
  <span class="chip">🔄 useEffect</span>
  <span class="chip">🔗 Props</span>
  <span class="chip">🐾 PokéAPI</span>
</div>

---

## ¿Qué es un framework / biblioteca?

<p style="margin-bottom: 20px;">Ya construyeron una Pokédex desde cero. <strong>Funcionó</strong>. Pero imaginen hacer 50 tarjetas de Pokémon con <code>innerHTML</code>… ahí es donde entran los frameworks.</p>

<div class="columns">
  <div class="box box-amber">
    <span class="label label-amber">Sin framework</span>
    <p><strong>HTML + CSS + JS Vanilla</strong><br>Tú controlas todo manualmente. Más libertad, más responsabilidad.</p>
    <ul>
      <li>Actualizas el DOM a mano</li>
      <li>No hay estructura obligatoria</li>
      <li>Ideal para aprender y proyectos pequeños</li>
    </ul>
  </div>
  <div class="box box-accent">
    <span class="label label-accent">Con React</span>
    <p><strong>Biblioteca de UI</strong><br>React se encarga del DOM. Tú describes cómo debe verse la UI.</p>
    <ul>
      <li>El DOM se actualiza solo</li>
      <li>Estructura de componentes</li>
      <li>Ideal para apps medianas y grandes</li>
    </ul>
  </div>
</div>

> 💡 **React no reemplaza lo que saben** — lo organiza mejor.

---

## La gran analogía

<p>Antes de ver código, hay que entender que <strong>cada concepto de React tiene un equivalente</strong> en lo que ya conocen.</p>

| Lo que ya saben | → | En React |
|---|---|---|
| Función JS | → | **Componente** |
| Parámetros de función | → | **Props** |
| Variable `let` | → | **useState** |
| `window` `load` + `fetch` | → | **useEffect(fn, [])** |
| `addEventListener` | → | **onClick / onChange** |
| `innerHTML` / DOM | → | **JSX** |
| Un archivo JS gigante | → | **Componentes separados** |

<p style="margin-top: 16px; color: #61DAFB; font-weight: 600;">La curva de aprendizaje no es tan empinada como parece. Ya tienen la mitad.</p>

---

## HTML → JSX

<p>JSX es la sintaxis de React para describir UI. Se parece al HTML que ya conocen, pero vive dentro de JavaScript.</p>

<div class="columns">
  <div>
    <span class="label label-amber">HTML clásico</span>

```html
<div class="card">
  <img src="pikachu.png"
       alt="Pikachu" />
  <h2>Pikachu</h2>
  <p class="type">Eléctrico</p>
</div>
```

  </div>
  <div>
    <span class="label label-accent">JSX en React</span>

```jsx
function PokemonCard({ nombre, tipo }) {
  return (
    <div className="card">
      <img src={`${nombre}.png`}
           alt={nombre} />
      <h2>{nombre}</h2>
      <p className="type">{tipo}</p>
    </div>
  );
}
```

  </div>
</div>

<div style="background:#1E293B; border-left:3px solid #FBBF24; padding:10px 16px; border-radius:6px; margin-top:16px; font-size:0.85em;">
  ⚠️ <strong>Dos diferencias clave:</strong> &nbsp; <code>class</code> → <code>className</code> &nbsp;|&nbsp; Las expresiones JS van entre <code>{ }</code>
</div>

---

## Funciones JS → Componentes

<p>Un componente es simplemente una función que devuelve JSX. Si ya saben hacer funciones, ya saben hacer componentes.</p>

<div class="columns">
  <div>
    <span class="label label-amber">Función JS Vanilla</span>

```javascript
function tarjeta(nombre, tipo) {
  return `
    <div class="card">
      <h2>${nombre}</h2>
      <p>${tipo}</p>
    </div>
  `;
}

// Usarla:
document.body.innerHTML +=
  tarjeta("Pikachu", "Eléctrico");
```

  </div>
  <div>
    <span class="label label-accent">Componente React</span>

```jsx
function TarjetaPokemon({ nombre, tipo }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{tipo}</p>
    </div>
  );
}

// Usarla:
<TarjetaPokemon
  nombre="Pikachu"
  tipo="Eléctrico" />
```

  </div>
</div>

---

## Parámetros → Props

<p>Así como una función recibe parámetros, un componente recibe <strong>props</strong>. La sintaxis cambia, la idea es exactamente la misma.</p>

<div class="columns">
  <div>
    <span class="label label-amber">Parámetros JS</span>

```javascript
// Definir
function mostrar(nombre, numero) {
  console.log(nombre, numero);
}

// Llamar
mostrar("Pikachu", 25);
mostrar("Bulbasaur", 1);
mostrar("Charmander", 4);
```

  </div>
  <div>
    <span class="label label-accent">Props en React</span>

```jsx
// Definir
function Pokemon({ nombre, numero }) {
  return <h2>#{numero} {nombre}</h2>;
}

// Usar (pasar props)
<Pokemon nombre="Pikachu"   numero={25} />
<Pokemon nombre="Bulbasaur" numero={1}  />
<Pokemon nombre="Charmander" numero={4} />
```

  </div>
</div>

<div style="background:#1E293B; border-left:3px solid #A78BFA; padding:10px 16px; border-radius:6px; margin-top:16px; font-size:0.85em;">
  🔑 <strong>Las props fluyen de padre a hijo</strong>, igual que los argumentos. El hijo no puede modificarlas.
</div>

---

## Variables → Estado (useState)

<p>Antes cambiaban variables y actualizaban el DOM a mano. Con <code>useState</code>, React detecta el cambio y actualiza la UI <strong>solo</strong>.</p>

<div class="columns">
  <div>
    <span class="label label-coral">JS Vanilla — manual</span>

```javascript
let pagina = 1;

function siguiente() {
  pagina++;
  // ⚠️ Hay que actualizar el DOM
  // a mano CADA VEZ:
  document.querySelector("#num")
    .textContent = pagina;
  cargarPokemon(pagina);
}
```

  </div>
  <div>
    <span class="label label-green">React — automático</span>

```jsx
const [pagina, setPagina] = useState(1);

function siguiente() {
  setPagina(pagina + 1);
  // ✅ React actualiza la UI sola.
  // No hay que tocar el DOM.
}

// En el JSX:
<p>Página: {pagina}</p>
<button onClick={siguiente}>
  Siguiente
</button>
```

  </div>
</div>

---

## addEventListener → Eventos en JSX

<p>El manejo de eventos funciona igual que en JS. Solo cambia dónde y cómo se escribe.</p>

| Evento | JS Vanilla | React JSX |
|---|---|---|
| Click | `btn.addEventListener("click", fn)` | `<button onClick={fn}>` |
| Input | `input.addEventListener("input", fn)` | `<input onInput={fn} />` |
| Submit | `form.addEventListener("submit", fn)` | `<form onSubmit={fn}>` |
| Hover | `div.addEventListener("mouseover", fn)` | `<div onMouseOver={fn}>` |

**Ejemplo real — botón de favorito en la Pokédex:**

```jsx
const [esFav, setEsFav] = useState(false);

<button onClick={() => setEsFav(!esFav)}>
  {esFav ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
</button>
```

---

## window load + fetch → useEffect

<p>Antes usaban <code>window.addEventListener("load", ...)</code> para cargar datos al inicio. En React eso es <code>useEffect</code>.</p>

<div class="columns">
  <div>
    <span class="label label-amber">Su Pokédex anterior</span>

```javascript
window.addEventListener("load", () => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then(r => r.json())
    .then(data => {
      // actualizar DOM a mano
      mostrarPokemon(data.results);
    });
});
```

  </div>
  <div>
    <span class="label label-accent">Pokédex en React</span>

```jsx
const [pokemon, setPokemon] = useState([]);

useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then(r => r.json())
    .then(data => {
      setPokemon(data.results);
      // React actualiza la UI sola ✅
    });
}, []); // [] = solo al montar
```

  </div>
</div>

<div style="background:#1E293B; border-left:3px solid #61DAFB; padding:10px 16px; border-radius:6px; margin-top:14px; font-size:0.85em;">
  📌 El <code>[]</code> vacío significa <em>"correr solo una vez al cargar"</em> — equivalente exacto al evento <code>load</code>.
</div>

---

## CSS en React

<p>El CSS que ya saben funciona igual. Solo hay algunas formas nuevas de aplicarlo.</p>

<div class="columns">
  <div class="box box-green">
    <span class="label label-green">✅ Lo que ya funciona igual</span>
    <ul>
      <li>Archivos <code>.css</code> normales</li>
      <li><code>className</code> en lugar de <code>class</code></li>
      <li>Clases condicionales con JS</li>
      <li>Flexbox, Grid, animaciones</li>
    </ul>
  </div>
  <div class="box box-accent">
    <span class="label label-accent">⚡ Lo nuevo que ofrece React</span>
    <ul>
      <li>CSS Modules (estilos por componente)</li>
      <li>Estilos en línea con objetos JS</li>
      <li>Clases dinámicas con estado</li>
      <li>Librerías como Tailwind o styled-components</li>
    </ul>
  </div>
</div>

```jsx
// Clase dinámica según estado — algo que en JS era más engorroso:
<div className={`card ${esFav ? "card--favorito" : ""}`}>
```

---

## Ventajas de React

<div class="columns" style="grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
  <div class="box box-accent">
    <h3>🧩 Reutilización</h3>
    <p>Un componente <code>PokemonCard</code> se usa para los 900+ pokémon. Un cambio se refleja en todos.</p>
  </div>
  <div class="box box-green">
    <h3>⚡ UI reactiva</h3>
    <p>El DOM se actualiza solo cuando cambia el estado. No más <code>innerHTML</code> manual.</p>
  </div>
  <div class="box box-purple">
    <h3>📁 Organización</h3>
    <p>Cada componente tiene su archivo. El código crece sin volverse caos.</p>
  </div>
</div>

<div class="columns" style="grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px;">
  <div class="box box-amber">
    <h3>🌐 Ecosistema enorme</h3>
    <p>React Router, librerías de UI, herramientas de testing, Next.js — todo construido sobre lo mismo.</p>
  </div>
  <div class="box" style="border-top: 3px solid #61DAFB;">
    <h3>💼 Muy demandado</h3>
    <p>React está en la mayoría de ofertas de trabajo para frontend. Es la habilidad más pedida del sector.</p>
  </div>
</div>

---

## Desventajas de React

<p>React no es la solución para todo. Es importante conocer sus limitaciones.</p>

<div class="columns">
  <div>
    <div class="box box-coral" style="margin-bottom: 16px;">
      <h3>📚 Curva de aprendizaje</h3>
      <p>JSX, hooks, estado, efectos... hay varios conceptos nuevos que aprender juntos antes de ser productivo.</p>
    </div>
    <div class="box box-coral">
      <h3>⚙️ Configuración inicial</h3>
      <p>Necesita Node.js, Vite o Create React App. No es abrir un archivo HTML en el navegador.</p>
    </div>
  </div>
  <div>
    <div class="box box-coral" style="margin-bottom: 16px;">
      <h3>🏋️ Exceso para proyectos simples</h3>
      <p>Una landing page estática o una web sencilla no necesitan React. JS Vanilla es suficiente y más rápido.</p>
    </div>
    <div class="box box-coral">
      <h3>🔄 Cambia rápido</h3>
      <p>El ecosistema evoluciona constantemente. Lo que es estándar hoy puede ser obsoleto en 2 años.</p>
    </div>
  </div>
</div>

---

## ¿Cuándo usar React vs Vanilla JS?

<p>La elección depende del proyecto. No hay una respuesta única.</p>

| Situación | ¿Qué usar? |
|---|---|
| Landing page, portfolio, web informativa | ✅ **HTML + CSS + JS Vanilla** |
| Pokédex con búsqueda, filtros y favoritos | ⚛ **React** |
| App con múltiples páginas y estado compartido | ⚛ **React** |
| Pequeño widget interactivo en una web existente | ✅ **JS Vanilla** |
| Dashboard con datos en tiempo real | ⚛ **React** |
| Formulario de contacto simple | ✅ **HTML + CSS + JS Vanilla** |

<div style="background:#1E293B; border-left:3px solid #4ADE80; padding:12px 18px; border-radius:6px; margin-top:18px;">
  💡 <strong>Regla práctica:</strong> Si van a renderizar listas, manejar múltiples estados o tener varias vistas — React. Si es una página estática con poca interacción — Vanilla.
</div>

---

## Su Pokédex: antes y después

<p>Mismo proyecto, misma API, misma lógica. <strong>Diferente arquitectura.</strong></p>

<div class="columns">
  <div>
    <span class="label label-amber">Pokédex Vanilla</span>
    <ul>
      <li><code>index.html</code></li>
      <li><code>style.css</code></li>
      <li><code>app.js</code> (todo mezclado)</li>
      <li><code>innerHTML</code> para renderizar</li>
      <li><code>addEventListener</code> para eventos</li>
      <li><code>fetch</code> en <code>window load</code></li>
      <li>Variables globales</li>
    </ul>
  </div>
  <div>
    <span class="label label-accent">Pokédex 2.0 en React</span>
    <ul>
      <li><code>App.jsx</code> — raíz de la app</li>
      <li><code>PokemonCard.jsx</code> — tarjeta</li>
      <li><code>SearchBar.jsx</code> — buscador</li>
      <li><code>FavoritosPage.jsx</code> — vista</li>
      <li><code>useState</code> para estado</li>
      <li><code>useEffect</code> para el fetch</li>
      <li>Props para pasar datos</li>
    </ul>
  </div>
</div>

---

## Estructura de la Pokédex 2.0

<p>Así luce la arquitectura de componentes que van a construir:</p>

```
App
├── SearchBar          ← buscador (estado de búsqueda sube al padre)
├── PokemonList
│   ├── PokemonCard    ← tarjeta individual (recibe props)
│   ├── PokemonCard
│   └── PokemonCard ...
└── FavoritosPage
    └── PokemonCard    ← el mismo componente, reutilizado
```

<div class="columns" style="margin-top: 20px;">
  <div class="box box-green">
    <h3>🔄 Reutilización real</h3>
    <p><code>PokemonCard</code> se usa tanto en la lista principal como en favoritos. Un solo componente, múltiples lugares.</p>
  </div>
  <div class="box box-accent">
    <h3>📡 Datos desde PokéAPI</h3>
    <p>El <code>fetch</code> que ya conocen vive en <code>App.jsx</code> dentro de <code>useEffect</code>. La lógica es idéntica.</p>
  </div>
</div>

---

<!-- _paginate: false -->

<div style="display:flex; flex-direction:column; justify-content:center; height:100%; text-align:center;">

<p style="font-size:4em; margin-bottom:0.2em;">⚛</p>

<h1 style="font-size:2.6em; border:none; padding:0;">Pokédex 2.0</h1>

<p style="font-size:1.15em; color:#94A3B8; margin-top:0.3em;">Misma PokéAPI. Misma lógica. React adentro.</p>

<div class="chip-row" style="justify-content:center; margin-top:24px;">
  <span class="chip">✓ Búsqueda en tiempo real</span>
  <span class="chip">✓ Detalle por ruta</span>
  <span class="chip">✓ Favoritos con estado</span>
  <span class="chip">✓ Componentes reutilizables</span>
</div>

<p style="color:#475569; font-size:0.85em; margin-top:40px; font-style:italic;">
  Todo lo que aprendan en este módulo lo van a usar para mejorar lo que ya construyeron.
</p>

</div>