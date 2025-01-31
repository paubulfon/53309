grammar Calculator;

//Gramatica
prog: stat+;

stat: expr NEWLINE?              #printExpr
    | ID EQ expr NEWLINE?        #assign
    | NEWLINE                   #blank
    ;

expr: expr op=(MUL|DIV) expr    #MulDiv
    | expr op=(ADD|SUB) expr    #AddSub
    | INT                       #int
    | ID                        #id
    | LPAREN expr RPAREN        #parens
    ;

//Lexemas
MUL : '*';
DIV : '/';
ADD : '+';
SUB : '-';
EQ: '=';
ID : [a-zA-Z]+;
INT : [0-9];
LPAREN : '(';
RPAREN : ')';
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;