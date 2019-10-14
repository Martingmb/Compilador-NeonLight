// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "Program$subexpression$1", "symbols": [/[pP]/, /[rR]/, /[oO]/, /[gG]/, /[rR]/, /[aA]/, /[mM]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "Program$ebnf$1", "symbols": ["varDeclaration"], "postprocess": id},
    {"name": "Program$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Program$ebnf$2", "symbols": ["functionDeclaration"], "postprocess": id},
    {"name": "Program$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Program", "symbols": ["Program$subexpression$1", "ProgramID", "Program$ebnf$1", "Program$ebnf$2"], "postprocess": 
        function(d) {
            return d;
        }
        },
    {"name": "ProgramID", "symbols": [{"literal":"\""}, "_string", {"literal":"\""}], "postprocess": function(d) {return {'ProgramID':d[1]}; }},
    {"name": "parameter", "symbols": ["idWord", {"literal":":"}, "type"]},
    {"name": "parameter", "symbols": ["parameter", {"literal":","}]},
    {"name": "function$string$1", "symbols": [{"literal":"f"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function$subexpression$1$string$1", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "function$subexpression$1", "symbols": ["function$subexpression$1$string$1"]},
    {"name": "function$subexpression$1", "symbols": ["type"]},
    {"name": "function", "symbols": ["function$string$1", "_string", {"literal":"("}, "parameter", {"literal":")"}, {"literal":":"}, "function$subexpression$1"], "postprocess":  function(d) {
            return {
                'type': 'function',
                'name': d[1],
                'parameters': d[3],
                'functionType': d[6][0]
            }
        }  },
    {"name": "varDeclaration$ebnf$1", "symbols": ["var"]},
    {"name": "varDeclaration$ebnf$1", "symbols": ["varDeclaration$ebnf$1", "var"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "varDeclaration", "symbols": ["varDeclaration$ebnf$1"], "postprocess": 
        function(d) {
            return {
                globalVars: d
            }
        }
        },
    {"name": "functionDeclaration$ebnf$1", "symbols": []},
    {"name": "functionDeclaration$ebnf$1", "symbols": ["functionDeclaration$ebnf$1", "function"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "functionDeclaration", "symbols": ["functionDeclaration$ebnf$1"], "postprocess": 
        function(d) {
            return {
                functions: d
            }
        }
        },
    {"name": "var$string$1", "symbols": [{"literal":"v"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var$subexpression$1", "symbols": [{"literal":";"}]},
    {"name": "var$subexpression$1", "symbols": [{"literal":"="}, "int", {"literal":";"}]},
    {"name": "var", "symbols": ["var$string$1", "_string", {"literal":":"}, "type", "var$subexpression$1"], "postprocess":  function(d) {
        if(d[4][0] == '=') {
            return { 'var':'variable', 'varName':d[1], 'type':d[3][0], 'op':'assign', 'assignVal': d[4][1] }; 
        } else {
            return { 'var':'variable', 'varName':d[1], 'type':d[3][0]}; 
            }
        }
        },
    {"name": "var$string$2", "symbols": [{"literal":"v"}, {"literal":"a"}, {"literal":"r"}, {"literal":"["}, {"literal":"]"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var", "symbols": ["var$string$2", "_string", {"literal":":"}, "type", {"literal":"="}, {"literal":"["}, "int", {"literal":"]"}, {"literal":";"}], "postprocess":  function(d) {
           return {
               'var':'array',
               'varName':d[1],
               'size':d[6],
               'type':d[3][0]
           }
        }},
    {"name": "idWord$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "idWord$ebnf$1", "symbols": ["idWord$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "idWord", "symbols": ["idWord$ebnf$1"], "postprocess": 
        function(d) {
            return d;
        }
        },
    {"name": "test", "symbols": ["_string"]},
    {"name": "test", "symbols": ["test", {"literal":","}], "postprocess":  function(d) {
            console.log("Test:", d[0])
            return d[0]
        }
        },
    {"name": "type$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$1"]},
    {"name": "type$string$2", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$2"]},
    {"name": "type$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$3"]},
    {"name": "type$string$4", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$4"]},
    {"name": "type$string$5", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$5"]},
    {"name": "int", "symbols": [/[0-9]/], "postprocess": id},
    {"name": "int", "symbols": ["int", /[0-9]/], "postprocess":  function(d) {
            return d[0] + d[1]
        } },
    {"name": "String", "symbols": [{"literal":"\""}, "_string", {"literal":"\""}], "postprocess": function(d) {return {'literal':d[1]}; }},
    {"name": "_string", "symbols": [], "postprocess": function() {return ""; }},
    {"name": "_string", "symbols": ["_string", "_stringchar"], "postprocess":  function(d) {
        return d[0] + d[1];} },
    {"name": "_stringchar", "symbols": [/[^\\"]/], "postprocess": id},
    {"name": "_stringchar", "symbols": [{"literal":"\\"}, /[^]/], "postprocess": function(d) { return JSON.parse("\"" + d[0] + d[1] + "\""); }}
]
  , ParserStart: "Program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
