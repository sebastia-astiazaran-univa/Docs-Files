# Recipe Page — Solución y material para clase

Esta carpeta contiene la **solución resuelta** del reto Recipe page y el **manual + ejemplo guiado** para alumnos de preparatoria.

## Contenido

| Archivo | Descripción |
|--------|-------------|
| `index.html` | Página de la receta (solución completa) |
| `styles.css` | Estilos de la solución (responsive) |
| `assets/` | Imágenes y fuentes (copiadas del proyecto original) |
| `MANUAL_RECIPE_PAGE.md` | Manual paso a paso en Markdown |
| `MANUAL_RECIPE_PAGE_MARP.md` | Mismo manual en formato **Marp** (diapositivas) |
| `MANUAL_RECIPE_PAGE.html` | Manual en HTML (imprimible) |
| `MANUAL_RECIPE_PAGE_MARP.pdf` | Manual en diapositivas (PDF ya generado) |

## Cómo obtener los PDF

### Manual en PDF (texto completo)
1. Abre **MANUAL_RECIPE_PAGE.html** en el navegador.
2. Menú **Archivo → Imprimir** (o `Ctrl+P` / `Cmd+P`).
3. Elige **Guardar como PDF** como destino e imprime.

### Manual en PDF (versión diapositivas Marp)
- **Opción A — VS Code:** Instala la extensión [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode). Abre `MANUAL_RECIPE_PAGE_MARP.md`, luego en la barra superior usa “Export slide deck” y elige **Export PDF**.
- **Opción B — Línea de comandos:** Con Node.js instalado, en esta carpeta ejecuta:
  ```bash
  npx @marp-team/marp-cli MANUAL_RECIPE_PAGE_MARP.md --pdf -o MANUAL_RECIPE_PAGE_MARP.pdf --no-stdin
  ```
  (Necesitas tener Chrome/Edge instalado para que marp-cli genere el PDF.)

## Cómo ver la solución

Abre `index.html` en el navegador (o usa Live Server desde VS Code). La página incluye la receta de omelette con diseño responsive según el style-guide del reto.

## Uso en clase

- **Manual .md:** Para leer o seguir en pantalla; también puedes subirlo a tu plataforma.
- **Manual Marp:** Para proyectar en clase como presentación.
- **Manual .html:** Para imprimir o guardar como PDF y repartir en papel.
- **Solución (index + styles):** Como referencia o para comparar con lo que hagan los alumnos.
