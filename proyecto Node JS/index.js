import ComandosLexer from "./generated/ComandosLexer.js";
import ComandosParser from "./generated/ComandosParser.js";
import { CustomComandosVisitor } from "./CustomComandosVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

let hayErroresLexicos = false;

async function main() {
    let input;
    // Leer archivo
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    // Lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new ComandosLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener({

        syntaxError(recognizer, offendingSymbol, line, column, msg) {

            hayErroresLexicos = true;

        const simbolo = msg.match(/'(.*?)'/)?.[1];

        console.error(
            `Error léxico en línea ${line}: símbolo '${simbolo}' no reconocido`
        );
        }
    });
    let tokenStream = new CommonTokenStream(lexer);

    // TABLA DE TOKENS
    tokenStream.fill();

    console.log("\nTABLA DE TOKENS:");

    tokenStream.tokens.forEach(token => {

        if (token.type !== antlr4.Token.EOF) {

            const tokenName =
                ComandosLexer.symbolicNames[token.type];

            console.log(
                `Lexema: ${token.text} -> Tipo de token: ${tokenName}`
            );
        }
    });
    if (hayErroresLexicos) {

    console.log("\nANÁLISIS CANCELADO POR ERRORES LÉXICOS.");

    return;
    }
    // Parser
    let parser = new ComandosParser(tokenStream);
    
    // Eliminar listener de errores por defecto
    parser.removeErrorListeners();

        parser.addErrorListener({

        syntaxError(recognizer, offendingSymbol, line, column, msg) {

            let mensaje = "Error de sintaxis.";

           if (msg.includes("missing ID")) {

                mensaje = "faltó un identificador después del signo '-'";
            }

            else if (
                msg.includes("missing {NUMERO, CADENA}")
            ) {

                mensaje = "faltó un número o una cadena después del signo '='";
            }

            else if (msg.includes("extraneous input")) {

                mensaje = "se encontró un símbolo inesperado";
            }

            else if (msg.includes("mismatched input")) {

                mensaje = "la estructura de la entrada no es válida";
            }

            console.error(
                `Error sintáctico en línea ${line}: ${mensaje}`
            );
        }
    });

    let tree = parser.prog();

    // Verificar errores
    if (parser.syntaxErrorsCount > 0) {

    console.log("\nANÁLISIS CANCELADO POR ERRORES SINTÁCTICOS.");

    return;
    } else {

        console.log("\nEntrada válida.");

        // Árbol sintáctico
        const cadena_tree = tree.toStringTree(parser.ruleNames);

        console.log(`\nÁrbol de derivación:\n${cadena_tree}`);

        // Visitor
        const visitor = new CustomComandosVisitor();

        visitor.visit(tree);
        console.log("\nANÁLISIS FINALIZADO CORRECTAMENTE.");
    }
}

function leerCadena() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question("Ingrese una cadena: ", (answer) => {

            rl.close();

            resolve(answer);
        });
    });
}

// Ejecutar
main();