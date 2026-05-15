# Analizador Léxico y Sintáctico con ANTLR4 y JavaScript

## Sintaxis y Semántica de Lenguajes

Ingeniería en Sistemas de Información – UTN FRM

---

# Descripción

Este proyecto implementa un analizador léxico, sintáctico y semántico utilizando ANTLR4 y JavaScript.

El analizador procesa comandos definidos mediante una gramática escrita en ANTLR4 y permite:

* realizar análisis léxico,
* realizar análisis sintáctico,
* detectar errores léxicos y sintácticos,
* generar una tabla de lexemas y tokens,
* construir el árbol de derivación,
* interpretar la entrada,
* generar código JavaScript,
* ejecutar el código generado.

---

# Tecnologías utilizadas

* ANTLR4
* JavaScript
* Node.js
* Visual Studio Code

---

# Estructura del Proyecto

```text id="dqk0zf"
53309/
│
├── .vscode/
│   └── launch.json
│
├── README.md
│
├── gramatica_EBNF.txt
│
├── ejemplos/
│   ├── ejemplo_correcto_1.txt
│   ├── ejemplo_correcto_2.txt
│   ├── ejemplo_error_lexico.txt
│   └── ejemplo_error_sintactico.txt
│
└── proyecto Node JS/
    │
    ├── generated/
    │   ├── ComandosLexer.js
    │   ├── ComandosParser.js
    │   ├── ComandosVisitor.js
    │   └── ...
    │
    ├── .antlr/
    │
    ├── Comandos.g4
    ├── index.js
    ├── CustomComandosVisitor.js
    ├── CustomComandosListener.js
    ├── input.txt
    ├── package.json
    ├── package-lock.json
    └── antlr-4.13.2-complete.jar
```

---

# Aclaración sobre la carpeta `.vscode`

Se incluye la carpeta `.vscode` con el archivo `launch.json` para facilitar la visualización y depuración del árbol sintáctico utilizando la extensión de ANTLR4 en Visual Studio Code.

Esta carpeta no forma parte de la lógica del analizador, pero permite ejecutar directamente el preview del árbol de derivación mediante la configuración `antlr-debug`.

---

# Gramática implementada

```antlr id="q8x4pv"
grammar Comandos ;

//Gramatica
prog: comando EOF;

comando: ID opcion* NEWLINE? ;

opcion: SUB ID (EQ valor)? NEWLINE? ;

valor: NUMERO | CADENA ;

//Lexemas
SUB : '-';
EQ: '=';
QUOTE: '"';
ID: [a-zA-Z]+;
NUMERO: [0-9]+;
CADENA: QUOTE (.)*? QUOTE;
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;
```

---

# Funcionamiento general

El programa realiza las siguientes etapas:

## 1. Análisis léxico

El lexer divide la entrada en tokens reconocidos por la gramática.

Ejemplo:

```text id="g3r9ya"
programa -nombre="Juan"
```

Tokens generados:

```text id="b3m9sl"
Lexema: programa -> Tipo de token: ID
Lexema: - -> Tipo de token: SUB
Lexema: nombre -> Tipo de token: ID
Lexema: = -> Tipo de token: EQ
Lexema: "Juan" -> Tipo de token: CADENA
```

---

## 2. Análisis sintáctico

El parser verifica que la secuencia de tokens respete las reglas de la gramática.

Si la entrada es válida, se construye el árbol sintáctico.

---

## 3. Árbol de derivación

El árbol sintáctico se muestra en formato texto utilizando:

```javascript id="r6y1tp"
tree.toStringTree(parser.ruleNames)
```

Ejemplo:

```text id="q2k4dr"
(prog (comando programa (opcion - nombre = (valor "Juan"))) <EOF>)
```

---

## 4. Análisis semántico e interpretación

Se implementó un Visitor personalizado (`CustomComandosVisitor.js`) que:

* recorre el árbol sintáctico,
* interpreta los comandos,
* genera objetos JavaScript,
* construye código JavaScript dinámicamente,
* ejecuta el código generado.

---

# Generación automática con ANTLR4

ANTLR4 genera automáticamente:

* Lexer
* Parser
* Visitor
* Listener

mediante el comando:

```bash id="m8y2vf"
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript Comandos.g4 -o generated -visitor
```

Los archivos generados se almacenan en la carpeta:

```text id="s9x6ku"
generated/
```

---

# Importante

Los archivos generados automáticamente por ANTLR4 no deben modificarse manualmente, ya que serán regenerados ante cualquier cambio en la gramática.

Por esta razón, la lógica semántica fue implementada en:

```text id="n2r5yb"
CustomComandosVisitor.js
```

---

# Instalación y ejecución

## Requisitos previos

Para ejecutar el proyecto se requiere tener instalado:

* Node.js
* Java JDK
* Visual Studio Code (opcional)
* Extensión `ANTLR4 grammar syntax support` para VS Code (opcional para visualizar el árbol)

---

## 1. Clonar el repositorio

Abrir una terminal y ejecutar:

```bash id="t7k2cw"
git clone https://github.com/paubulfon/53309.git
```

Esto descargará el proyecto en una carpeta llamada:

```text id="v4r9ml"
53309
```

---

## 2. Ingresar a la carpeta del proyecto Node.js

```bash id="x3q1jt"
cd "53309/proyecto Node JS"
```

---

## 3. Instalar dependencias

Ejecutar:

```bash id="d8m7qo"
npm install
```

Esto instalará automáticamente las dependencias necesarias para ejecutar el analizador.

---

## 4. Generar lexer y parser (opcional)

Los archivos generados por ANTLR4 ya se incluyen en el repositorio.

Sin embargo, si se modifica la gramática `Comandos.g4`, se deben regenerar ejecutando:

```bash id="h1t9pk"
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript Comandos.g4 -o generated -visitor
```

---

## 5. Configurar la entrada

La entrada a analizar se encuentra en el archivo:

```text id="j6s2nr"
input.txt
```

Modificar dicho archivo con la cadena que se desea analizar.

Ejemplo:

```text id="c5v8yu"
programa -nombre="Juan" -edad=20 -admin
```

---

## 6. Ejecutar el analizador

Ejecutar:

```bash id="p4m8tz"
npm start
```

El programa mostrará:

* tabla de tokens,
* árbol de derivación,
* interpretación semántica,
* código JavaScript generado,
* ejecución del código generado,
* errores léxicos y sintácticos (si existen).

---

# Visualización del árbol sintáctico

Para visualizar el árbol sintáctico gráficamente en Visual Studio Code:

1. Instalar la extensión:

```text id="k2r9qw"
ANTLR4 grammar syntax support
```

2. Abrir el archivo:

```text id="m5d1yt"
Comandos.g4
```

3. Presionar:

```text id="n8w6ql"
F5
```

o utilizar:

```text id="r1v7cp"
ANTLR4: Open Preview
```

desde la paleta de comandos de VS Code.

---

# Ejemplo de entrada válida

Contenido de `input.txt`:

```text id="f8z1mr"
programa -nombre="Juan" 
```

---

# Salida esperada

```text id="u9q4tb"
TABLA DE TOKENS:
Lexema: programa -> Tipo de token: ID
Lexema: - -> Tipo de token: SUB
Lexema: nombre -> Tipo de token: ID
Lexema: = -> Tipo de token: EQ
Lexema: "Juan" -> Tipo de token: CADENA

Entrada válida.

Árbol de derivación:
(prog (comando programa (opcion - nombre = (valor "Juan"))) <EOF>)
```

---

# Ejemplos de errores

## Error léxico

Entrada:

```text id="a6k9vx"
programa @@
```

Salida:

```text id="b1q7ns"
Error léxico en línea 1: símbolo '@' no reconocido
```

---

## Error sintáctico

Entrada:

```text id="e4z2rt"
programa -
```

Salida:

```text id="w3m8yk"
Error sintáctico en línea 1: faltó un identificador después del signo '-'
```

---

# Visitor y Listener

ANTLR4 genera automáticamente:

* `ComandosVisitor.js`
* `ComandosListener.js`

Luego se implementaron clases personalizadas:

* `CustomComandosVisitor.js`
* `CustomComandosListener.js`

El Visitor fue utilizado para agregar semántica e interpretación al lenguaje.

El Listener se incluye únicamente con fines ilustrativos.

---

# Referencias bibliográficas

* Terrence Parr, *The Definitive ANTLR 4 Reference*
* Sitio oficial de ANTLR: https://www.antlr.org
* Material de cátedra SSL – UTN FRM

---

# Autor

Maria Paula Bulfón


