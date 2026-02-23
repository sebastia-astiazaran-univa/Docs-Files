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

<!-- Título principal -->
# **Diseño Web: De la idea al prototipo**
## Clases 3, 4 y 5
### Prototipado · Diagramación · Componentes

![bg opacity:0.1](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070)

---

<!-- CLASE 3: PROTOTIPADO WEB -->
# **Clase 3**
## Prototipado web
### 🎨 De lo estático a lo interactivo

---

# 🔍 Diferencia clave

<div class="columns">
<div>

## 🧱 Wireframe
### (Estructura)

- 🎨 **Baja fidelidad**
- 📐 Define layout y jerarquía
- ⚫ Sin colores ni tipografía final
- 🧩 Cajas y placeholders
- ⚡ Rápido de crear y modificar
- 📝 Puede hacerse en papel

🔎 **Objetivo:** pensar la estructura

</div>

---
<div>

## 🖥️ Prototipo
### (Experiencia)

- 🎯 Media o alta fidelidad
- 🧭 Simula navegación real
- 🎨 Incluye estilos y componentes
- 🖱️ Interacciones clickeables
- 🧪 Permite pruebas de usuario
- 💻 Hecho en Figma / XD

🔎 **Objetivo:** probar la experiencia

</div>
</div>


![bg right:40% 90%](https://miro.medium.com/v2/resize:fit:1400/1*4J0wHrUk4XlZkh0x9L3Qqw.png)

---

## 🛠️ Herramientas de prototipado

## **Figma** (recomendado)
- 100% web, multiplataforma
- Colaboración en tiempo real
- Componentes y variantes
- Gratuito para estudiantes

## **Adobe XD**
- Integración con Creative Cloud
- Repetición de cuadrícula
- Plugins potentes

---

| Característica | Figma | Adobe XD |
|---------------|-------|----------|
| Gratuito | ✅ | ⚠️ limitado |
| Colaboración | ✅ tiempo real | ✅ enlaces |
| Plugins | ✅ 1000+ | ✅ 200+ |

---

### 📋 Principios básicos de usabilidad

**1. Consistencia**  
Mismos patrones en todo el sitio

**2. Retroalimentación**  
El sistema responde a las acciones

**3. Simplicidad**  
Menos es más (Ley de Hick)

**4. Visibilidad**  
Elementos claros, fáciles de encontrar

**5. Prevención de errores**  
Anticiparse a equivocaciones

> *"No hagas pensar al usuario"* – Steve Krug

---

### 🧪 **Ejercicio Clase 3**
## Prototipo navegable simple

### **Escenario:**
Aplicación para organizar tareas pendientes (To-Do)

### **Requerimientos mínimos:**
- 📱 Pantalla de inicio (lista de tareas)
- ➕ Pantalla para agregar nueva tarea
- ✅ Pantalla de detalle (al hacer clic)
- 🔗 **3 conexiones** entre pantallas
- ⏱️ Tiempo: 25 minutos

**Entrega:** Enlace de Figma / archivo XD

---

<!-- CLASE 4: DIAGRAMAS WEB Y ARQUITECTURA -->
# **Clase 4**
## Diagramas web & Arquitectura de Información
### 🗺️ El mapa antes del viaje

---

# 🧭 ¿Qué es la Arquitectura de Información?

> **AI = Organizar + Estructurar + Etiquetar**  
> el contenido de un sitio web o app.

### Beneficios:
✅ Usuarios encuentran lo que buscan  
✅ Mejor SEO y navegación  
✅ Base para el diseño visual  

---
### 3 pilares:
1. **Organización** (categorías)
2. **Etiquetado** (nombres claros)
3. **Navegación** (cómo se mueve el usuario)

---

# 📐 Generación de diagramas de sitio

## **Sitemap jerárquico**
Estructura de árbol (nivel 0, 1, 2...)

```
                    [Home]
                       |
      +----------------+----------------+
      |                |                |
   Productos      Servicios        Contacto
      |                |
  +---+---+        +---+---+
  |   |   |        |       |
 A1  A2  A3       S1      S2
```

**Herramientas:** Miro, Lucidchart, Figma (diagramas)

---

# 🚶 Mapeo de flujos de usuario

## Del sitemap al **journey**

**Sitemap** → Estructura estática  
**Flujo** → Secuencia de pasos + decisiones

```
[Inicio] → [Buscar vuelo] → [Seleccionar] → [Pagar]
                ↓                              ↓
          [Sin resultados] ←─────── [Error en pago]
```

✅ Ideal para identificar puntos de fricción  
✅ Útil en pruebas de usabilidad

---

# 🧩 Organización de contenido

| Modelo | Cuándo usarlo | Ejemplo |
|--------|---------------|---------|
| **Jerárquico** | Sitios institucionales | .gob, universidades |
| **Secuencial** | Checkout, onboarding | Compras, cursos |
| **Matricial** | Múltiples filtros | E-commerce, catálogos |
| **Base de datos** | Mucho contenido dinámico | Blogs, noticias |

---

# 🧪 **Ejercicio Clase 4**
## Diagrama para sitio de 5 páginas

### **Tema:** Sitio web de una cafetería artesanal "Café Negro"

**Páginas obligatorias:**
1. Inicio
2. Menú (bebidas/postres)
3. Sobre nosotros
4. Tienda en línea (café en grano)
5. Contacto

---

### **Extra:**
- Añadir **1 flujo de usuario** (ej: comprar café)
- Usar Miro, FigJam o papel digitalizado

⏱️ 30 minutos

---

<!-- CLASE 5: ELEMENTOS BÁSICOS DE UN SITIO WEB -->
# **Clase 5**
## Anatomía del sitio web
### 🧱 Componentes esenciales

---

# 🏗️ Componentes comunes

```
+-----------------------------------+
|            HEADER                 |
|  [Logo]  [Nav]  [Buscar] [Perfil] |
+-----------------------------------+
|                                   |
|            CONTENIDO             |
|           (Hero, cards,          |
|            texto, etc.)          |
|                                   |
+-----------------------------------+
|            FOOTER                |
|   Enlaces legales | Redes |      |
+-----------------------------------+
```

---

# 📌 Header (encabezado)
- Logotipo + identidad
- Menú de navegación principal
- Acciones clave (login, carrito, idioma)
- **Patrón común:** fijo al hacer scroll

# 📌 Footer (pie de página)
- Información legal (aviso, cookies)
- Mapa del sitio (links rápidos)
- Redes sociales, newsletter
- Datos de contacto

---

# 🧭 Navegación

**Primaria:** Menú principal (arriba)  
**Secundaria:** Sidebars, migas de pan  
**Contextual:** Enlaces dentro del contenido  
**Facetada:** Filtros en e-commerce  

✅ **Regla 3 clics:** Todo contenido debe estar a máximo 3 clics de distancia.

---

# 🏪 Tipos de sitios web

| Tipo | Propósito | Ejemplo |
|------|-----------|---------|
| **Informativo** | Comunicar, presentar | Gobierno, ONG |
| **E-commerce** | Vender productos | Amazon, MercadoLibre |
| **Blog / Medio** | Publicar artículos | Medium, WordPress |
| **Landing page** | Conversión (1 objetivo) | Eventos, promos |
| **Portal** | Varios servicios integrados | Bancos, universidades |

---

# 🔬 Análisis de componentes

**Header:**
- ¿Qué contiene?
- ¿Está fijo?

**Footer:**
- ¿Hay 4 columnas?
- ¿Qué enlaces tiene?

---

**Navegación:**
- ¿Menú desplegable?
- ¿Migas de pan?

**Contenido:**
- ¿Cards? ¿Listas?
- ¿Jerarquía visual?

---

# 🧪 **Ejercicio Clase 5**
## Análisis y descomposición de sitios web

**Instrucciones:**
1. Selecciona **3 sitios web** de distinto tipo:
   - Ejemplo: Amazon (e-commerce), El País (blog/noticias), Gobierno de México (informativo)

---   

2. Identifica y documenta:
   - Header (elementos)
   - Footer (estructura)
   - Sistema de navegación
   - 3 componentes repetidos

3. Crea una tabla comparativa

**Entrega:** PDF o presentación (1 diapositiva por sitio)

⏱️ Tarea para casa

---