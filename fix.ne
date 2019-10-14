Program -> "Program"i ProgramID varDeclaration:? {%
    function(d) {
        return d;
    }
%}

ProgramID -> "\"" _string "\"" {% function(d) {return {'ProgramID':d[1]}; } %}

varDeclaration -> var:+ {%
    function(d) {
        return {
            globalVars: d
        }
    }
%}

var -> "var" _string ":" type ";"  {% function(d) {
        return { 'var':'variable', 'varName':d[1], 'type':d[3][0]}; } %} 

type -> "int" | "float" | "string" | "char" | "bool"

_string ->
	null {% function() {return ""; } %}
	| _string _stringchar {% function(d) {
        return d[0] + d[1];} %}

_stringchar ->
	[^\\"] {% id %}
	| "\\" [^] {% function(d) { return JSON.parse("\"" + d[0] + d[1] + "\""); } %}