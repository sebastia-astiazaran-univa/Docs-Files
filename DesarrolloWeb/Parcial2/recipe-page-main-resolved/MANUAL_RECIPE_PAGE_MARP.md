---
marp: true
theme: default
paginate: true
title: Manual Recipe Page — Preparatoria
description: Guía paso a paso para el proyecto Recipe page
---

<!-- _class: lead -->
# Manual Recipe Page


Desarrollo Web — Paso a paso con HTML y CSS

---

## 1. ¿Qué vas a construir?

- **Una página web de receta de omelette**
- Incluye:
  - Imagen principal
  - Título y descripción
  - Tiempo de preparación
  - Ingredientes
  - Instrucciones (pasos numerados)
  - Tabla de nutrición

Objetivo: que se parezca al diseño de referencia (móvil y escritorio).

---

## Archivos importantes del proyecto

| Archivo / carpeta | Uso |
|-------------------|-----|
| `index.html` | Contenido de la página |
| `assets/images/image-omelette.jpeg` | Imagen del omelette |
| `style-guide.md` | Colores, fuentes, tamaños |
| `design/mobile-design.jpg` | Diseño móvil |
| `design/desktop-design.jpg` | Diseño escritorio |

Ten el diseño abierto para comparar mientras programas.

---

## 2. Preparar el entorno — VS Code

1. Abre **VS Code**
2. **Archivo → Abrir carpeta**
3. Selecciona la carpeta **recipe-page-main**
4. Verás en el panel izquierdo: `index.html`, `assets`, etc.

---

## 2. Instalar Live Server

1. Panel de **Extensiones** (icono de cuadrados)
2. Busca **Live Server**
3. Instala **Live Server** (Ritwick Dey)
4. Reinicia VS Code si lo pide

---

## 2. Ver la página en el navegador

1. Abre `index.html`
2. Clic derecho → **Open with Live Server**
3. Se abre el navegador (ej. `http://127.0.0.1:5500/...`)
4. Al guardar (`Ctrl+S` / `Cmd+S`) la página se actualiza sola

---

## 3. Analizar el diseño

- **Tarjeta blanca** centrada sobre fondo claro
- Arriba: **imagen**
- Luego: **título**, **texto**, recuadro de **tiempo**, **ingredientes**, **instrucciones**, **nutrición**

Haz una lista de las 7 partes antes de escribir código.

---

## 3. Relacionar con HTML

- Contenedor → `main` o `article` con clase (ej. `recipe-card`)
- Títulos → `h1`, `h2`, `h3`
- Párrafos → `p`
- Listas → `ul`/`li` (ingredientes), `ol`/`li` (instrucciones)
- Nutrición → `table` o `div` por fila

Usar etiquetas semánticas ayuda a la accesibilidad.

---

## 4. HTML — Paso 1 y 2

**Paso 1:** Estructura base
- `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- En `<head>`: `meta charset`, viewport, `title`

**Paso 2:** Contenedor principal
```html
<main class="recipe-card">
  <!-- todo el contenido aquí -->
</main>
```

---

## 4. HTML — Paso 3 y 4

**Paso 3:** Imagen
```html
<img src="./assets/images/image-omelette.jpeg" alt="Omelette en un plato">
```

**Paso 4:** Título y descripción
- `h1` con el título de la receta
- `p` con el texto descriptivo

---

## 4. HTML — Pasos 5 a 7

**Paso 5:** Tiempo de preparación — `section` con `h2`/`h3` y lista `ul`/`li`

**Paso 6:** Ingredientes — `h2` + `ul` con `li`

**Paso 7:** Instrucciones — `h2` + `ol` con un `li` por paso

---

## 4. HTML — Paso 8 y 9

**Paso 8:** Nutrición
- `h2` "Nutrition"
- Párrafo explicativo
- Tabla o filas (nombre + valor): Calories, Carbs, Protein, Fat

**Paso 9:** Attribution al final del `body` con tu nombre en "Coded by"

---

## 5. Conectar CSS

1. Crear archivo **styles.css** en la raíz del proyecto
2. En el `<head>` de `index.html`:
```html
<link rel="stylesheet" href="styles.css">
```
3. Probar: en `styles.css` pon `body { background-color: #f0f0f0; }` y recarga el navegador

---

## 6. Estilos base

- **Reset:** `* { box-sizing: border-box; }`, `body { margin: 0; padding: 0; }`
- **Fuentes:** Enlazar Google Fonts (Young Serif, Outfit) en el `head`
- **Body:** `font-family`, `background-color`, `color` según `style-guide.md`
- **Tarjeta:** `.recipe-card` — fondo blanco, `border-radius`, `max-width`, `padding`

---

## 6. Títulos y modelo de caja

- **h1:** Young Serif, color oscuro (Brown 800 / Stone 900)
- **h2:** mismo estilo, un poco más pequeño
- **p:** 16px, color Stone 600, `line-height` cómodo

Recuerda: **padding** = espacio interior, **margin** = espacio exterior.

---

## 7. Maquetación móvil

- **Imagen:** `width: 100%`, `border-radius`
- **Tiempo de preparación:** caja con fondo Rose 50, `padding`, `border-radius`
- **Ingredientes / Instrucciones:** márgenes y padding en listas
- **Nutrición:** filas con dos columnas (flex o tabla), `border-bottom` entre filas

Referencia: `design/mobile-design.jpg`

---

## 8. Responsive — Media query

Enfoque **mobile first**: primero móvil, luego pantallas grandes.

Al final de `styles.css`:
```css
@media (min-width: 768px) {
  .recipe-card {
    max-width: 736px;
    padding: 40px;
  }
}
```

Comparar con `design/desktop-design.jpg`.

---

## 9. Revisión final

- [ ] Todas las secciones presentes
- [ ] Texto legible y buen contraste
- [ ] Se ve bien en móvil y en escritorio
- [ ] "Coded by" con tu nombre
- [ ] Colores y fuentes según style-guide

---

## Ejemplo guiado — Pensar antes de programar

1. Abre el diseño
2. Describe: "Arriba imagen, luego título, luego texto, luego tiempo..."
3. Anota: imagen → `img`, título → `h1`, cada bloque → `section` con `h2` y listas/tabla

---

## Ejemplo guiado — HTML por capas

1. Escribe solo la estructura: `main` y varias `section` con títulos
2. Rellena cada sección: imagen, título, párrafo, listas, nutrición

---

## Ejemplo guiado — Probar estilos

1. Cambia `background-color` del `body` y observa
2. Pon `border: 1px solid red` en `.recipe-card` para ver la caja
3. Modifica `padding` y mira el espacio interior

---

## Ejemplo guiado — Probar responsive

1. Añade la media query y cambia `max-width` de `.recipe-card`
2. Redimensiona la ventana: pequeño = móvil, grande = escritorio

---

<!-- _class: lead -->
# ¡Listo!

Sigue el manual paso a paso y compara siempre con el diseño y el **style-guide.md**.

**¿Dudas?** Revisa cada sección del manual en `MANUAL_RECIPE_PAGE.md`.
