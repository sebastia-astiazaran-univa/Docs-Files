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
    padding: 48px 58px;
  }
  h1 {
    color: #7c5cfc;
    font-size: 1.9em;
    border-bottom: 3px solid #7c5cfc;
    padding-bottom: 10px;
    margin-bottom: 18px;
  }
  h2 {
    color: #e85d9d;
    font-size: 1.35em;
  }
  h3 {
    color: #f5a623;
    font-size: 1.05em;
    margin-bottom: 8px;
  }
  code {
    background: #1a1a28;
    color: #7c5cfc;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.84em;
  }
  pre {
    background: #151521;
    border: 1px solid #2a2a40;
    border-radius: 10px;
    padding: 18px;
  }
  pre code {
    background: transparent;
    color: #e8e8f0;
    padding: 0;
    font-size: 0.78em;
    line-height: 1.45;
  }
  ul li, ol li {
    margin-bottom: 8px;
    line-height: 1.45;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
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
  }
  .tag {
    background: #7c5cfc22;
    border: 1px solid #7c5cfc;
    color: #7c5cfc;
    padding: 4px 14px;
    border-radius: 4px;
    font-size: 0.68em;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 18px;
    display: inline-block;
  }
---

# Diseño Web
## Segundo Parcial
### CSS, diseño visual aplicado y JavaScript básico

<div class="tag">Prof. Sebastian Astiazaran Lopez · 4 semanas · 16 clases</div>

---

# Enfoque del parcial

Este parcial no se trabajará como teoría aislada.

Se trabajará como un **módulo práctico de diseño web real**, donde cada clase aporte:

- criterio visual
- técnica útil
- práctica en laboratorio
- avance directo de la tarea semanal

---

# Objetivo general

Al terminar el parcial, cada alumno será capaz de:

- reproducir interfaces visuales a partir de referencias
- tomar mejores decisiones de color, tipografía y espaciado
- construir componentes reales de interfaz
- usar `Flexbox`, `Grid` y responsive
- aplicar JavaScript básico para dar interacción
- integrar diseño y lógica en un proyecto final tipo juego

---

# Evidencias del parcial

1. Tarea 1: `recipe-page-main/`
2. Tarea 2: `single-price-grid-component-master/`
3. Tarea 3: `faq-accordion-main/`
4. Proyecto final: juego libre con CSS y JavaScript

> Cada semana se trabaja en clase y al final de la semana se entrega la tarea correspondiente.

---

# Estructura general

## 4 semanas · 4 clases por semana

| Semana | Enfoque | Tarea |
|--------|---------|-------|
| 1 | Diseño visual base + maquetación | `recipe-page-main/` |
| 2 | Componentes, layout y responsive | `single-price-grid-component-master/` |
| 3 | Mini-módulo de JavaScript + interacción | `faq-accordion-main/` |
| 4 | Integración de diseño + JS | Juego final |

---

# Metodología por clase

Cada clase de 50 minutos se divide así:

- 10 min de teoría breve
- 15 min de ejemplo guiado
- 20 min de práctica o avance
- 5 min de cierre y tarea

> La idea es que siempre haya aplicación visual inmediata.

---

# Qué sí aporta al diseño web real

En este parcial se priorizarán temas que realmente mejoran una interfaz:

- teoría del color aplicada
- contraste y legibilidad
- tipografía y combinación de fuentes
- espacio en blanco y jerarquía visual
- tarjetas, botones, navbar y hero
- íconos y apoyo visual
- estados `hover`, `focus` y `active`
- responsive
- componentes interactivos con JS

---

# Qué se busca evitar

- demasiada teoría sin aplicación
- copiar estilos sin entender por qué funcionan
- usar demasiados colores o fuentes
- hacer layouts visualmente cargados
- depender de frameworks para resolver todo

---

# Recursos del parcial

- `parcial2_diseno_web.md`
- `laboratorio-web/`
- `recipe-page-main/`
- `single-price-grid-component-master/`
- `faq-accordion-main/`

El laboratorio servirá como apoyo visual para explicar cada tema en vivo.

---

# Semana 1
## Diseño visual base y composición

<div class="tag">Tarea semanal: `recipe-page-main/`</div>

Meta de la semana:

- entender qué hace que una página se vea bien
- mejorar criterio visual
- aplicar CSS base a una composición editorial simple

---

# Semana 1 · Clase 1
## Qué hace que una interfaz se vea bien

Temas:

- jerarquía visual
- alineación
- repetición
- contraste
- consistencia

---

Preguntas guía:

- ¿qué elemento debe llamar primero la atención?
- ¿qué tan fácil es leer el contenido?
- ¿hay orden visual o todo compite entre sí?

Actividad:

- analizar 2 interfaces buenas y 2 malas
- identificar color, tamaño, espaciado y foco visual

---

# Semana 1 · Clase 1
## Teoría del color aplicada a web

Puntos clave:

- color principal
- color secundario
- color de acento
- color de fondo
- color de texto

---

✅ Color Principal (60%): Es el color dominante que unifica el diseño. Suele aplicarse en elementos de gran tamaño para establecer la atmósfera general.
✅ Color de Apoyo (30%): Complementa al principal y sirve para diferenciar secciones o jerarquías, evitando la monotonía.
✅ Color de Acento (10%): Se usa con moderación para resaltar elementos clave como botones, enlaces o llamadas a la acción (CTA).
✅ Neutros (Fondos y Texto): El uso de blancos, grises o negros garantiza la legibilidad y el descanso visual. El contraste adecuado (como texto oscuro sobre fondo claro) es vital para la accesibilidad.

---

Recomendación práctica:

- usar 1 color principal
- 1 color de apoyo
- 1 color de acento
- neutros para fondos y texto

Ejemplo de sistema:

```css
:root {
  --bg: #fff7f0;
  --surface: #ffffff;
  --text: #2a1f1a;
  --primary: #8c3d2e;
  --accent: #c46a4a;
}
```

---

# Semana 1 · Clase 1
## Reglas útiles de color

- No usar demasiados colores saturados juntos.
- El color de acento debe reservarse para lo importante.
- El texto largo necesita alto contraste.
- Un fondo suave ayuda a resaltar tarjetas o contenedores.
- La consistencia vale más que lo llamativo.

Herramientas:

- `coolors.co`
- `colorhunt.co`
- contraste con DevTools o WebAIM

---

Revisar la actividad de color en el laboratorio.

---

# Semana 1 · Clase 2
## Tipografía web que sí funciona

Temas:

- jerarquía entre títulos y párrafos
- combinación de fuentes
- tamaño legible
- altura de línea
- espaciado entre bloques

---
Regla práctica:

- una fuente para títulos
- una fuente para texto
- máximo dos familias tipográficas

---

# Semana 1 · Clase 2
## Espaciado y espacio en blanco

El diseño mejora mucho más por espaciado que por adornos.

Temas:

- `margin`
- `padding`
- ritmo visual
- separación entre secciones
- aire visual

---
Ejemplo:

```css
.card {
  padding: 32px;
  border-radius: 24px;
}

section + section {
  margin-top: 32px;
}
```

---

# Semana 1 · Clase 2
## Modelo de caja aplicado al diseño

No se estudia solo como teoría.

Se usa para resolver:

- contenedores cómodos de leer
- tarjetas limpias
- separación entre contenido
- bloques que no se rompen al crecer

Actividad:

- comparar una tarjeta bien espaciada vs una saturada

---

# Semana 1 · Clase 3
## Componentes editoriales

En `recipe-page-main/` se trabajarán:

- imagen principal
- tarjeta o contenedor central
- bloque de preparación
- listas de ingredientes
- instrucciones
- tabla de nutrición

Objetivo:

- que ustedes aprendan a construir una interfaz informativa clara y elegante

---

# Semana 1 · Clase 3
## Cómo copiar una referencia visual

Secuencia recomendada:

1. estructura HTML
2. tipografía base
3. contenedor principal
4. secciones internas
5. colores
6. ajustes finos

Error común:

- querer “embellecer” antes de tener estructura y espaciado correctos

---

# Semana 1 · Clase 4
## Responsive básico

Temas:

- `meta viewport`
- `max-width`
- imágenes fluidas
- tarjetas que se adaptan
- texto legible en móvil

Ejemplo:

```css
img {
  max-width: 100%;
  display: block;
}

.wrapper {
  width: min(100% - 32px, 720px);
  margin-inline: auto;
}
```

---

# Entrega semanal 1
## `recipe-page-main/`

Debe demostrar:

- buena tipografía
- paleta coherente
- uso correcto del espacio
- composición limpia
- responsive funcional

---

# Rúbrica de la semana 1

| Criterio | Puntos |
|----------|--------|
| Estructura HTML | 20 |
| Color y tipografía | 25 |
| Espaciado y composición | 25 |
| Componentes de contenido | 15 |
| Responsive | 15 |
| **Total** | **100** |

---

# Semana 2
## Componentes reales y layout moderno

<div class="tag">Tarea semanal: `single-price-grid-component-master/`</div>

Meta de la semana:

- construir componentes más modernos
- entender mejor `Flexbox` y `Grid`
- reforzar decisiones visuales útiles en UI

---

# Semana 2 · Clase 5
## Cards, botones y llamadas a la acción

Temas:

- tarjetas modernas
- contraste de bloques
- botones claros
- jerarquía entre título, precio y CTA
- estados visuales

---

Se explicará por qué un botón debe:

- verse clicable
- ser legible
- destacar sin romper la interfaz

---

# Semana 2 · Clase 5
## Íconos en diseño web

Para qué sirven:

- reforzar significado
- guiar la lectura
- dar identidad visual

Buenas prácticas:

- no abusar de ellos
- usarlos donde realmente ayuden
- mantener mismo estilo visual
- acompañarlos con texto cuando sea necesario

Ejemplos válidos:

- checkmarks
- estrellas
- alertas
- flechas
- iconos de precio o beneficios

---

# Semana 2 · Clase 6
## Flexbox aplicado a interfaces reales

Usos directos:

- navbar
- filas de botones
- alineación de precio y texto
- distribución de secciones internas

Propiedades clave:

- `display: flex`
- `justify-content`
- `align-items`
- `gap`
- `flex-wrap`

---

# Semana 2 · Clase 6
## Grid aplicado a componentes

Usos:

- tarjetas con zonas
- layouts de dos columnas
- cabecera arriba y contenido abajo
- bloques que cambian en desktop

Ejemplo:

```css
.pricing-card {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .pricing-card {
    grid-template-columns: 1fr 1fr;
  }
}
```

---

# Semana 2 · Clase 7
## Diseño visual de UI

Temas:

- sombras
- bordes redondeados
- capas
- contraste entre superficies
- estados `hover`
- consistencia entre componentes

Objetivo:

- que el alumno note que el diseño moderno se apoya en detalles pequeños pero coherentes

---

# Semana 2 · Clase 7
## Componentes comunes en web

Se mostrarán ejemplos de:

- navbar
- hero
- cards
- badges
- pricing cards
- formularios básicos
- acordeones
- footers

No todos se evaluarán, pero sí ayudan a formar criterio visual.

---

# Semana 2 · Clase 8
## Responsive y revisión final

Temas:

- móvil primero
- ajustes de columnas
- botones cómodos para tocar
- consistencia de espacios
- pruebas visuales en distintas resoluciones

Actividad:

- revisión comparativa entre móvil y desktop

---

# Entrega semanal 2
## `single-price-grid-component-master/`

Debe demostrar:

- composición clara
- layout correcto
- uso de `Flexbox` y/o `Grid`
- buen CTA
- responsive bien resuelto

---

# Rúbrica de la semana 2

| Criterio | Puntos |
|----------|--------|
| Estructura del componente | 20 |
| Layout con Flexbox/Grid | 25 |
| Diseño visual | 25 |
| Botón y estados | 15 |
| Responsive | 15 |
| **Total** | **100** |

---

# Semana 3
## Mini-módulo de JavaScript

<div class="tag">Tarea semanal: `faq-accordion-main/`</div>

Meta de la semana:

- introducir JavaScript sin separarlo del diseño
- entender cómo una interfaz responde al usuario
- construir una interacción real y útil

---

# Semana 3 · Clase 9
## Qué es JavaScript dentro del diseño web

JavaScript se presenta como la capa que da vida a la interfaz.

Sirve para:

- responder a clics
- cambiar textos
- mostrar u ocultar elementos
- activar estados visuales
- crear componentes interactivos

---

# Semana 3 · Clase 9
## Fundamentos mínimos

Temas:

- variables
- strings y números
- booleanos
- funciones
- condicionales

Ejemplo:

```js
const isOpen = false;

function toggleState(value) {
  return !value;
}
```

---

# Semana 3 · Clase 10
## DOM y eventos

Temas:

- `document`
- `querySelector`
- `querySelectorAll`
- `addEventListener`
- clics y acciones del usuario

Ejemplo:

```js
const button = document.querySelector('.faq-question');

button.addEventListener('click', () => {
  console.log('abrir pregunta');
});
```

---

# Semana 3 · Clase 10
## Mostrar y ocultar contenido

Aplicación directa en acordeones:

- abrir respuesta
- cerrar respuesta
- cambiar icono o texto
- marcar estado activo

Ejemplo:

```js
item.classList.toggle('is-open');
```

```css
.answer {
  display: none;
}

.item.is-open .answer {
  display: block;
}
```

---

# Semana 3 · Clase 11
## Interacciones visuales útiles

Además del acordeón, se explicarán componentes simples como:

- tabs
- contadores
- carrusel básico
- modal simple
- mostrar/ocultar menú

> Estos componentes no serán obligatorios en la tarea 3, pero sirven para ampliar criterio.

---

# Semana 3 · Clase 11
## Carruseles: cuándo sí y cuándo no

Sí aportan cuando:

- muestran varias tarjetas o testimonios
- se usan con poco contenido
- ayudan a ahorrar espacio visual

No aportan cuando:

- ocultan información importante
- se usan por moda
- se vuelven difíciles de controlar en móvil

Si se usan, deben tener:

- botones siguiente/anterior
- indicador claro
- transición legible

---

# Semana 3 · Clase 12
## Accesibilidad básica en componentes interactivos

Temas:

- usar botones reales
- foco visible
- contraste
- texto legible
- `aria-expanded` en acordeones

Objetivo:

- que la interacción no solo funcione, sino que sea clara para cualquier usuario

---

# Entrega semanal 3
## `faq-accordion-main/`

Debe demostrar:

- diseño visual consistente
- preguntas y respuestas bien estructuradas
- interacción funcional
- estados visuales claros
- responsive

---

# Rúbrica de la semana 3

| Criterio | Puntos |
|----------|--------|
| Maquetación y estilo | 20 |
| Responsive | 15 |
| Selección del DOM | 20 |
| Eventos y lógica | 25 |
| Estados visuales y accesibilidad | 20 |
| **Total** | **100** |

---

# Semana 4
## Proyecto final integrador

<div class="tag">Entrega semanal: juego libre con CSS y JS</div>

Meta:

- juntar diseño visual
- layout
- responsive
- interacción
- lógica básica

---

# Semana 4 · Clase 13
## Elegir una idea viable

Opciones recomendadas:

- memorama
- piedra, papel o tijera
- trivia
- juego de reflejos
- simon dice básico
- tic-tac-toe

La idea debe poder terminarse en el tiempo del parcial.

---

# Semana 4 · Clase 14
## Estructura y lógica del juego

Todo juego debe incluir:

- pantalla inicial
- instrucciones
- zona de juego
- puntaje, vidas o rondas
- mensaje de ganar o perder
- botón de reinicio

---

# Semana 4 · Clase 15
## Diseño del juego

Temas:

- feedback visual
- uso de color para comunicar estado
- botones grandes y claros
- cards, paneles y overlays
- responsive

> En esta etapa importa tanto cómo funciona como cómo se entiende visualmente.

---

# Semana 4 · Clase 16
## Cierre, pruebas y presentación

Última revisión:

- errores visuales
- pruebas de clics
- revisión en móvil
- claridad de reglas
- orden del código

---

# Requisitos mínimos del juego

1. HTML estructurado.
2. CSS propio.
3. JavaScript en archivo externo.
4. Interacción real del usuario.
5. Lógica de puntuación, vidas o progreso.
6. Estado final de victoria o derrota.
7. Reinicio del juego.
8. Diseño responsivo.

---

# Qué juegos serían válidos

| Juego | Dificultad | Muy recomendable |
|-------|------------|------------------|
| Trivia | Baja | Sí |
| Piedra, papel o tijera | Baja | Sí |
| Juego de reflejos | Baja | Sí |
| Memorama | Media | Sí |
| Simon dice | Media | Sí |
| Tic-tac-toe | Media | Sí |

---

# Rúbrica del proyecto final

| Criterio | Puntos |
|----------|--------|
| Diseño visual | 20 |
| Layout y responsive | 15 |
| Uso del DOM | 20 |
| Lógica del juego | 25 |
| Estados, reinicio e interacción | 10 |
| Organización del código | 10 |
| **Total** | **100** |

---

# Mini-guía de diseño web útil

## Colores

- usar pocos colores
- cuidar contraste
- reservar el acento para acciones

## Tipografía

- máximo dos familias
- títulos claros
- párrafos cómodos de leer

## Espaciado

- dejar aire entre bloques
- repetir una escala de espacios

## Componentes

- botones claros
- cards consistentes
- íconos con propósito

---

# Temas extra sugeridos

Estos temas pueden aparecer como demos o ejercicios cortos en laboratorio:

- íconos
- badges
- formularios básicos
- tabs
- carrusel simple
- modal
- barra de progreso
- contador

No todos son obligatorios, pero enriquecen el criterio visual y la práctica.

---

# Lista general de verificación

Antes de cada entrega, revisar:

- ¿se entiende visualmente rápido?
- ¿hay buena jerarquía?
- ¿los colores funcionan?
- ¿el espaciado está cuidado?
- ¿se ve bien en celular?
- ¿los botones y estados están claros?
- ¿el JS funciona sin errores?

---

# Cierre del parcial

Este segundo parcial funciona como puente entre:

- diseño visual
- maquetación web
- interacción básica

Primero se aprende a **hacer que se vea bien**.
Después se aprende a **hacer que responda**.

Ese es el objetivo central del módulo.

---

*Diseño Web · Segundo Parcial*
*CSS, diseño visual aplicado y JavaScript básico*
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
    padding: 48px 58px;
  }
  h1 {
    color: #7c5cfc;
    font-size: 1.95em;
    border-bottom: 3px solid #7c5cfc;
    padding-bottom: 10px;
    margin-bottom: 18px;
  }
  h2 {
    color: #e85d9d;
    font-size: 1.35em;
  }
  h3 {
    color: #f5a623;
    font-size: 1.05em;
    margin-bottom: 8px;
  }
  code {
    background: #1a1a28;
    color: #7c5cfc;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.84em;
  }
  pre {
    background: #151521;
    border: 1px solid #2a2a40;
    border-radius: 10px;
    padding: 18px;
  }
  pre code {
    background: transparent;
    color: #e8e8f0;
    padding: 0;
    font-size: 0.78em;
    line-height: 1.45;
  }
  ul li, ol li {
    margin-bottom: 8px;
    line-height: 1.45;
  }
  strong { color: #f5a623; }
  em { color: #e85d9d; }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
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
  }
  .tag {
    background: #7c5cfc22;
    border: 1px solid #7c5cfc;
    color: #7c5cfc;
    padding: 4px 14px;
    border-radius: 4px;
    font-size: 0.68em;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 18px;
    display: inline-block;
  }
  .small {
    font-size: 0.88em;
  }
---

# Diseño Web
## Segundo Parcial
### Módulo completo de CSS y JavaScript básico

<div class="tag">Prof. Sebastian Astiazaran Lopez · 2026</div>

---

# Propósito del módulo

Durante este parcial el grupo trabajará con **CSS puro** y **JavaScript puro** para construir interfaces reales.

Al final del módulo cada alumno será capaz de:

- maquetar interfaces a partir de una referencia visual
- aplicar estilos consistentes y responsivos
- usar `Flexbox` y `Grid` correctamente
- manipular el DOM con JavaScript
- responder a eventos del usuario
- construir un proyecto final tipo juego con lógica básica

---

# Evidencias del parcial

## Tres tareas + un proyecto final

1. `recipe-page-main/`
2. `single-price-grid-component-master/`
3. `faq-accordion-main/`
4. Proyecto final: **juego libre** con CSS y JS

> La secuencia va de menor a mayor dificultad: primero diseño estático, luego layout responsivo y al final interacción con JavaScript.

---

# Ruta de aprendizaje

| Bloque | Enfoque | Evidencia |
|--------|---------|-----------|
| Bloque 1 | CSS base, tipografía, espaciado, colores | `recipe-page-main/` |
| Bloque 2 | Componentes, layout moderno, responsive | `single-price-grid-component-master/` |
| Bloque 3 | DOM, eventos, estados, accesibilidad | `faq-accordion-main/` |
| Bloque 4 | Integración de todo | Juego final |

---

# Reglas de trabajo

- Trabajaremos con **HTML, CSS y JavaScript sin frameworks**.
- Cada entrega debe respetar la estructura de carpetas del proyecto.
- Se evaluará más el **proceso, orden y comprensión** que la perfección visual absoluta.
- Cada alumno puede personalizar colores, textos e imágenes si mantiene la funcionalidad pedida.
- Todo proyecto debe verse correctamente en **celular y desktop**.

---

# Herramientas recomendadas

- VS Code o Cursor
- Navegador con DevTools
- `Live Server` o vista previa local
- `coolors.co` para paletas
- `cssgradient.io` para gradientes
- Google Fonts

> Objetivo: que el alumno aprenda a leer una referencia visual y convertirla en HTML + CSS + JS.
---

<!-- BLOQUE 1 -->

# Bloque 1
## CSS base para una página de receta

<div class="tag">Tarea 1 · `recipe-page-main/`</div>

La primera tarea busca que el alumno domine:

- estructura semántica
- tipografía
- color
- espaciado
- listas
- tablas sencillas
- diseño responsivo básico

---

# Qué debe lograr el alumno

## En `recipe-page-main/`

- reproducir la composición general de la receta
- colocar imagen principal, título, descripción y secciones
- estilizar listas ordenadas y desordenadas
- diseñar una tabla o bloque de nutrición
- usar una paleta parecida a la referencia
- respetar jerarquía visual y márgenes

---

# Clase 1 del bloque
## Reset, selectores y base global

Todo proyecto de CSS debe iniciar con una base estable:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Outfit', sans-serif;
  background-color: hsl(30, 54%, 90%);
  color: hsl(24, 5%, 18%);
}
```
---

Ideas clave:

- `box-sizing: border-box` evita errores de tamaño
- `margin: 0` quita espacios inesperados del navegador
- el `body` define color y tipografía general

---

# Clase 1 del bloque
## Variables CSS

Conviene guardar colores y medidas reutilizables:

```css
:root {
  --white: hsl(0, 0%, 100%);
  --stone-100: hsl(30, 54%, 90%);
  --stone-600: hsl(30, 10%, 34%);
  --stone-900: hsl(24, 5%, 18%);
  --brown-800: hsl(14, 45%, 36%);
  --rose-50: hsl(330, 100%, 98%);
  --rose-800: hsl(332, 51%, 32%);
}
```
---

Ventajas:

- facilita cambios de diseño
- da consistencia
- permite reutilizar el sistema visual

---

# Clase 2 del bloque
## Tipografía y jerarquía visual

La tarea de receta depende mucho de la tipografía.

```css
h1, h2 {
  font-family: 'Young Serif', serif;
}

h1 {
  font-size: 2rem;
  line-height: 1.1;
}

p, li {
  line-height: 1.7;
  color: var(--stone-600);
}
```

Puntos a enseñar:

- no todas las fuentes sirven para todo
- un encabezado necesita más peso visual que un párrafo
- la legibilidad vale más que el adorno

---

# Clase 2 del bloque
## Modelo de caja aplicado

La página de receta funciona bien para practicar caja, padding y bordes:

```css
.recipe-card {
  max-width: 740px;
  margin: 64px auto;
  background-color: var(--white);
  border-radius: 24px;
  padding: 40px;
}
```

Conceptos que deben dominar:

- `max-width`
- `margin: 0 auto`
- `padding`
- `border-radius`

---

# Clase 3 del bloque
## Imágenes, secciones y listas

Elementos clave del proyecto:

- imagen principal con bordes redondeados
- bloque de tiempo de preparación
- lista de ingredientes
- instrucciones numeradas
- tabla nutricional

Ejemplo:

```css
img {
  max-width: 100%;
  display: block;
  border-radius: 12px;
}

ul, ol {
  padding-left: 24px;
}
```

---

# Clase 3 del bloque
## Tablas o filas de nutrición

Aunque la referencia parece simple, aquí hay buena práctica de alineación:

```css
.nutrition-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 12px 0;
  border-bottom: 1px solid var(--stone-100);
}
```

Aprendizajes:

- dividir contenido en columnas
- alinear etiquetas y valores
- repetir un patrón visual consistente

---

# Clase 4 del bloque
## Responsive básico

La tarea debe funcionar en celular.

```css
@media (max-width: 768px) {
  .recipe-card {
    margin: 0;
    border-radius: 0;
    padding: 32px 24px;
  }
}
```

Aspectos que deben revisar:

- que el contenido no se corte
- que la imagen no se deforme
- que el texto conserve buena lectura
- que los espacios no sean exagerados

---

# Estrategia sugerida
## Para resolver `recipe-page-main/`

1. Construir primero el HTML semántico.
2. Definir variables de color y tipografía.
3. Estilizar el contenedor principal.
4. Dar formato a títulos, párrafos y listas.
5. Agregar la sección de nutrición.
6. Revisar responsive al final.

> Orden recomendado: estructura primero, decoración después.

---

# Checklist de la tarea 1

El alumno cumple si:

- usa `main`, `section`, encabezados y listas de manera correcta
- aplica paleta de color consistente
- utiliza fuentes similares a la referencia
- controla espaciado con `margin` y `padding`
- logra una composición limpia y centrada
- ajusta la vista móvil

---

# Evaluación de la tarea 1

| Criterio | Puntos |
|----------|--------|
| Estructura HTML semántica | 20 |
| Tipografía, color y jerarquía visual | 20 |
| Uso correcto del modelo de caja | 20 |
| Listas, bloques y tabla de nutrición | 20 |
| Adaptación responsiva | 20 |
| **Total** | **100** |

---

<!-- BLOQUE 2 -->

# Bloque 2
## Layout moderno y componentes

<div class="tag">Tarea 2 · `single-price-grid-component-master/`</div>

La segunda tarea sube de nivel:

- ya no solo importa el estilo
- ahora importa cómo se distribuyen los bloques
- el alumno debe combinar **Flexbox**, **Grid**, estados y responsive

---

# Qué debe lograr el alumno

## En `single-price-grid-component-master/`

- construir una tarjeta principal
- distribuir tres zonas con jerarquía clara
- destacar el precio y el botón de acción
- agregar efecto `hover` al botón
- adaptar el diseño de móvil a desktop

---

# Clase 5 del módulo
## Flexbox

`Flexbox` sirve para alinear contenido en una dimensión:

```css
.price-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
```

Usos directos en esta tarea:

- alinear precio y texto secundario
- acomodar textos y botón
- controlar separación interna

---

# Clase 5 del módulo
## Propiedades más útiles de Flexbox

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
}
```

Conceptos obligatorios:

- `display: flex`
- `flex-direction`
- `justify-content`
- `align-items`
- `gap`

---

# Clase 6 del módulo
## CSS Grid

La referencia del price grid se presta muy bien para `Grid`:

```css
.pricing-card {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .pricing-card {
    grid-template-columns: 1fr 1fr;
  }

  .pricing-card__intro {
    grid-column: 1 / -1;
  }
}
```

Aquí el alumno aprende a:

- definir columnas
- hacer que una sección ocupe todo el ancho
- cambiar estructura según el tamaño de pantalla

---

# Clase 6 del módulo
## Estructura del componente

Partes recomendadas del HTML:

- bloque superior de presentación
- bloque izquierdo con precio
- bloque derecho con beneficios

Eso permite hablar de:

- contenedores
- secciones hermanas
- clases reutilizables
- composición visual por zonas

---

# Clase 7 del módulo
## Botones, sombras y estados

El botón de esta tarea debe comunicar acción:

```css
.btn-signup {
  display: inline-block;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: hsl(71, 73%, 54%);
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn-signup:hover {
  transform: translateY(-2px);
  opacity: 0.92;
}
```

Aprendizajes:

- `transition`
- `hover`
- jerarquía visual del CTA

---

# Clase 7 del módulo
## Contraste y accesibilidad

En esta tarea es importante que el alumno revise:

- contraste entre fondo y texto
- tamaño legible del botón
- áreas clicables cómodas
- orden visual claro

Pregunta útil para clase:

> Si alguien entra a la página por 3 segundos, ¿entiende qué se ofrece y dónde debe hacer clic?

---

# Clase 8 del módulo
## Responsive aplicado al componente

El proyecto debe funcionar en dos estados:

- móvil: bloques apilados
- desktop: composición más amplia

Ejemplo:

```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
```

Esto ayuda a centrar el componente y practicar composición completa de página.

---

# Estrategia sugerida
## Para resolver `single-price-grid-component-master/`

1. Escribir el HTML por bloques.
2. Crear el contenedor principal de la tarjeta.
3. Resolver primero la versión móvil.
4. Agregar color, sombras y botón.
5. Convertir a desktop con `@media`.
6. Afinar espaciados y `hover`.

> Regla útil: primero que funcione, luego que se vea bonito.

---

# Checklist de la tarea 2

El alumno cumple si:

- usa una estructura clara de bloques
- organiza contenido con `Flexbox` o `Grid`
- destaca el precio y el CTA correctamente
- agrega estado `hover`
- adapta el componente a móvil y desktop
- mantiene consistencia visual

---

# Evaluación de la tarea 2

| Criterio | Puntos |
|----------|--------|
| Estructura correcta del componente | 20 |
| Uso de Flexbox y/o Grid | 25 |
| Jerarquía visual y color | 20 |
| Botón y estados interactivos | 15 |
| Responsive móvil/desktop | 20 |
| **Total** | **100** |

---

<!-- BLOQUE 3 -->

# Bloque 3
## Interactividad con JavaScript

<div class="tag">Tarea 3 · `faq-accordion-main/`</div>

Aquí aparece la parte nueva del parcial:

- DOM
- eventos
- clases dinámicas
- accesibilidad básica
- lógica de mostrar y ocultar contenido

---

# Qué debe lograr el alumno

## En `faq-accordion-main/`

- diseñar la tarjeta principal del FAQ
- mostrar y ocultar respuestas
- cambiar iconos o estados visuales
- usar JavaScript para abrir y cerrar preguntas
- respetar `hover`, `focus` y navegación básica por teclado

---

# Clase 9 del módulo
## Fundamentos de JavaScript

Antes de tocar el DOM, el alumno debe entender:

- variables
- tipos básicos
- funciones
- condicionales

```js
const isOpen = false;

function toggleState(currentValue) {
  return !currentValue;
}
```

Idea didáctica:

> Una variable guarda estado. Una función decide qué hacer con ese estado.

---

# Clase 9 del módulo
## Pensar en estados

El acordeón tiene un estado muy claro:

- pregunta cerrada
- pregunta abierta

Eso permite introducir:

- `true` y `false`
- condiciones con `if`
- cambios visuales según el estado

```js
if (isOpen) {
  // mostrar respuesta
} else {
  // ocultar respuesta
}
```

---

# Clase 10 del módulo
## Selección del DOM

JavaScript necesita encontrar elementos HTML:

```js
const faqItems = document.querySelectorAll('.faq-item');
const buttons = document.querySelectorAll('.faq-question');
```

Conceptos básicos:

- `document`
- `querySelector`
- `querySelectorAll`
- clases como punto de conexión entre CSS y JS

---

# Clase 10 del módulo
## Eventos

El acordeón existe gracias a los eventos:

```js
button.addEventListener('click', function () {
  console.log('hiciste clic');
});
```

Eventos mínimos del proyecto:

- `click`
- `keydown` o soporte accesible con botones reales
- `focus` visual desde CSS

---

# Clase 11 del módulo
## Manipulación de clases

Una forma sencilla de controlar el acordeón:

```js
item.classList.add('is-open');
item.classList.remove('is-open');
item.classList.toggle('is-open');
```

Y después en CSS:

```css
.faq-answer {
  display: none;
}

.faq-item.is-open .faq-answer {
  display: block;
}
```

Esto une comportamiento y presentación de manera clara.

---

# Clase 11 del módulo
## Recorrer elementos

Como hay varias preguntas, conviene usar repetición:

```js
faqItems.forEach((item) => {
  // trabajar cada pregunta
});
```

Aquí se introduce:

- colecciones de nodos
- `forEach`
- trabajo repetitivo sin duplicar código

---

# Clase 12 del módulo
## Accesibilidad del acordeón

Buenas prácticas mínimas:

- usar `<button>` para cada pregunta
- mostrar estado con `aria-expanded`
- esconder contenido con una clase clara
- mantener contraste y foco visible

Ejemplo:

```html
<button class="faq-question" aria-expanded="false">
  What is Frontend Mentor?
</button>
```

```js
button.setAttribute('aria-expanded', 'true');
```

---

# Clase 12 del módulo
## Si solo una pregunta debe quedar abierta

Buen ejercicio de lógica:

```js
faqItems.forEach((faq) => {
  faq.classList.remove('is-open');
});

currentItem.classList.add('is-open');
```

Con esto el alumno practica:

- cerrar elementos antes de abrir otro
- pensar en estado global
- diferenciar "elemento actual" vs "los demás"

---

# Estructura lógica sugerida
## Para resolver `faq-accordion-main/`

1. Construir el HTML del FAQ.
2. Diseñar la tarjeta con CSS.
3. Ocultar respuestas por defecto.
4. Seleccionar botones o ítems con JavaScript.
5. Agregar evento `click`.
6. Abrir/cerrar con clases.
7. Probar `hover`, `focus` y accesibilidad.

---

# Checklist de la tarea 3

El alumno cumple si:

- usa HTML semántico para preguntas y respuestas
- el acordeón abre y cierra con clic
- el cambio visual es claro
- el diseño es responsivo
- existen estados `hover` y `focus`
- el código JavaScript está ordenado y entendible

---

# Evaluación de la tarea 3

| Criterio | Puntos |
|----------|--------|
| Maquetación y estilo visual | 20 |
| Responsive y estructura del componente | 20 |
| Selección correcta del DOM | 20 |
| Eventos y lógica de apertura/cierre | 25 |
| Accesibilidad básica y estados visuales | 15 |
| **Total** | **100** |

---

<!-- BLOQUE 4 -->

# Proyecto final
## Juego libre con CSS y JavaScript

<div class="tag">Integrador final</div>

El proyecto final debe combinar:

- maquetación
- color y tipografía
- layout
- responsive
- DOM
- eventos
- lógica de juego

> El juego puede ser a consideración del alumno, siempre que cumpla los requisitos mínimos.

---

# Objetivo del proyecto final

El alumno debe demostrar que ya puede:

- diseñar una interfaz completa
- actualizar contenido desde JavaScript
- usar variables y funciones
- responder a acciones del usuario
- crear estados de juego: inicio, progreso y final

---

# Requisitos mínimos del juego

Todo proyecto final debe incluir:

1. **Pantalla inicial** con título e instrucciones.
2. **Área de juego** visible y ordenada.
3. **Interacción del usuario** con botones, teclado o clics.
4. **Lógica de puntuación**, vidas, tiempo o rondas.
5. **Mensaje de victoria o derrota**.
6. **Botón de reinicio**.
7. **Diseño responsivo**.
8. **Estilos propios en CSS**.
9. **JavaScript separado en archivo externo**.

---

# Requisitos técnicos mínimos

El juego debe usar por lo menos:

- `querySelector` o `querySelectorAll`
- `addEventListener`
- una o más funciones propias
- condicionales `if`
- actualización del DOM con `textContent`, clases o estilos
- al menos una estructura de repetición o colección

Opcionales para subir nivel:

- `setInterval`
- arreglos
- objetos
- animaciones CSS

---

# Qué juegos serían válidos

Opciones recomendadas para el grupo:

- Memorama
- Piedra, papel o tijera
- Adivina el número
- Trivia de opción múltiple
- Simon dice básico
- Whack-a-mole simple
- Tic-tac-toe
- Juego de reflejos con cronómetro

> Todos son válidos si el alcance se mantiene dentro de HTML, CSS y JavaScript básico.

---

# Opciones que suelen gustarles

## Recomendaciones por atractivo y dificultad

| Juego | Atractivo | Dificultad |
|------|-----------|------------|
| Memorama | Alto | Media |
| Piedra, papel o tijera | Alto | Baja |
| Trivia temática | Alto | Baja |
| Simon dice | Alto | Media |
| Tic-tac-toe | Medio/alto | Media |
| Reflejos con cronómetro | Alto | Baja |

---

# Propuestas concretas para el grupo

## 1. Memorama

Ideal para practicar:

- tarjetas
- `Grid`
- clases activas
- comparación de pares
- contador de intentos

## 2. Trivia temática

Ideal para practicar:

- preguntas y respuestas
- botones
- puntaje
- cambio de pantalla

---

# Más propuestas concretas

## 3. Piedra, papel o tijera

Ideal para practicar:

- botones
- aleatorios
- comparación con `if`
- marcador

## 4. Simon dice básico

Ideal para practicar:

- secuencias
- colores
- tiempos con `setTimeout`
- memoria visual

---

# Si quieren algo un poco más visual

## 5. Whack-a-mole simple

Valida muy bien:

- posiciones en pantalla
- temporizador
- clics rápidos
- aumento de puntaje

## 6. Juego de reflejos

Muy accesible para casi todos:

- un botón o zona activa
- medición de tiempo
- récord
- reinicio de partida

---

# Criterios para aceptar un juego libre

Si un alumno propone otra idea, será válida si:

- tiene objetivo claro
- puede ganarse o perderse
- usa interacción real del usuario
- muestra cambios en pantalla en tiempo real
- no depende de librerías externas
- su alcance es razonable para el parcial

Ejemplos válidos con aprobación previa:

- mini laberinto
- quiz musical
- minijuego de atrapar objetos
- rompecabezas simple

---

# Ideas que conviene limitar

No se recomienda pedir:

- juegos 3D
- multijugador en red
- física compleja
- bases de datos
- login
- APIs externas obligatorias

La meta del parcial no es hacer algo enorme, sino **integrar bien lo básico**.

---

# Estructura sugerida del proyecto final

```text
/mi-juego
  index.html
  styles.css
  script.js
  /assets
```

Separación recomendada:

- `index.html` para estructura
- `styles.css` para diseño
- `script.js` para lógica

---

# Flujo recomendado para construir el juego

1. Definir la idea y reglas del juego.
2. Dibujar un boceto rápido de pantallas.
3. Maquetar HTML.
4. Aplicar CSS base.
5. Programar interacción mínima.
6. Agregar puntaje, reinicio y mensajes.
7. Ajustar responsive.
8. Probar varias veces.

---

# Rúbrica del proyecto final

| Criterio | Puntos |
|----------|--------|
| Diseño visual y orden del CSS | 20 |
| Layout y responsive | 15 |
| Uso correcto del DOM | 20 |
| Lógica del juego | 25 |
| Interacción, reinicio y estados | 10 |
| Organización del código | 10 |
| **Total** | **100** |

---

# Evidencias de aprendizaje del parcial

Al terminar este módulo, el alumno ya habrá practicado:

- páginas informativas
- componentes reutilizables
- layout moderno
- interacción básica
- pensamiento lógico
- retroalimentación visual al usuario

Esto lo prepara para temas posteriores como:

- consumo de datos
- proyectos más dinámicos
- frameworks de frontend

---

# Lista de verificación general

Antes de entregar cualquier tarea, revisar:

- ¿el HTML está ordenado y bien identado?
- ¿el CSS está separado y comentado cuando hace falta?
- ¿la página funciona en móvil?
- ¿hay contraste suficiente?
- ¿los botones tienen `hover` o `focus`?
- ¿el JS está enlazado correctamente?
- ¿no hay errores en consola?

---

# Forma de entrega sugerida

Cada alumno debe entregar:

- carpeta del proyecto completa
- archivos `index.html`, `styles.css` y `script.js` cuando aplique
- evidencia visual o captura
- nombre completo en comentario o footer del proyecto

Opcional:

- subirlo a GitHub Pages
- agregar un `README.md` breve

---

# Cierre del parcial

## De CSS a JavaScript

Secuencia pedagógica del módulo:

- primero aprenden a **maquetar**
- después aprenden a **distribuir**
- al final aprenden a **dar vida** a la interfaz

Ese es exactamente el puente entre diseño web estático y desarrollo frontend básico.

---

# Resumen final

## Entregas del parcial

1. `recipe-page-main/` para tipografía, color y estructura
2. `single-price-grid-component-master/` para layout, responsive y estados
3. `faq-accordion-main/` para DOM, eventos y JS básico
4. Juego final libre para integrar todo

---

# Mensaje para el grupo

No se espera perfección absoluta.

Sí se espera:

- orden
- intención visual
- mejora progresiva
- lógica funcional
- trabajo constante

> Un proyecto sencillo pero bien resuelto vale más que uno muy ambicioso e incompleto.

---

*Diseño Web · Segundo Parcial · CSS + JavaScript básico*
*CBTIS / Preparatoria · Prof. Sebastian Astiazaran Lopez*
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
    color: #7c5cfc;
    font-size: 2em;
    border-bottom: 3px solid #7c5cfc;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  h2 {
    color: #e85d9d;
    font-size: 1.5em;
  }
  h3 {
    color: #f5a623;
    font-size: 1.1em;
    margin-bottom: 8px;
  }
  code {
    background: #1a1a28;
    color: #7c5cfc;
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
  em { color: #e85d9d; }
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
  .tag {
    background: #7c5cfc22;
    border: 1px solid #7c5cfc;
    color: #7c5cfc;
    padding: 4px 16px;
    border-radius: 4px;
    font-size: 0.7em;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: inline-block;
  }
---

<!-- PORTADA PARCIAL 2 -->
# 🎨 Diseño Web
## Segundo Parcial
### CSS, Layout Moderno y Frameworks

<div class="tag">Mar – Abr 2025 · Prof. Astiazaran</div>

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 9: Introducción a CSS                 -->
<!-- ════════════════════════════════════════════ -->

# Clase 9 — Introducción a CSS

<div class="tag">Semana 6 · CSS Básico</div>

**¿Qué vamos a aprender?**

- 🎨 Qué es CSS y cómo se conecta con HTML
- 🎯 Selectores: cómo apuntar a elementos específicos
- 🖌️ Propiedades básicas: color, fuentes, fondo



---

## ¿Qué es CSS?

**CSS** = Cascading Style Sheets (Hojas de Estilo en Cascada)

Si HTML es el esqueleto 🦴, CSS es la ropa 👗 y el maquillaje 💄.

```html
<!-- HTML sin CSS -->
<h1>Hola Mundo</h1>   →   texto negro, sin estilo

<!-- Con CSS -->
h1 { color: hotpink; font-size: 3em; }  →  ¡TÍTULO ROSA GIGANTE!
```

---

## 3 formas de poner CSS

### 1. Externo (la mejor forma ✅)
```html
<link rel="stylesheet" href="estilos.css">
```

### 2. Interno (dentro del HTML)
```html
<style>
  h1 { color: red; }
</style>
```

### 3. Inline (en el elemento, evitar 🚫)
```html
<h1 style="color: red;">Texto rojo</h1>
```

---

## Selectores CSS — ¿cómo apuntar a elementos?

```css
/* Por etiqueta — afecta TODOS los párrafos */
p { color: white; }

/* Por clase — afecta todo lo que tenga class="azul" */
.azul { color: #7c5cfc; }

/* Por ID — afecta solo el elemento con id="titulo" */
#titulo { font-size: 3em; }

/* Combinados */
.tarjeta p { font-size: 0.9em; }   /* <p> dentro de .tarjeta */
```

---

## Propiedades básicas de texto y color

```css
p {
  /* Colores */
  color: #e8e8f0;                 /* Color del texto */
  background-color: #1a1a28;      /* Fondo */

  /* Tipografía */
  font-family: 'Arial', sans-serif;
  font-size: 16px;                /* o 1em, o 1rem */
  font-weight: bold;              /* normal, bold, 100-900 */
  line-height: 1.6;               /* Espaciado entre líneas */
  text-align: center;             /* left, right, center, justify */

  /* Decoración */
  text-decoration: none;          /* quita subrayado de links */
  letter-spacing: 2px;            /* espacio entre letras */
}
```

---

## 🎯 Actividad — Clase 9

### "Dale estilo a tu artículo" (20 min)

Abre el `articulo.html` de la Clase 5 y crea un archivo `estilo.css`.
Conéctalo con `<link>` en el HTML.

Aplica al menos:
1. **Color de fondo** a la página (`body`)
2. **Color diferente** para cada nivel de encabezado (`h1`, `h2`)
3. **Fuente y tamaño** para los párrafos
4. **Una clase propia** que uses en al menos un elemento
5. **Color de fondo** para el `<header>` y `<footer>`

> 💡 Usa [coolors.co](https://coolors.co) para encontrar paletas de colores bonitas

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 10: Modelo de Caja                    -->
<!-- ════════════════════════════════════════════ -->

# Clase 10 — El Modelo de Caja (Box Model)

<div class="tag">Semana 6 · CSS Layout</div>

**¿Qué vamos a aprender?**

- 📦 Qué es el modelo de caja y por qué todo en CSS es una caja
- 📐 Margin, Padding, Border: la diferencia exacta
- 🔧 `box-sizing: border-box` — el truco más importante

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## Todo es una caja

En CSS, **cada elemento es un rectángulo**. Este rectángulo tiene 4 capas:

```
┌─────────────────────────────────┐
│            MARGIN               │  ← Espacio fuera del elemento
│   ┌─────────────────────────┐   │
│   │         BORDER          │   │  ← El borde visible
│   │   ┌─────────────────┐   │   │
│   │   │     PADDING     │   │   │  ← Espacio dentro del borde
│   │   │   ┌─────────┐   │   │   │
│   │   │   │ CONTENT │   │   │   │  ← Tu texto/imagen
│   │   │   └─────────┘   │   │   │
│   │   └─────────────────┘   │   │
│   └─────────────────────────┘   │
└─────────────────────────────────┘
```

---

## Margin vs Padding — ¿cuál es cuál?

**Padding** = espacio *adentro* del elemento (afecta al fondo)

**Margin** = espacio *afuera* del elemento (transparente)

```css
.tarjeta {
  /* Padding — espacio interior */
  padding: 20px;              /* todos los lados */
  padding: 10px 20px;         /* arriba/abajo | izq/der */
  padding-top: 10px;          /* solo arriba */

  /* Margin — espacio exterior */
  margin: 0 auto;             /* centrar horizontalmente */
  margin-bottom: 16px;

  /* Border */
  border: 2px solid #7c5cfc;
  border-radius: 8px;         /* esquinas redondeadas */
}
```

---

## El truco más importante: `box-sizing`

Por defecto, `width` solo mide el contenido. El padding y border se suman.

```css
/* SIN box-sizing — confuso 😵 */
.caja {
  width: 200px;
  padding: 20px;
  /* Ancho real = 200 + 20 + 20 = 240px */
}

/* CON box-sizing — predecible ✅ */
* {
  box-sizing: border-box;
}
.caja {
  width: 200px;
  padding: 20px;
  /* Ancho real = 200px exactos */
}
```

> 💡 Siempre pon `* { box-sizing: border-box; }` al inicio de tu CSS

---

## 🎯 Actividad — Clase 10

### "Tarjeta de presentación" (20 min)

Crea una tarjeta de presentación digital en HTML+CSS:

```html
<div class="tarjeta">
  <img src="..." alt="foto">
  <h2>Tu nombre</h2>
  <p class="rol">Estudiante de Diseño Web</p>
  <p>Una frase o descripción corta</p>
  <a href="#">Ver mi GitHub</a>
</div>
```

La tarjeta debe tener:
- Fondo diferente al body, con `padding` visible
- `border-radius` para esquinas redondeadas
- `border` de algún color
- `margin` para que no esté pegada al borde
- Ancho máximo con `max-width` y centrada con `margin: 0 auto`

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 11: Fondos, Degradados y Sombras      -->
<!-- ════════════════════════════════════════════ -->

# Clase 11 — Fondos, Degradados y Sombras

<div class="tag">Semana 6 · CSS Decorativo</div>

**¿Qué vamos a aprender?**

- 🎨 Fondos con color, imagen y gradientes
- 🌈 `linear-gradient` y `radial-gradient`
- 💡 `box-shadow` y `text-shadow` para dar profundidad

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## Fondos en CSS

```css
.hero {
  /* Solo color */
  background-color: #1a1a28;

  /* Imagen de fondo */
  background-image: url('fondo.jpg');
  background-size: cover;       /* cubre toda el área */
  background-position: center;
  background-repeat: no-repeat;

  /* Degradado lineal */
  background: linear-gradient(135deg, #7c5cfc, #e85d9d);

  /* Degradado radial */
  background: radial-gradient(circle at center, #7c5cfc, #0a0a0f);
}
```

---

## Sombras

```css
.tarjeta {
  /* Box shadow: eje-x eje-y difuminado color */
  box-shadow: 0 4px 20px rgba(124, 92, 252, 0.3);

  /* Sombra múltiple */
  box-shadow:
    0 2px 4px rgba(0,0,0,0.5),
    0 8px 32px rgba(124, 92, 252, 0.2);

  /* Sombra interior */
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.5);
}

h1 {
  /* Sombra de texto */
  text-shadow: 0 0 20px rgba(124, 92, 252, 0.8);
}
```

---

## 🎯 Actividad — Clase 11

### "Banner de héroe" (20 min)

Crea una sección `<header class="hero">` que sea el banner de inicio de tu proyecto:

Requisitos:
- Fondo con **degradado** (usa 2 colores que te gusten)
- Texto centrado con `text-align: center`
- `padding` generoso (mínimo `80px 40px`)
- El título con **text-shadow**
- Un botón `<a class="btn">` con `background`, `padding`, `border-radius` y `box-shadow`

> 🎨 Herramienta: [cssgradient.io](https://cssgradient.io) para generar gradientes visualmente

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 12: Posicionamiento CSS               -->
<!-- ════════════════════════════════════════════ -->

# Clase 12 — Posicionamiento CSS

<div class="tag">Semana 6 · CSS Position</div>

**¿Qué vamos a aprender?**

- 📌 Las 5 formas de posicionar elementos en CSS
- 🔝 `fixed` y `sticky` — navbars que se quedan arriba
- 🗺️ `z-index` — quién va encima de quién

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## Los 5 valores de `position`

```css
/* Static — el default, flujo normal */
.elemento { position: static; }

/* Relative — se mueve RELATIVO a su posición normal */
.elemento { position: relative; top: 10px; left: 20px; }

/* Absolute — se posiciona respecto a su padre más cercano */
.padre { position: relative; }
.hijo  { position: absolute; top: 0; right: 0; }

/* Fixed — se fija respecto a la VENTANA, no hace scroll */
.navbar { position: fixed; top: 0; width: 100%; }

/* Sticky — como fixed pero solo dentro de su contenedor */
.encabezado { position: sticky; top: 0; }
```

---

## Z-index — capas

Cuando los elementos se sobreponen, `z-index` controla cuál va encima:

```css
.fondo     { z-index: 0; }   /* detrás */
.contenido { z-index: 10; }  /* en medio */
.navbar    { z-index: 100; } /* siempre arriba de todo */
.modal     { z-index: 999; } /* encima de todo */
```

> 💡 El `z-index` solo funciona en elementos con `position` diferente a `static`

---

## 🎯 Actividad — Clase 12

### "Navbar sticky" (20 min)

Agrega al proyecto de tu parcial una barra de navegación que se quede fija al hacer scroll:

```css
nav {
  position: sticky; /* o fixed */
  top: 0;
  z-index: 100;
  background-color: #12121a;
  padding: 16px 40px;
  /* ... más estilos */
}
```

Requisitos:
- La navbar se mantiene visible al hacer scroll
- Tiene links hacia las secciones de tu página
- Tiene un fondo con algo de transparencia o blur si quieres probar: `backdrop-filter: blur(10px)`

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 13: Flexbox                           -->
<!-- ════════════════════════════════════════════ -->

# Clase 13 — Flexbox

<div class="tag">Semana 7 · CSS Layout Moderno</div>

**¿Qué vamos a aprender?**

- 🧲 Qué es Flexbox y cuándo usarlo
- ↔️ Ejes: main axis y cross axis
- 🎯 Las propiedades más importantes del padre e hijos

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Qué es Flexbox?

Flexbox = Flexible Box Layout

Es la forma moderna de alinear y distribuir elementos en una fila o columna.

```css
/* Antes de Flexbox: hacks con float, inline-block... 😭 */

/* Con Flexbox: */
.contenedor {
  display: flex;
  /* ¡Ya está! Los hijos se alinean en fila */
}
```

---

## Propiedades del contenedor (padre)

```css
.padre {
  display: flex;

  /* Dirección */
  flex-direction: row;          /* fila (default) | column */

  /* Alineación en el eje principal (horizontal si row) */
  justify-content: center;      /* flex-start | flex-end | space-between | space-around */

  /* Alineación en el eje cruzado (vertical si row) */
  align-items: center;          /* flex-start | flex-end | stretch */

  /* ¿Los hijos se envuelven si no caben? */
  flex-wrap: wrap;              /* nowrap | wrap */

  /* Gap entre hijos */
  gap: 16px;
}
```

---

## Propiedades de los hijos

```css
.hijo {
  /* Cuánto puede crecer */
  flex-grow: 1;     /* 0 = no crece, 1 = crece igual que otros */

  /* Cuánto puede encogerse */
  flex-shrink: 0;   /* 0 = no se encoge */

  /* Tamaño base */
  flex-basis: 200px;

  /* Shorthand de los tres */
  flex: 1;          /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  flex: 0 0 300px;  /* no crece, no encoge, base 300px */
}
```

---

## Casos de uso de Flexbox

```css
/* Navbar */
nav { display: flex; justify-content: space-between; align-items: center; }

/* Centrar algo perfectamente */
.centrado { display: flex; justify-content: center; align-items: center; }

/* Fila de tarjetas que se envuelven */
.tarjetas { display: flex; flex-wrap: wrap; gap: 20px; }

/* Dos columnas donde la segunda ocupa el resto */
.layout { display: flex; }
.sidebar { flex: 0 0 250px; }
.main    { flex: 1; }
```

---

## 🎯 Actividad — Clase 13

### "Fila de tarjetas" (20 min)

Crea una sección con **4 tarjetas** usando Flexbox:

```html
<section class="tarjetas">
  <div class="tarjeta">🚀 Tarjeta 1</div>
  <div class="tarjeta">⭐ Tarjeta 2</div>
  <div class="tarjeta">🎨 Tarjeta 3</div>
  <div class="tarjeta">💡 Tarjeta 4</div>
</section>
```

- Las tarjetas deben estar en **fila y envueltas** (`flex-wrap: wrap`)
- Deben tener el mismo tamaño con `flex: 1 1 200px`
- Con `gap` entre ellas
- Cada tarjeta con `padding`, `border-radius` y color de fondo

Bonus: haz que en pantalla pequeña (resize la ventana) las tarjetas bajen a 1 columna.

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 14: CSS Grid                          -->
<!-- ════════════════════════════════════════════ -->

# Clase 14 — CSS Grid

<div class="tag">Semana 7 · CSS Layout Moderno</div>

**¿Qué vamos a aprender?**

- 🗺️ Qué es CSS Grid y cuándo usarlo vs Flexbox
- 📐 Columnas, filas y áreas de grid
- 🏗️ Construir layouts de página completos

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## Flexbox vs Grid — ¿cuándo usar cuál?

| Flexbox | CSS Grid |
|---------|----------|
| Una dimensión (fila **o** columna) | Dos dimensiones (filas **y** columnas) |
| Navegación, botones, tarjetas en fila | Layouts de página completos |
| Componentes pequeños | Estructura general |
| "Cuánto espacio te da el contenido" | "Defino el espacio primero" |

> 💡 Muchos layouts usan **Grid para la estructura** y **Flexbox dentro** de cada sección

---

## CSS Grid básico

```css
.grid {
  display: grid;

  /* 3 columnas iguales */
  grid-template-columns: 1fr 1fr 1fr;
  /* O más corto: */
  grid-template-columns: repeat(3, 1fr);

  /* 2 columnas específicas */
  grid-template-columns: 250px 1fr;

  /* Filas */
  grid-template-rows: auto;

  /* Espacio entre celdas */
  gap: 20px;
}
```

---

## Grid Areas — nombrar zonas

```css
.pagina {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
}

/* Asignar cada elemento a su área */
header { grid-area: header; }
.sidebar { grid-area: sidebar; }
main { grid-area: main; }
footer { grid-area: footer; }
```

---

## 🎯 Actividad — Clase 14

### "Layout de revista" (20 min)

Crea un `layout.html` con un grid de revista/blog:

```css
.grid-revista {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
/* La primera tarjeta ocupa 2 columnas */
.destacada {
  grid-column: span 2;
}
```

- Al menos 5 "artículos" (divs con título y texto corto)
- El primero debe ser **destacado** y ocupar más espacio
- Con colores y padding para que se vea bien

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 15: Diseño Responsivo                 -->
<!-- ════════════════════════════════════════════ -->

# Clase 15 — Diseño Responsivo

<div class="tag">Semana 7 · Media Queries</div>

**¿Qué vamos a aprender?**

- 📱 Qué es el diseño responsivo y por qué todos lo necesitan
- 🔧 Media queries: cómo cambiar estilos según el tamaño
- 📐 Unidades relativas: `em`, `rem`, `%`, `vw`, `vh`

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Qué es el diseño responsivo?

Un sitio web **responsivo** se adapta a cualquier tamaño de pantalla.

```
📱 Celular:  320px – 768px
💻 Tablet:   768px – 1024px
🖥️ Desktop:  1024px +
```

> 💡 Hoy en día, **más del 60%** del tráfico web viene de celulares. Un sitio no responsivo pierde más de la mitad de visitantes.

---

## Media Queries

```css
/* Estilos para TODOS (mobile-first) */
.tarjetas {
  display: flex;
  flex-direction: column; /* 1 columna en celular */
  gap: 16px;
}

/* En tablets y más grande */
@media (min-width: 768px) {
  .tarjetas {
    flex-direction: row;   /* fila en tablet */
    flex-wrap: wrap;
  }
}

/* En desktop */
@media (min-width: 1024px) {
  .tarjetas {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Unidades relativas

```css
/* rem — relativo al tamaño raíz (html) */
h1 { font-size: 2rem; }  /* = 2 × 16px = 32px */
p  { font-size: 1rem; }  /* = 16px */

/* em — relativo al padre */
.contenedor { font-size: 18px; }
.contenedor p { font-size: 0.9em; } /* = 0.9 × 18 = 16.2px */

/* % — porcentaje del padre */
.columna { width: 50%; }

/* vw / vh — porcentaje de la ventana */
.hero { height: 100vh; } /* altura de toda la ventana */
.banner { width: 100vw; }
```

---

## 🎯 Actividad — Clase 15

### "Hazlo responsivo" (20 min)

Toma el proyecto que llevas y hazlo responsivo:

1. Agrega al `<head>`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. Abre las **DevTools** (`F12`) → Toggle device toolbar (📱)
3. Ajusta el CSS para que:
   - En celular: todo en **1 columna**, fuentes más pequeñas
   - En tablet: **2 columnas**
   - En desktop: **3 columnas**
4. Verifica que la navbar no quede cortada en celular

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 16: Bootstrap                         -->
<!-- ════════════════════════════════════════════ -->

# Clase 16 — Bootstrap

<div class="tag">Semanas 11–12 · Framework CSS</div>

**¿Qué vamos a aprender?**

- 🚀 Qué es Bootstrap y para qué sirve
- 🗂️ El sistema de grid de 12 columnas
- 🧩 Componentes listos para usar: cards, navbar, buttons

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Qué es Bootstrap?

Bootstrap es un **framework CSS** creado por Twitter.
Incluye estilos, componentes y un sistema de grid listos para usar.

```html
<!-- Solo agrega esta línea al <head> y listo -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
>
```

**¿Cuándo usar Bootstrap?**
- Cuando necesitas un sitio rápido y profesional
- Cuando trabajas en equipo y quieren estilos consistentes
- Para aprender patrones de diseño comunes

---

## El Grid de Bootstrap (12 columnas)

```html
<div class="container">
  <div class="row">
    <!-- 4+4+4 = 12 columnas = 3 iguales en desktop -->
    <div class="col-md-4">Columna 1</div>
    <div class="col-md-4">Columna 2</div>
    <div class="col-md-4">Columna 3</div>
  </div>
  <div class="row">
    <!-- 8+4 = sidebar + main -->
    <div class="col-md-8">Contenido principal</div>
    <div class="col-md-4">Sidebar</div>
  </div>
</div>
```

> `col-` → siempre | `col-sm-` → desde 576px | `col-md-` → desde 768px | `col-lg-` → desde 992px

---

## Componentes Bootstrap más útiles

```html
<!-- Botones -->
<button class="btn btn-primary">Azul</button>
<button class="btn btn-outline-secondary">Borde gris</button>

<!-- Card -->
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Descripción</p>
    <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div>

<!-- Alert -->
<div class="alert alert-success">¡Operación exitosa!</div>
```

---

## 🎯 Actividad — Clase 16

### "Landing page con Bootstrap" (20 min)

Crea `bootstrap_landing.html` con Bootstrap desde CDN:

1. Un `<nav class="navbar">` con el nombre de tu proyecto y links
2. Una sección hero con `container` y texto centrado
3. Una fila de **3 cards** con `col-md-4` cada una
4. Cada card con imagen (picsum.photos), título, texto y botón
5. Un footer simple con copyright

> Usa las clases de utilidad de Bootstrap: `text-center`, `mt-4`, `p-4`, `bg-dark`, etc.

---

<!-- ════════════════════════════════════════════ -->
<!-- CLASE 17: Tailwind CSS                      -->
<!-- ════════════════════════════════════════════ -->

# Clase 17 — Tailwind CSS

<div class="tag">Semana 11 · Framework CSS</div>

**¿Qué vamos a aprender?**

- 🌊 Qué es Tailwind y su filosofía "utility-first"
- 🎨 Cómo aplicar estilos con clases directamente en el HTML
- ⚡ Por qué es tan popular en el desarrollo moderno

> ⏱️ 20 min explicación → 20 min actividad en clase

---

## ¿Qué es Tailwind?

Tailwind es un framework CSS diferente a Bootstrap.
En lugar de componentes predefinidos, tiene **clases de utilidad**.

```html
<!-- Bootstrap: clase de componente -->
<button class="btn btn-primary">Click</button>

<!-- Tailwind: clases de utilidad -->
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Click
</button>
```

---

## Tailwind vía CDN (para practicar)

```html
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

## Clases más comunes

```html
<!-- Colores -->
bg-gray-900   text-white   border-purple-500

<!-- Espaciado (0.25rem por unidad) -->
p-4   px-6   py-2   mt-4   mb-8   gap-4

<!-- Tipografía -->
text-xl   text-2xl   font-bold   text-center

<!-- Layout -->
flex   grid   grid-cols-3   items-center   justify-between

<!-- Bordes -->
rounded   rounded-lg   border   border-2
```

---

## 🎯 Actividad — Clase 17

### "Perfil con Tailwind" (20 min)

Crea `tailwind_perfil.html` — una tarjeta de perfil **sin escribir CSS propio**, solo con clases de Tailwind:

```html
<div class="min-h-screen bg-gray-900 flex items-center justify-center">
  <div class="bg-gray-800 rounded-2xl p-8 max-w-sm text-center shadow-xl">
    <img class="w-24 h-24 rounded-full mx-auto mb-4" src="..." alt="foto">
    <h1 class="text-white text-2xl font-bold">Tu nombre</h1>
    <p class="text-gray-400 mt-2">Estudiante de Diseño Web</p>
    <div class="flex gap-3 justify-center mt-6">
      <a class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">GitHub</a>
      <a class="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg">Contacto</a>
    </div>
  </div>
</div>
```

---

<!-- ════════════════════════════════════════════ -->
<!-- PROYECTO PARCIAL 2                          -->
<!-- ════════════════════════════════════════════ -->

# 🏆 Proyecto — Segundo Parcial

<div class="tag">Entrega: Semana 11 · Viernes</div>

## "Mi Sitio con Estilo"

Toma el sitio del Parcial 1 y transfórmalo con CSS moderno.

---

## Requisitos del Proyecto P2

### Lo que ya tenías (P1):
- 2–3 páginas HTML con contenido ✅

### Lo que agregas (P2):
- 🎨 Estilos CSS propios: colores, tipografía, espaciado
- 📐 Al menos **1 sección con Flexbox**
- 🗂️ Al menos **1 sección con CSS Grid**
- 📱 **Responsivo**: se ve bien en celular (media queries)
- 🎯 Una sección hero con gradiente y sombras
- 🧩 Navbar con posición sticky o fixed

---

## Criterios de evaluación P2

| Criterio | Puntos |
|----------|--------|
| CSS propio, organizado en archivo externo | 20 |
| Uso correcto de Flexbox | 20 |
| Uso correcto de Grid | 15 |
| Diseño responsivo funcional (celular/desktop) | 25 |
| Diseño visual consistente y cuidado | 20 |
| **Total** | **100** |

> 💡 **Bonus +10:** Si agregas animaciones CSS (`transition`, `hover`, `@keyframes`)

---

## ¡Buen trabajo en el segundo parcial! 🎨

### Lo que aprendiste:
- ✅ CSS: selectores, modelo de caja, colores, fuentes
- ✅ Flexbox para layouts de una dimensión
- ✅ CSS Grid para layouts de página
- ✅ Media queries y diseño responsivo
- ✅ Bootstrap y Tailwind

### Lo que viene (3er Parcial):
- 💻 JavaScript y dinámica
- 🔗 Fetch API — conectar a servicios reales
- ⚛️ Introducción a React o Vue
- 🚀 Deploy continuo

---

*Diseño Web · Segundo Parcial · Prof. Sebastian Astiazaran Lopez*
*CBTIS / Preparatoria · Mar–Abr 2025*
