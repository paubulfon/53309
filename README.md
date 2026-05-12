# Analizador Léxico y Sintáctico con ANTLR4 y JavaScript

## Sintaxis y Semántica de Lenguajes  
Ingeniería en Sistemas de Información – UTN FRM

---

# Descripción

Este proyecto implementa un analizador léxico, sintáctico y semántico utilizando ANTLR4 y JavaScript.

El analizador procesa comandos definidos mediante una gramática escrita en ANTLR4 y permite:

- realizar análisis léxico,
- realizar análisis sintáctico,
- detectar errores léxicos y sintácticos,
- generar una tabla de lexemas y tokens,
- construir el árbol de derivación,
- interpretar la entrada,
- generar código JavaScript,
- ejecutar el código generado.

---

# Tecnologías utilizadas

- ANTLR4
- JavaScript
- Node.js
- Visual Studio Code

---

# Estructura del Proyecto

```text
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

# Gramática implementada

```antlr
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

```text
programa -nombre="Juan"
```

Tokens generados:

```text
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

```javascript
tree.toStringTree(parser.ruleNames)
```

Ejemplo:

```text
(prog (comando programa (opcion - nombre = (valor "Juan"))) <EOF>)
```

---

## 4. Análisis semántico e interpretación

Se implementó un Visitor personalizado (`CustomComandosVisitor.js`) que:

- recorre el árbol sintáctico,
- interpreta los comandos,
- genera objetos JavaScript,
- construye código JavaScript dinámicamente,
- ejecuta el código generado.

---

# Generación automática con ANTLR4

ANTLR4 genera automáticamente:

- Lexer
- Parser
- Visitor
- Listener

mediante el comando:

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript Comandos.g4 -o generated -visitor
```

Los archivos generados se almacenan en la carpeta:

```text
generated/
```

---

# Importante

Los archivos generados automáticamente por ANTLR4 no deben modificarse manualmente, ya que serán regenerados ante cualquier cambio en la gramática.

Por esta razón, la lógica semántica fue implementada en:

```text
CustomComandosVisitor.js
```

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/paubulfon/53309.git
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Generar lexer y parser

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript Comandos.g4 -o generated -visitor
```

---

# Ejecución

La entrada se encuentra en:

```text
input.txt
```

Para ejecutar el analizador:

```bash
npm start
```

---

# Ejemplo de entrada válida

Contenido de `input.txt`:

```text
programa -nombre="Juan" -edad=20 -admin
```

---

# Salida esperada

```text
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

```text
programa @@
```

Salida:

```text
Error léxico en línea 1: símbolo '@' no reconocido
```

---

## Error sintáctico

Entrada:

```text
programa -
```

Salida:

```text
Error sintáctico en línea 1: faltó un identificador después del signo '-'
```

---

# Visitor y Listener

ANTLR4 genera automáticamente:

- `ComandosVisitor.js`
- `ComandosListener.js`

Luego se implementaron clases personalizadas:

- `CustomComandosVisitor.js`
- `CustomComandosListener.js`

El Visitor fue utilizado para agregar semántica e interpretación al lenguaje.

El Listener se incluye únicamente con fines ilustrativos.

---

# Referencias bibliográficas

- Terrence Parr, *The Definitive ANTLR 4 Reference*
- Sitio oficial de ANTLR: https://www.antlr.org
- Material de cátedra SSL – UTN FRM

---

# Autor

Maria Paula Bulfón
