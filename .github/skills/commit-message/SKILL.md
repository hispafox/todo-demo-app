---
name: commit-message
description: "Genera mensajes de commit claros, específicos y útiles para este repositorio. Úsalo cuando vayas a commitear cambios, revisar qué se modificó o redactar un resumen corto con cuerpo opcional: la primera línea describe el cambio y el cuerpo explica el detalle si hace falta."
argument-hint: "Escribe un mensaje de commit para estos cambios: ..."
user-invocable: true
disable-model-invocation: false
---

# Mensajes de commit para este proyecto

## Cuándo usar este skill

- Cuando se vaya a crear un commit.
- Cuando quieras comprobar si el mensaje describe exactamente lo que cambió.
- Cuando necesites redactar una primera línea breve y un cuerpo opcional con detalle.

## Regla principal

No escribas mensajes vagos como:

- actualizar fichero
- arreglar cosas
- mejoras varias
- cambiar instrucciones

Eso no dice qué cambió realmente.

## Qué debe hacer un buen commit

### 1. La primera línea debe ser concreta

La primera línea debe resumir el cambio de forma breve, precisa y legible.

Formato recomendado:

```text
<tipo>(<ámbito>): <resumen concreto>
```

Ejemplos buenos:

- feat(ui): añadir filtro por estado en la lista de tareas
- fix(api): validar fecha de vencimiento antes de guardar una tarea
- docs: cambiar idioma de código de inglés a castellano
- refactor(api): separar lógica de validación de la capa de controladores
- chore: actualizar configuración de SQLite para el entorno local

Ejemplos pobres:

- actualizar fichero
- arreglar bug
- cambiar cosas en frontend
- mejorar proyecto

### 2. El cuerpo es opcional, pero si hace falta debe aportar detalle

Si el cambio tiene alguna complejidad o contexto útil, incluye un cuerpo con:

- qué se modificó exactamente
- por qué fue necesario
- qué impacto tiene
- cualquier detalle importante para futuras revisiones

Formato sugerido:

```text
<tipo>(<ámbito>): <resumen concreto>

- Se actualiza X para Y.
- Se elimina o reemplaza Z porque ...
- Se añade validación / soporte / ajuste en ...
```

Si el cambio es trivial, basta con una sola línea.

### 3. Sé escueto, no vago

Un buen mensaje puede ser corto y específico al mismo tiempo.

Ejemplos de mensajes buenos y concisos:

- docs: cambiar idioma de código de inglés a castellano
- fix(api): corregir validación de tareas sin título
- feat(ui): mostrar contador de tareas pendientes

No es necesario llenar el commit con detalles irrelevantes.

## Reglas de estilo

1. Usa voz en infinitivo o imperativo breve, como en un resumen técnico.
2. Describe cambios reales, no intención general.
3. Menciona el archivo o capa si aporta claridad: `api`, `ui`, `docs`, `db`, `config`.
4. Si el cambio corrige un bug, indica qué se estaba haciendo mal.
5. Si el cambio añade funcionalidad, indica qué se añadió exactamente.
6. Si el cambio es de documentación, usa `docs:` y nombra el tema concreto.
7. Si el cambio es de infraestructura o tareas de mantenimiento, usa `chore:`.

## Plantilla recomendada

```text
<tipo>(<ámbito>): <resumen concreto>

- <detalle del cambio 1>
- <detalle del cambio 2>
- <detalle del cambio 3>
```

## Ejemplos de commit útiles

```text
feat(ui): añadir filtro por estado en la lista de tareas

- añade selector para filtrar tareas por pendientes, completadas y todas
- mantiene el estado actual al cambiar entre vistas
- actualiza el contador visible del número de tareas mostradas
```

```text
docs: cambiar idioma de código de inglés a castellano
```

```text
fix(api): validar título vacío antes de guardar una tarea

- rechaza tareas sin título en la API
- devuelve un error claro al cliente
- evita guardar registros incompletos en SQLite
```

## Regla final

Cuando redactes mensajes de commit, piensa:

"¿Si alguien lo lee en el historial, entiende exactamente qué cambió y sin necesidad de abrir el diff?"

Si la respuesta es no, vuelve a formularlo.
