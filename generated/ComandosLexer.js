// Generated from c:/Users/Usuario/ssl-antlr-calculator/Comandos.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,54,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,1,3,4,3,25,8,3,11,3,
12,3,26,1,4,4,4,30,8,4,11,4,12,4,31,1,5,1,5,5,5,36,8,5,10,5,12,5,39,9,5,
1,5,1,5,1,6,3,6,44,8,6,1,6,1,6,1,7,4,7,49,8,7,11,7,12,7,50,1,7,1,7,1,37,
0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,3,2,0,65,90,97,122,1,0,48,57,
2,0,9,9,32,32,58,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,
0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,1,0,0,0,3,19,1,0,0,0,5,21,
1,0,0,0,7,24,1,0,0,0,9,29,1,0,0,0,11,33,1,0,0,0,13,43,1,0,0,0,15,48,1,0,
0,0,17,18,5,45,0,0,18,2,1,0,0,0,19,20,5,61,0,0,20,4,1,0,0,0,21,22,5,34,0,
0,22,6,1,0,0,0,23,25,7,0,0,0,24,23,1,0,0,0,25,26,1,0,0,0,26,24,1,0,0,0,26,
27,1,0,0,0,27,8,1,0,0,0,28,30,7,1,0,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,
1,0,0,0,31,32,1,0,0,0,32,10,1,0,0,0,33,37,3,5,2,0,34,36,9,0,0,0,35,34,1,
0,0,0,36,39,1,0,0,0,37,38,1,0,0,0,37,35,1,0,0,0,38,40,1,0,0,0,39,37,1,0,
0,0,40,41,3,5,2,0,41,12,1,0,0,0,42,44,5,13,0,0,43,42,1,0,0,0,43,44,1,0,0,
0,44,45,1,0,0,0,45,46,5,10,0,0,46,14,1,0,0,0,47,49,7,2,0,0,48,47,1,0,0,0,
49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,6,7,0,0,53,
16,1,0,0,0,6,0,26,31,37,43,50,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ComandosLexer extends antlr4.Lexer {

    static grammarFileName = "Comandos.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'-'", "'='", "'\"'" ];
	static symbolicNames = [ null, "SUB", "EQ", "QUOTE", "ID", "NUMERO", "CADENA", 
                          "NEWLINE", "WS" ];
	static ruleNames = [ "SUB", "EQ", "QUOTE", "ID", "NUMERO", "CADENA", "NEWLINE", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

ComandosLexer.EOF = antlr4.Token.EOF;
ComandosLexer.SUB = 1;
ComandosLexer.EQ = 2;
ComandosLexer.QUOTE = 3;
ComandosLexer.ID = 4;
ComandosLexer.NUMERO = 5;
ComandosLexer.CADENA = 6;
ComandosLexer.NEWLINE = 7;
ComandosLexer.WS = 8;



