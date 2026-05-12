import ComandosVisitor from "./generated/ComandosVisitor.js";

export class CustomComandosVisitor extends ComandosVisitor {
    
    constructor() {
        super();
        this.resultado = {};
    }

    visitProg(ctx) {
        return this.visit(ctx.comando());
    }

    visitComando(ctx) {

        // Obtengo el nombre del comando
        const nombreComando = ctx.ID().getText();

        // Obtengo todas las opciones
        const opciones = ctx.opcion();

        opciones.forEach(op => {

            // obtengo el ID de la opcion
            const id = op.ID().getText();

            let valor = true;

            // verifico si existe un valor
            if (op.valor()) {

                valor = op.valor().getText();

                // si es numero lo convierto
                if (!isNaN(valor)) {
                    valor = Number(valor);
                }

                // si es cadena elimino las comillas
                else {
                    valor = valor.slice(1, -1);
                }
            }

            // guardo en el objeto
            this.resultado[id] = valor;
        });

        console.log("\nINTERPRETACIÓN JS:");

const objetoFinal = {
    comando: nombreComando,
    opciones: this.resultado
};

console.log(objetoFinal);

// Generar código JavaScript

let codigoJS =
`const ${nombreComando} = ${JSON.stringify(this.resultado, null, 2)};\n`;

codigoJS += `console.log(${nombreComando});`;

console.log("\nCÓDIGO JAVASCRIPT GENERADO:\n");
console.log(codigoJS);

// Ejecutar código JavaScript

console.log("\nEJECUCIÓN:\n");

eval(codigoJS);

return objetoFinal;
    }
}