---
marp: true
theme: default
paginate: true
title: Practica Integradora de Excel - Tienda Escolar
description: Manual paso a paso para preparatoria sobre control de ventas en Excel
footer: Cultura Digital II · Practica Excel
backgroundColor: '#081018'
color: '#f3f6fb'
style: |
  section {
    font-family: 'Segoe UI', sans-serif;
    background: #081018;
    color: #f3f6fb;
    padding: 46px 58px;
  }
  p {
    color: #e9f1ff;
  }
  h1 {
    color: #6ee7ff;
    font-size: 1.9em;
    border-bottom: 3px solid #6ee7ff;
    padding-bottom: 10px;
    margin-bottom: 18px;
  }
  h2 {
    color: #ffd166;
    font-size: 1.25em;
  }
  h3 {
    color: #ff8fab;
    font-size: 1.02em;
    margin-bottom: 6px;
  }
  ul li, ol li {
    margin-bottom: 7px;
    line-height: 1.42;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88em;
    background: #0e1826;
    border: 1px solid #2b425c;
  }
  th {
    background: #1b3547;
    color: #7fe6ff;
    padding: 8px 10px;
    border-bottom: 2px solid #62d8f5;
    text-align: left;
  }
  td {
    padding: 8px 10px;
    color: #eaf2ff;
    border-bottom: 1px solid #2b425c;
    background: #122033;
  }
  tr:nth-child(even) td {
    background: #0f1b2c;
  }
  code {
    background: #132131;
    color: #9ae6ff;
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 0.85em;
  }
  .tag {
    display: inline-block;
    margin-bottom: 16px;
    padding: 4px 14px;
    border-radius: 999px;
    background: #6ee7ff22;
    border: 1px solid #6ee7ff55;
    color: #6ee7ff;
    font-size: 0.68em;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }
  .small {
    font-size: 0.88em;
  }
---

<!-- _class: lead -->
# Practica Integradora de Excel
## Control de Ventas de una Tienda Escolar
### Manual completo para preparatoria

<div class="tag">Cultura Digital II · Parcial 2</div>

---

## Objetivo de la practica

- Crear un libro de Excel profesional para simular ventas de una tienda escolar.
- Aplicar formato, referencias, funciones, hojas conectadas, consolidado y grafica.
- Entregar un archivo final con analisis y conclusiones basadas en datos.

**Nombre del archivo:** `Apellidos_Nombre_Excel_Integral_Parcial2.xlsx`

---

## Antes de empezar (Paso 0)

1. Abre Microsoft Excel y elige **Libro en blanco**.
2. Ve a **Archivo > Guardar como**.
3. Selecciona tu carpeta de clase.
4. Escribe exactamente: `Apellidos_Nombre_Excel_Integral_Parcial2.xlsx`
5. Guarda y confirma que la extension sea `.xlsx` (no `.csv`).

Consejo: guarda cada 5 minutos para no perder avances.

---

## Estructura del libro

| Hoja | Para que sirve |
|---|---|
| Entorno | Identificar partes de Excel con captura y etiquetas |
| Base de datos | Registrar catalogo de productos |
| Calculos y descuentos | Calcular IVA, descuento y precio final |
| Ventas mensuales | Simular transacciones del mes |
| Consolidado | Resumir ventas por producto |
| Reporte final | Presentar resultados, grafica y conclusiones |

---

## Colores sugeridos de pestana

| Hoja | Color |
|---|---|
| Entorno | Gris |
| Base de datos | Azul |
| Calculos y descuentos | Verde |
| Ventas mensuales | Naranja |
| Consolidado | Amarillo |
| Reporte final | Rojo |

---

## Orden recomendado de trabajo

1. Fase 1: Configuracion inicial y hoja Entorno.
2. Fase 2: Base de datos y Calculos y descuentos.
3. Fase 3: Ventas mensuales y Consolidado.
4. Fase 4: Reporte final, grafica y conclusiones.
5. Revision de checklist antes de entregar.

---

## Fase 1 - Configuracion inicial

1. Crea hojas nuevas con el boton `+` hasta tener 6 pestanas.
2. Renombra cada pestana con doble clic:
   - `Entorno`
   - `Base de datos`
   - `Calculos y descuentos`
   - `Ventas mensuales`
   - `Consolidado`
   - `Reporte final`
3. Asigna color: clic derecho sobre la pestana > **Color de pestana**.
4. Verifica ortografia exacta de los nombres (afecta formulas entre hojas).

---

## Hoja Entorno (Clase 1)

1. Abre una ventana de Excel donde se vea toda la interfaz.
2. Inserta captura: **Insertar > Captura** (o tecla `Impr Pant`).
3. Ajusta el tamano de la imagen para que ocupe la mayor parte de la hoja.
4. Usa **Insertar > Formas** para senalar:
   - Barra de titulo
   - Cinta de opciones
   - Barra de formulas
   - Cuadro de nombres
   - Etiquetas de hoja
   - Vista de pagina
5. Inserta cuadros de texto con el nombre de cada elemento.
6. Agrega una tabla pequena con 3 definiciones breves.

---

## Fase 2 - Hoja Base de datos

- En `A1`: `Base de Datos de Productos`
- Encabezados en fila 2:
  - `A2: ID`
  - `B2: Producto`
  - `C2: Precio Unitario (sin IVA)`
- Captura minimo 15 productos de tienda escolar.
- Recomendado: usa IDs numericos consecutivos (`1` a `15`).
- Aplica formato moneda en la columna C:
  - Selecciona columna C
  - **Inicio > Numero > Moneda**

**Ejemplos:** Cuaderno Profesional, Lapiz HB, Goma de Borrar, Sacapuntas, Regla 30cm, Carpeta, Marcador, Crayones, Pegamento, Tijeras, Colores, Hojas Blancas, Calculadora, Mochila, Lonchera.

---

## Fase 2 - Hoja Calculos y descuentos

### Estructura principal

- `A1`: `Calculo de Precios con IVA y Descuento`
- Fila 3:
  - `A3: ID`
  - `B3: Producto`
  - `C3: Precio Unitario`
  - `D3: IVA`
  - `E3: Precio con IVA`
  - `F3: % Descuento`
  - `G3: Precio Final`

---

## Fase 2 - Formulas clave

### IVA con referencia absoluta

En `Z1` escribe `Tasa IVA` y en `Z2` escribe `0.16`.

```excel
=C4*$Z$2
```

Copia la formula desde `D4` hacia abajo hasta el ultimo producto.

### Precio con IVA

```excel
=C4+D4
```

Copia la formula de `E4` hacia abajo.

### Precio final con descuento

```excel
=E4*(1-F4)
```

Por ahora puede dar igual a `Precio con IVA` si `F` esta en `0%`.

---

## Fase 2 - Tabla de descuentos y datos externos

### Tabla de descuentos en `Z5:AA7`

| Cantidad minima | Descuento |
|---|---|
| 0 | 0% |
| 5 | 5% |
| 10 | 10% |

### Traer datos desde `Base de datos`

```excel
='Base de datos'!A3
='Base de datos'!B3
='Base de datos'!C3
```

Arrastra las formulas desde fila 4 hasta fila 18 para cubrir los 15 productos.

---

## Fase 3 - Hoja Ventas mensuales

### Encabezados (fila 1)

- A: Fecha
- B: ID Producto
- C: Producto
- D: Cantidad Vendida
- E: Precio Unitario
- F: % Descuento
- G: Total Venta

---

## Fase 3 - BUSCARV y total de venta

```excel
=BUSCARV(B2,'Calculos y descuentos'!$A$4:$G$18,2,0)
```

```excel
=BUSCARV(B2,'Calculos y descuentos'!$A$4:$G$18,3,0)
```

```excel
=BUSCARV(D2,$Z$5:$AA$7,2,VERDADERO)
```

```excel
=(E2*D2)*(1-F2)
```

Despues de comprobar que funciona en la fila 2, copia todas las formulas hasta la fila 100.

---

## Fase 3 - Hoja Consolidado

- `A1`: `Consolidado de Ventas del Mes`
- Fila 3:
  - `A3: ID`
  - `B3: Producto`
  - `C3: Unidades Vendidas Totales`
  - `D3: Total en Ventas`
- En `A4` coloca IDs unicos.
- En `B4` trae nombre de producto con `BUSCARV` o referencia externa.

---

## Fase 3 - SUMAR.SI y estadisticas

### Consolidacion por producto

```excel
=SUMAR.SI('Ventas mensuales'!$B$2:$B$100,A4,'Ventas mensuales'!$D$2:$D$100)
```

```excel
=SUMAR.SI('Ventas mensuales'!$B$2:$B$100,A4,'Ventas mensuales'!$G$2:$G$100)
```

### Funciones estadisticas (por ejemplo en fila 20)

```excel
=MAX(D4:D18)
=MIN(D4:D18)
=PROMEDIO(D4:D18)
=MODA(D4:D18)
=CONTAR.SI(C4:C18,">10")
```

---

## Fase 4 - Hoja Reporte final

- Titulo: `Reporte de Ventas - Tienda Escolar`
- Vincula celdas clave desde `Consolidado`.
- Ejemplo de total del mes:

```excel
='Consolidado'!D19
```

- Para producto mas vendido por unidades, usa `INDICE` + `COINCIDIR` con `MAX`.
- Agrega una ganancia estimada con formula clara.

Sugerencia de orden visual:
1. Titulo arriba.
2. Resumen numerico al centro-izquierda.
3. Grafica al centro-derecha.
4. Conclusiones al final.

---

## Grafica y conclusiones

1. Selecciona `B3:B18` y `C3:C18` de `Consolidado`.
2. Inserta grafica de columnas o barras.
3. Da formato profesional:
   - Titulo claro
   - Ejes etiquetados
   - Colores sobrios y fondo limpio
4. Redacta 3 conclusiones basadas en datos reales.

---

## Plus: Formato condicional (ventas > $500)

1. Ve a la hoja `Ventas mensuales`.
2. Selecciona el rango `G2:G100`.
3. En la cinta, abre **Inicio > Formato condicional**.
4. Elige **Reglas para resaltar celdas > Mayor que...**
5. Escribe `500` y aplica un color de relleno visible.

Esto facilita detectar ventas altas rapidamente.

---

## Errores comunes (evitalos)

- Olvidar `$` en `=$Z$2` y romper el calculo de IVA al arrastrar.
- Dejar mal fijado el rango en `BUSCARV`.
- Mezclar encabezados con filas de datos.
- No ajustar el ultimo numero de fila en los rangos.
- Escribir nombres de hoja con errores (rompe referencias externas).

---

## Checklist final de entrega

- [ ] Tablas con formato profesional (bordes, encabezados y moneda).
- [ ] Formato condicional en `Ventas mensuales` para ventas mayores a `$500` (plus).
- [ ] Referencias absolutas y mixtas correctas.
- [ ] Funciones `MAX`, `MIN`, `PROMEDIO`, `MODA`, `CONTAR.SI` aplicadas.
- [ ] Hojas conectadas con formulas externas.
- [ ] Grafica clara y bien presentada.
- [ ] 3 conclusiones coherentes con los resultados.

---

## Cierre

Tu practica esta completa cuando:

- El libro tiene las 6 hojas con contenido funcional.
- Todas las formulas calculan correctamente.
- El reporte final muestra analisis y grafica profesional.

Guarda y entrega: `Apellidos_Nombre_Excel_Integral_Parcial2.xlsx`
