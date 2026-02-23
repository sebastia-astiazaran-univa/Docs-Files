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

# PROYECTO PARCIAL INTEGRAL: **"Mi Perfil Profesional - Sitio Web Personal Multifuncional"**

---

## Descripción General
Desarrollarás un sitio web personal profesional de 3 páginas que demuestre todos los conceptos aprendidos en las Clases 1-10. Este proyecto simula un portafolio profesional real que incluye proceso de diseño, wireframing, prototipado y desarrollo HTML semántico.

---
## Requisitos del Proyecto

### **PARTE 1: PLANIFICACIÓN Y DISEÑO (Basado en Clases 1-5)**

#### Entregable 1.1: Documentación del Proceso (40%)
**Crea un documento (PDF o presentación) que incluya:**

1. **Wireframes de baja fidelidad** (a mano o digital)
   - Wireframe para las 3 páginas: Inicio, Portafolio, Contacto
   - Muestra al menos 2 versiones diferentes de la página de inicio
   - Incluye anotaciones explicando tus decisiones
---

2. **Prototipo navegable en Figma/Adobe XD**
   - Conecta las 3 páginas con interacciones básicas
   - Incluye al menos un elemento interactivo (hover state en botones)
   - Aplica principios básicos de usabilidad vistos en clase

3. **Diagrama de Arquitectura de Información**
   - Mapa del sitio mostrando la jerarquía de las 3 páginas
   - Diagrama de flujo de usuario para:
     - Un usuario que quiere contactarte
     - Un usuario que busca ver tus proyectos

---

4. **Análisis de referencia**
   - Selecciona 3 sitios web profesionales reales
   - Descompón sus elementos (header, footer, navegación, secciones)
   - Explica qué elementos tomarás como inspiración y por qué

---

### **PARTE 2: DESARROLLO HTML**

#### Entregable 2.1: Estructura HTML (60%)
**Crea 3 páginas HTML interconectadas:**

### **Página 1: Inicio (`index.html`)**
Debe incluir:
- Header con navegación semántica (`<header>`, `<nav>`)
- Sección de héroe con:
  - Tu nombre/título profesional
  - Una breve descripción (uso de `<h1>`, `<p>`, `<strong>`, `<em>`)
  - Una imagen tuya o avatar (`<img>` con atributos completos)

---
- Sección "Sobre mí" (`<section>`):
  - Biografía profesional con formato de texto enriquecido
  - Lista de habilidades técnicas (usar `<ul>` o `<ol>`)
  - Tabla de experiencia profesional con:
    - Período, empresa, cargo, logros principales
    - Mínimo 3 filas de experiencia
- Sección de "Testimonios" (`<article>`):
  - Mínimo 2 artículos con citas de clientes/falsos clientes
- Footer completo (`<footer>`):
  - Enlaces a redes sociales (pueden ser "#" por ahora)
  - Información de copyright
  - Enlace rápido a contacto

---

### **Página 2: Portafolio (`portafolio.html`)**
Debe incluir:
- Header consistente con navegación
- Título de página con `<h1>`
- Grid de proyectos usando HTML semántico:
  - Mínimo 4 proyectos
  - Cada proyecto debe ser un `<article>` que contenga:
    - Imagen del proyecto
    - Título del proyecto (`<h2>` o `<h3>`)
    - Descripción del proyecto
    - Etiquetas de tecnologías usadas (usar listas)
    - Enlace "Ver proyecto" (que lleve a "#" por ahora)

---
- Sección adicional de habilidades:
  - Tabla comparativa de tecnologías que muestre:
    - Tecnología, nivel de experiencia (1-5), años de experiencia
    - Mínimo 6 tecnologías

---

### **Página 3: Contacto (`contacto.html`)**
Debe incluir:
- Header consistente con navegación
- Título de página con `<h1>`
- **Formulario de contacto completo con:**
  - Campos obligatorios marcados visualmente
  - Nombre completo (input text)
  - Email (input email)
  - Teléfono (input tel)
  - Asunto (select con opciones: Consulta, Proyecto, Trabajo, Otro)
  - Mensaje (textarea)
  - Checkbox de aceptación de políticas
  - Botón de enviar (button)

---

- **Tabla de información de contacto:**
  - Usar `<table>` para mostrar:
    - Método de contacto | Detalle | Horario
    - Email | ejemplo@email.com | 24/7
    - Teléfono | +XX XXX XXX XXX | 9am-6pm
    - Oficina | Dirección ficticia | Solo con cita
- Mapa de ubicación ficticio (usar imagen como placeholder)
- Footer consistente

---
### **Requisitos Técnicos Obligatorios:**

1. **HTML Semántico** (Clase 10):
   - Uso correcto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
   - No usar `<div>` para todo, priorizar etiquetas semánticas

2. **Estructura completa** (Clase 6):
   - Doctype, html, head, body correctos
   - Meta tags (viewport, description, author)
   - Título descriptivo para cada página

3. **Contenido variado** (Clase 7):
   - Uso de h1-h6 en jerarquía correcta
   - Texto con formato (negritas, cursivas)
   - Listas en al menos 2 contextos diferentes
---   

4. **Enlaces e imágenes** (Clase 8):
   - Navegación funcional entre las 3 páginas
   - Enlaces externos que abran en nueva pestaña
   - Imágenes con atributos alt descriptivos
   - Rutas relativas correctas

5. **Tablas y formularios** (Clase 9):
   - Mínimo 2 tablas diferentes en el sitio
   - Formulario completo con al menos 6 campos
   - Diferentes tipos de input

---

## **Criterios de Evaluación (100 puntos)**

| Categoría | Puntos | Aspectos evaluados |
|-----------|--------|-------------------|
| **Parte 1: Diseño** | 30 | Wireframes (10), Prototipo (10), Diagramas (5), Análisis (5) |
| **Estructura HTML** | 15 | Documentos válidos, semántica correcta, anidación adecuada |
| **Contenido** | 15 | Uso correcto de todas las etiquetas vistas, textos coherentes |
| **Formularios y Tablas** | 15 | Formulario completo y funcional, tablas bien estructuradas |
| **Navegación** | 10 | Enlaces funcionando, consistencia entre páginas |
| **Completitud** | 10 | Todas las páginas y elementos requeridos presentes |
| **Creatividad** | 5 | Contenido original, diseño personalizado |

---

## **Desafíos Extra (Opcionales - +10 puntos)**
Para estudiantes que quieran ir más allá:
1. Implementar un formulario que envíe datos a Formspree o similar
2. Crear una página adicional "Blog" con 2 artículos falsos
3. Incluir un iframe de Google Maps real en lugar de imagen
4. Agregar un favicon personalizado
5. Implementar una tabla que use `colspan` o `rowspan`

---

## **Formato de Entrega**
1. Carpeta comprimida `Apellido_Nombre_Proyecto1.zip` que contenga:
   - Carpeta `diseno/` con PDF de la Parte 1
   - Carpeta `sitio/` con todos los archivos HTML
   - Carpeta `imagenes/` con recursos utilizados
   - Archivo `README.txt` explicando brevemente el proyecto

---
Fecha de entrega: 4 marzo

---
