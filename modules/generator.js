
function Scanner() {

    var source;
    var tokens;

    function scan(s) {
        source = s + (AddToEnd_Semicolon ? ';' : '');
        tokens = [];
        var i;
        var token;
        var last;
        var next;

        for (i = 0; i < source.length; i++) {
            if (next) {
                token = next;
                next = read(source, next.IndexEnd + 1, token);
                if (token.Type != Token.SPACE) {
                    last = token;
                    tokens.push(token);
                }
                else {
                    next = null;
                }
                i = token.IndexEnd;
            }
            else {
                next = read(source, i, last);
            }
        }
    }

    function read(s, read_start, last) {

        var char = s.charAt(read_start);
        var code = char.charCodeAt();
        var d = '';

        var is_separator = SEPARATOR[code];

        var is_spacer = !is_separator && SPACER[code];
        var i = read_start;
        var token = new Token();
        token.IndexStart = read_start;

        var sec = s.charAt(read_start + 1);
        var is_num = '0123456789'.indexOf(char) >= 0 || (char == '.' && '0123456789'.indexOf(sec) >= 0);
        if (is_num) is_separator = false;
        var prev;
        for (i; i < s.length; i++) {
            prev = char;
            char = s.charAt(i);
            code = char.charCodeAt();
            if (is_num) {
                if (char == '.' || !(SEPARATOR[code] || SPACER[code])) {
                    d += char;
                }
                else {
                    // todo 0x detect
                    var num = Number(d);
                    if (!isNaN(num) && '.0123456789'.indexOf(d.charAt(0)) >= 0) {
                        token.Type = Token.NUMBER;
                        token.Content = num;
                    }
                    else {
                        token.Type = Token.ERROR;
                        token.Content = d;
                    }
                    break;
                }
            }
            else {
                if (is_spacer) {
                    token.Type = Token.SPACE;
                    if (!SPACER[code])
                        break;
                }
                else {

                    if (is_separator) {

                        // stoppers
                        if (d == '//') break;
                        if (d == '"') break;
                        if (d == "'") break;
                        if (d == '/*') break;
                        if (SEPARATOR[code]) {
                            if (d.length == 0 && EOLS[code]) {
                                i += 1;
                                token.Type = Token.EOL;
                                break;
                            }

                            if (d.length >= 1 && (EOLS[code] || !JOINT[code])) {
                                // type Div
                                break;
                            }
                            else {
                                if (OPPERATORS.indexOf(d + char) >= 0) {
                                    d += char;
                                }
                                else
                                   break;
                            }
                        }
                        else break;
                    }
                    else {
                        if (!(SEPARATOR[code] || SPACER[code])) {
                            d += char;
                        }
                        else break;
                    }
                }
            }
        }

        token.IndexEnd = i - 1;

        if (token.Type == null) {
            token.Content = d;
            if (is_separator)
                readDivide(s, token, last);
            else readText(s, token);
        }

        return token;
    }

    function readToEOL(s, token) {
        for (var i = 0; i < EOLS.length; i++) {
            if (readToRight(s, token, EOLS[i])) {
                return true;
            }
        }
        return false;
    }

    function readRegExp(s, token) {

        const flags = 'gimyu';

        var i = s.indexOf('/', token.IndexEnd + 1);
        if (i < 0) return false;
        token.IndexEnd = i;

        if (s.charAt(i - 1) == '\\')
            return readRegExp(s, token);

        var ex = s.substring(token.IndexStart + 1, token.IndexEnd);
        var p = '';
        var char;
        for (i; i < s.length; i++) {
            char = s.charAt(i + 1)
            if (flags.indexOf(char) >= 0) {
                p += char;
                token.IndexEnd++;
            }
            else break;
        }
        token.Content = new RegExp(ex, p);
        return true;
    }

    function readToRight(s, token, r) {
        var i = s.indexOf(r, token.IndexEnd + 1);
        if (i < 0) return false;
        token.IndexEnd = i + r.length;
        token.Content = s.substring(token.IndexStart + token.Content.length, token.IndexEnd - r.length);
        token.IndexEnd--;
        return true;
    }

    function readText(s, token) {
        if (OPPERATORS.indexOf(token.Content) >= 0) {
            token.Type = Token.OPPERATOR;
        }
        else {
            if (id_char_first.indexOf(token.Content.charAt(0)) >= 0) {
                token.Type = Token.IDENTIFIER;
                for (var i = 1; i < token.Content.length; i++)
                    if (id_char.indexOf(token.Content.charAt(i)) < 0) {
                        token.Type = Token.ERROR;
                        break;
                    }
            }
            else {
                token.Type = Token.ERROR;
            }
        }
    }

    function readDivOrReg(s, token, last) {
        var res = false;

        var b = after_may.indexOf(last.Content) >= 0;
        if (!b) {
            var c;
            for (var i = last.IndexStart; i > 0; i--) {
                c = s.substring(i, i + 1);
                var code = s.substring(i, i + 1).charCodeAt();
                if (!(EOLS[code] || SPACER[code])) {
                    b = after_may.indexOf(c) >= 0;
                    break;
                }
            }
        }

        if (b) {
            res = readRegExp(s, token);
            token.Type = Token.REGEXP;
            if (!res) {
                token.Type = Token.OPPERATOR;
                res = true;
            }
        }
        else {
            token.Type = Token.OPPERATOR;
            res = true;
        }

        return res;
    }

    function readDivide(s, token, last) {

        var res = false;
        switch (String(token.Content)) {
            case '//':
                res = readToEOL(s, token);
                token.Type = Token.COMMENT;
                break;
            case '/*':
                res = readToRight(s, token, '*/');
                token.Type = Token.COMMENT;
                break;
            case '"':
                res = readToRight(s, token, '"');
                token.Type = Token.STRING;
                break;
            case "'":
                res = readToRight(s, token, "'");
                token.Type = Token.STRING;
                break;
            case '/':
                res = readDivOrReg(s, token, last);
                break;
            default:
                res = (OPPERATORS.indexOf(String(token.Content)) >= 0);
                if (res)
                    token.Type = Token.OPPERATOR;
        }
        if (!res)
            token.Type = Token.ERROR;
    }

    function toString() {
        var i;
        var token;
        var s = '';
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            var t = ('<' + token.Type + '>') + (token.Content ? '<' + token.Content + '>' : '');
            s += '\n' + t;
        }
        return s;
    }

    this.source = source;
    this.tokens = tokens;
    this.scan = scan;
    this.toString = toString;
}

function Token() {
    this.IndexStart	= null;
    this.IndexEnd	= null;
    this.Type		= null;
    this.Content	= null;
    this.toString = function() {
        return '' + (Content == null ? Type : Content);
    }
}

Token.ERROR				= 'ERROR'	    ;
Token.IDENTIFIER		= 'IDENTIFIER'	;
Token.SPACE				= 'SPACE'		;
Token.EOL				= 'EOL'			;
Token.COMMENT			= 'COMMENT'		;
Token.OPPERATOR			= 'OPPERATOR'	;
Token.TYPE				= 'TYPE'		;
Token.REGEXP			= 'REGEXP'		;
Token.STRING			= 'STRING'		;
Token.NUMBER      		= 'NUMBER'		;

var OPPERATORS = [
    '{',
    '}',
    '(',
    ')',
    '[',
    ']',

    '<',
    '>',
    '/',
    '+',
    '-',
    '*',
    '%',
    '&',
    '|',
    '^',
    '!',
    '~',
    '?',
    ':',
    ';',
    '.',
    ',',
    '"',
    "'",
    '=',

    '//',
    '/*',
    '*/'
];


var EOLS = [];
var SPACER = [];
var SEPARATOR = [];
var JOINT = [];

const JOINT_STRING = '/*<>=^|&+-!';
const EOLS_STRING = '\u000A\u000D\u2028\u2029';
const SPACERS_STRING = '\u0009\u000B\u000C\u0020\u00A0\uFEFF';
const SEPARATORS_STRING = '!~%^&*()+-=|[]{};:,.<>/?"' + "'" + '\u000A\u000D\u2028\u2029';

const AddToEnd_Semicolon = false;
const id_char_first = '_$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const id_char = '_$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const after_may = [
    '{', '(', '[', '=', '?', ':', ';',
    '<', '>', '/', '+', '-', '*', '%',
    '&', '|', '^', '!', '~', ','];

function insertCodeChars(a, s) {
    for (var i = 0; i < s.length; i++)
        a[s.charCodeAt(i)] = s.charAt(i);
}

insertCodeChars(EOLS, EOLS_STRING);
insertCodeChars(JOINT, JOINT_STRING);
insertCodeChars(SPACER, SPACERS_STRING);
insertCodeChars(SEPARATOR, SEPARATORS_STRING);



module.exports.Scanner = Scanner;
module.exports.Token = Token;
