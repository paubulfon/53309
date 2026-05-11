// Generated from c:/Users/Usuario/ssl-antlr-calculator/Comandos.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ComandosListener from './ComandosListener.js';
import ComandosVisitor from './ComandosVisitor.js';

const serializedATN = [4,1,8,33,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
1,0,1,1,1,1,5,1,14,8,1,10,1,12,1,17,9,1,1,1,3,1,20,8,1,1,2,1,2,1,2,1,2,3,
2,26,8,2,1,2,3,2,29,8,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,5,6,32,0,8,1,0,
0,0,2,11,1,0,0,0,4,21,1,0,0,0,6,30,1,0,0,0,8,9,3,2,1,0,9,10,5,0,0,1,10,1,
1,0,0,0,11,15,5,4,0,0,12,14,3,4,2,0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,
0,0,0,15,16,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,18,20,5,7,0,0,19,18,1,0,
0,0,19,20,1,0,0,0,20,3,1,0,0,0,21,22,5,1,0,0,22,25,5,4,0,0,23,24,5,2,0,0,
24,26,3,6,3,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,29,5,7,0,0,28,
27,1,0,0,0,28,29,1,0,0,0,29,5,1,0,0,0,30,31,7,0,0,0,31,7,1,0,0,0,4,15,19,
25,28];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ComandosParser extends antlr4.Parser {

    static grammarFileName = "Comandos.g4";
    static literalNames = [ null, "'-'", "'='", "'\"'" ];
    static symbolicNames = [ null, "SUB", "EQ", "QUOTE", "ID", "NUMERO", 
                             "CADENA", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "comando", "opcion", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ComandosParser.ruleNames;
        this.literalNames = ComandosParser.literalNames;
        this.symbolicNames = ComandosParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ComandosParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.comando();
	        this.state = 9;
	        this.match(ComandosParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ComandosParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this.match(ComandosParser.ID);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 12;
	            this.opcion();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 18;
	            this.match(ComandosParser.NEWLINE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	opcion() {
	    let localctx = new OpcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ComandosParser.RULE_opcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(ComandosParser.SUB);
	        this.state = 22;
	        this.match(ComandosParser.ID);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 23;
	            this.match(ComandosParser.EQ);
	            this.state = 24;
	            this.valor();
	        }

	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 27;
	            this.match(ComandosParser.NEWLINE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ComandosParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ComandosParser.EOF = antlr4.Token.EOF;
ComandosParser.SUB = 1;
ComandosParser.EQ = 2;
ComandosParser.QUOTE = 3;
ComandosParser.ID = 4;
ComandosParser.NUMERO = 5;
ComandosParser.CADENA = 6;
ComandosParser.NEWLINE = 7;
ComandosParser.WS = 8;

ComandosParser.RULE_prog = 0;
ComandosParser.RULE_comando = 1;
ComandosParser.RULE_opcion = 2;
ComandosParser.RULE_valor = 3;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_prog;
    }

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	EOF() {
	    return this.getToken(ComandosParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_comando;
    }

	ID() {
	    return this.getToken(ComandosParser.ID, 0);
	};

	opcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpcionContext);
	    } else {
	        return this.getTypedRuleContext(OpcionContext,i);
	    }
	};

	NEWLINE() {
	    return this.getToken(ComandosParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_opcion;
    }

	SUB() {
	    return this.getToken(ComandosParser.SUB, 0);
	};

	ID() {
	    return this.getToken(ComandosParser.ID, 0);
	};

	EQ() {
	    return this.getToken(ComandosParser.EQ, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	NEWLINE() {
	    return this.getToken(ComandosParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterOpcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitOpcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitOpcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(ComandosParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(ComandosParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ComandosParser.ProgContext = ProgContext; 
ComandosParser.ComandoContext = ComandoContext; 
ComandosParser.OpcionContext = OpcionContext; 
ComandosParser.ValorContext = ValorContext; 
