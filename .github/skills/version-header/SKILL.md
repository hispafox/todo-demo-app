---
name: version-header
description: "Añade cabeceras de metadatos solo en archivos desarrollados por este repositorio. No se usa en dependencias de terceros, código generado o archivos lock. El formato recomendado incluye autor, fecha y versión para dejar constancia de la autoría del código propio."
argument-hint: "Indica el tipo de archivo y la descripción del código para generar una cabecera con autor, fecha y versión, solo si es código propio del proyecto."
user-invocable: true
disable-model-invocation: false
---

# Cabeceras de metadatos para archivos propios

## Cuándo usar este skill

- Cuando necesites añadir una cabecera de autor, fecha y versión a un archivo del repositorio.
- Cuando quieras dejar constancia de que ese archivo fue desarrollado por el proyecto y no por terceros.
- Cuando debes revisar si un archivo merece o no incluir metadatos de autoría.

## Regla principal

No añadas cabeceras de versión a:

- dependencias de terceros
- archivos lock (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, etc.)
- código generado automáticamente
- librerías, plantillas o snippets ajenos
- archivos sin modificación propia en el proyecto

Solo se versiona lo que es propio del repositorio.

## Qué debe incluir una cabecera útil

La cabecera debe ser breve, clara y consistente. El formato recomendado es:

```text
/*
 * Autor: Hispafox
 * Fecha: YYYY-MM-DD
 * Versión: 1.0.0
 * Descripción: <breve explicación del archivo o módulo>
 */
```

Para TypeScript/JavaScript:

```ts
/**
 * Autor: Hispafox
 * Fecha: 2026-11-09
 * Versión: 1.0.0
 * Descripción: Componente principal de la lista de tareas.
 */
```

Para C#:

```csharp
/*
 * Autor: Hispafox
 * Fecha: 2026-11-09
 * Versión: 1.0.0
 * Descripción: Modelo de datos para tareas del proyecto.
 */
```

## Reglas de estilo

1. Usa el autor real del código del repositorio, por ejemplo `Hispafox`.
2. La fecha debe usar formato ISO `YYYY-MM-DD`.
3. La versión debe ser coherente con el estado del proyecto; si no se gestiona semver formal, usa `1.0.0` o `0.1.0` según el caso.
4. La descripción debe referirse al propósito del archivo, no a una frase genérica.
5. No añadas cabeceras a archivos que no sean del proyecto.
6. Si el archivo es de terceros, deja el código tal cual y no lo versiones artificialmente.

## Criterio de decisión

Antes de añadir una cabecera, responde estas preguntas:

- ¿Este archivo fue creado por el proyecto?
- ¿Tiene lógica propia del repositorio?
- ¿Se ha modificado o se mantiene como código propio?

Si la respuesta es sí, añade la cabecera. Si no, no la pongas.

## Plantilla recomendada

```text
/*
 * Autor: Hispafox
 * Fecha: 2026-11-09
 * Versión: 1.0.0
 * Descripción: <descripción del archivo>
 */
```

## Regla final

Cuando generes una cabecera, piensa: "¿Esto pertenece realmente al repositorio y aporta valor a la trazabilidad del código propio?" Si la respuesta es no, no la añadas.
