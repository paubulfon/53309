import { Parser } from "antlr4";
import CalculatorVisitor from "./generated/CalculatorVisitor.js";
import CalculatorParser from "./generated/CalculatorParser.js";

export class CustomCalculatorVisitor extends CalculatorVisitor{

    constructor() {
        super();
        this.memory = new Map();   //Declaro una variable de instancia con una memoria temporal para hacer las reducciones
    } 
    
    visitInt(ctx) {
        //obtengo el lexema correspondiente al INT que reconocio en el texto y lo convierto a entero.
        return parseInt(ctx.INT().getText());
    }

    visitPrintExpr(ctx) {
        const value = this.visit(ctx.expr());
        console.log(`\nResultado: ${value}`);
        return this.visitChildren(ctx);
      }


    visitMulDiv(ctx) {
        /* Las subexpresiones se visitaran recursivamente hasta ir obteniendo los valores correspondientes */
        const left =  this.visit(ctx.expr(0));   //visito la subexpresion a la izquierda de la operacion
        const right = this.visit(ctx.expr(1));  //visito la subexpresion a la derecha de la operacion. 
        if (ctx.op.type==CalculatorParser.MUL)
          return left * right;
        else
          return left / right;
      }

      visitAddSub(ctx) {
        const left =  this.visit(ctx.expr(0));  
        const right = this.visit(ctx.expr(1));  
        if (ctx.op.type==CalculatorParser.ADD){
          return left + right; }
        else
          return left - right;
      }

      visitParens(ctx) {
        return this.visit(ctx.expr());
      }

      visitId(ctx) {
        const id = ctx.ID().getText();
        if (this.memory.has(id)) return this.memory.get(id);
        return 0;
    }

      visitAssign(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expr());
        this.memory.set(id, value);
        return value;
    }
    
}