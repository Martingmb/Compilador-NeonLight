
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

var -> "var" _string ":" type (";" | "=" int ";" {% function(d) {

    if(d[5]) {
        console.log("Si hay declaracion de tipo")
    } else {
        return { 'var':'variable', 'varName':d[1], 'type':d[3][0]}; } 
    }
    %} 
    | "var[]" _string ":" type "=" "[" int "]" ";" {% function(d) {
       return {
           'var':'array',
           'varName':d[1],
           'size':d[6],
           'type':d[3][0]
       }
    }
    %}

varAssign -> "var" _string ":" type "=" int ";" {% function(d) {
    return {'var':'variable', 'varName':d[1], 'type':d[3][0], 'value':d[5][0]}
} %}

id -> [a-zA-Z]:+ {%
    function(d) {
        return d;
    }
%}

test -> _string | test "," {% function(d) {
    console.log("Test:", d[0])
    return d[0]
}
%}

type -> "int" | "float" | "string" | "char" | "bool"

int -> [0-9] {% id %}
    | int [0-9] {% function(d) {
        return d[0] + d[1]
    } %}

String -> "\"" _string "\"" {% function(d) {return {'literal':d[1]}; } %}

_string ->
	null {% function() {return ""; } %}
	| _string _stringchar {% function(d) {
        return d[0] + d[1];} %}
 
_stringchar ->
	[^\\"] {% id %}
	| "\\" [^] {% function(d) { return JSON.parse("\"" + d[0] + d[1] + "\""); } %}