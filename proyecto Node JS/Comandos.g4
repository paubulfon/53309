grammar Comandos ;

//Gramatica
prog: comando EOF;

comando: ID opcion* NEWLINE?              
    ;
opcion:SUB ID (EQ valor)? NEWLINE?     
    ;
valor: NUMERO | CADENA 
    ;
//Lexemas
SUB : '-';
EQ: '=';
QUOTE: '"';
ID: [a-zA-Z]+;
NUMERO: [0-9]+;
CADENA: QUOTE (.)*? QUOTE;
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;
