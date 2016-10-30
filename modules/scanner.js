
var ERROR			= 'error'	    ;
var IDENTIFIER		= 'identifier'	;
var SPACE			= 'space'		;
var EOL				= 'eol'			;
var COMMENT			= 'comment'		;
var OPPERATOR		= 'opperator'	;
var REGEXP			= 'regexp'		;
var STRING			= 'string'		;
var NUMBER      	= 'number'		;

function scan(s) {
    var tokens = [];
    var source = String(s);
    var i;
    var token = null;
    var last = null;
    var next = null;

    for (i = 0; i < source.length; i++) {
        if (next) {
            token = next;
            next = read(source, next.indexEnd + 1, token);
            if (token.type != SPACE) {
                last = token;
                tokens.push(token);
            }
            else next = null;
            i = token.indexEnd;
        }
        else {
            next = read(source, i, last);
        }
    }
    return tokens;
}
function read(s, read_start, last) {

    var char = s.charAt(read_start);
    var code = char.charCodeAt();
    var d = '';

    var is_separator = SEPARATOR[code];

    var is_spacer = !is_separator && SPACER[code];
    var i = read_start;
    var token = {
        indexStart	: null,
        indexEnd	: null,
        type		: null,
        content	    : null
    };
    token.indexStart = read_start;

    // numbers parse
    // todo 0x detect, 0.0f

    var sec = s.charAt(read_start + 1);
    var is_num = ID_DIGITS.indexOf(char) >= 0 || (char == '.' && ID_DIGITS.indexOf(sec) >= 0);
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
                var num = Number(d);
                if (!isNaN(num) && ID_DIGITS_FIRST.indexOf(d.charAt(0)) >= 0) {
                    token.type = NUMBER;
                    token.content = num;
                }
                else {
                    token.type = ERROR;
                    token.content = d;
                }
                break;
            }
        }
        else {
            if (is_spacer) {
                token.type = SPACE;
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
                            token.type = EOL;
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

    token.indexEnd = i - 1;

    if (token.type == null) {
        token.content = d;
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
    var i = s.indexOf('/', token.indexEnd + 1);
    if (i < 0) return false;
    token.indexEnd = i;

    if (s.charAt(i - 1) == '\\')
        return readRegExp(s, token);

    var ex = s.substring(token.indexStart + 1, token.indexEnd);
    var p = '';
    var char;
    for (i; i < s.length; i++) {
        char = s.charAt(i + 1)
        if (flags.indexOf(char) >= 0) {
            p += char;
            token.indexEnd++;
        }
        else break;
    }
    token.content = new RegExp(ex, p);
    return true;
}
function readToRight(s, token, r) {
    var i = s.indexOf(r, token.indexEnd + 1);
    if (i < 0) return false;
    token.indexEnd = i + r.length;
    token.content = s.substring(token.indexStart + token.content.length, token.indexEnd - r.length);
    token.indexEnd--;
    return true;
}
function readText(s, token) {
    if (OPPERATORS.indexOf(token.content) >= 0) {
        token.type = OPPERATOR;
    }
    else {
        if (ID_CHAR_FIRST.indexOf(token.content.charAt(0)) >= 0) {
            token.type = IDENTIFIER;
            for (var i = 1; i < token.content.length; i++)
                if (ID_CHAR.indexOf(token.content.charAt(i)) < 0) {
                    token.type = ERROR;
                    break;
                }
        }
        else {
            token.type = ERROR;
        }
    }
}
function readDivOrReg(s, token, last) {
    var res = false;

    var b = AFTER_MAY.indexOf(last.content) >= 0;
    if (!b) {
        var c;
        for (var i = last.indexStart; i > 0; i--) {
            c = s.substring(i, i + 1);
            var code = s.substring(i, i + 1).charCodeAt();
            if (!(EOLS[code] || SPACER[code])) {
                b = AFTER_MAY.indexOf(c) >= 0;
                break;
            }
        }
    }

    if (b) {
        res = readRegExp(s, token);
        token.type = REGEXP;
        if (!res) {
            token.type = OPPERATOR;
            res = true;
        }
    }
    else {
        token.type = OPPERATOR;
        res = true;
    }

    return res;
}
function readDivide(s, token, last) {

    var res = false;
    switch (String(token.content)) {
        case '//':
            res = readToEOL(s, token);
            token.type = COMMENT;
            break;
        case '/*':
            res = readToRight(s, token, '*/');
            token.type = COMMENT;
            break;
        case '"':
            res = readToRight(s, token, '"');
            token.type = STRING;
            break;
        case "'":
            res = readToRight(s, token, "'");
            token.type = STRING;
            break;
        case '/':
            res = readDivOrReg(s, token, last);
            break;
        default:
            res = (OPPERATORS.indexOf(String(token.content)) >= 0);
            if (res)
                token.type = OPPERATOR;
    }
    if (!res)
        token.type = ERROR;
}
function toString(tokens) {
    var i;
    var token;
    var s = '';
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        var t = ('<' + token.type + '>') + (token.content ? '<' + token.content + '>' : '');
        s += '\n' + t;
    }
    return s;
}

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
var ID_CHAR_FIRST = '_$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var ID_DIGITS = '0123456789';
var ID_DIGITS_FIRST = '.'+ID_DIGITS;
var ID_CHAR = ID_CHAR_FIRST+ID_DIGITS;
var AFTER_MAY = [
    '{', '(', '[', '=', '?', ':', ';',
    '<', '>', '/', '+', '-', '*', '%',
    '&', '|', '^', '!', '~', ','];

function insertCodeChars(a, s) {
    for (var i = 0; i < s.length; i++)
        a[s.charCodeAt(i)] = s.charAt(i);
}

insertCodeChars(EOLS, '\u000A\u000D\u2028\u2029');
insertCodeChars(JOINT, '/*<>=^|&+-!');
insertCodeChars(SPACER, '\u0009\u000B\u000C\u0020\u00A0\uFEFF');
insertCodeChars(SEPARATOR, '!~%^&*()+-=|[]{};:,.<>/?"' + "'" + '\u000A\u000D\u2028\u2029');

module.exports.scan = scan;
module.exports.toString = toString;
