/** (c) 2016 Igor Rybkin richtrr@ya.ru. */

// todo refactor

function createNode(entity) {
    return {
        entity:entity,
        children:[]
    }
}

var COMMENT			= 'comment'		;

// todo refactor consts
var ROOT            = 'root';
var INTERFACE       = 'interface';
var IMPLEMENTS      = 'implements';
var METHOD          = 'method';
var CONSTRUCTOR     = 'constructor';
var ATTRIBUTE       = 'attribute';
var ARGUMENT        = 'argument';
var OPTIONAL        = 'optional';

var tokens;
var options;
var comments;

function parseInterface(parent, i) {
    var it = createNode(INTERFACE);
    i++;
    parent.children.push(it);
    it.name = tokens[i].content;
    i++;
    i = parseBlock(it, i);
    attachOptions(it);
    attachComments(it);
    return i;
}

function parseAttribute(parent, i) {
    var it = createNode(ATTRIBUTE);
    i++;
    parent.children.push(it);
    it.type = tokens[i].content;
    i++;
    it.name = tokens[i].content;
    i++;
    attachOptions(it);
    attachComments(it);
    return i;
}

function parseBlock(parent, i) {
    i++; // {
    for (i; i < tokens.length;) {
        if (tokens[i].content == '}') {
            i++;
            break;
        }
        i = parseOpperator(parent, i);
    }
    return i;
}

function parseOptionsArray(i) {
    if (tokens[i].content == '[') {
        i++;
        var a = [];
        var sss = [];

        for (i; i < tokens.length;) {
            if (tokens[i].content == ']') {
                a.push(sss);
                i++;
                break;
            }
            if (tokens[i].content == ',') {
                a.push(sss);
                sss = [];
                i++;
            }
            sss.push(tokens[i]);
            i++;
        }

        if (a.length > 0) {
            options = {};
            for (var j = 0; j < a.length; j++) {
                var obj = a[j];
                var name = obj[0].content;
                if (obj.length == 1) {
                    options[name] = true;
                }
                else {
                    if (obj.length == 3 && obj[1].content == '=') {
                        options[name] = obj[2].content;
                    }
                    else {
                        // todo other operatios has?
                        options[name] = '';
                        for (var k = 1; k < obj.length; k++) {
                            options[name] += obj[k].content;
                        }
                    }
                }
            }
        }
    }
    return i;
}

function parseFunctionArgument(parent, i) {
    i++;

    i = parseOptionsArray(i);

    var a = [];
    for (i; i < tokens.length;) {
        if (tokens[i].content == ')' || tokens[i].content == ',')
            break;
        a.push(tokens[i]);
        i++;
    }
    if (a.length > 1) {
        var it = createNode(ARGUMENT);
        it.name = a[a.length - 1].content;
        if (a.length > 3 && a[a.length - 2].content == ']' && a[a.length - 3].content == '[') {
            it.isArray = true;
            it.type = a[a.length - 4].content;
            if(a.length > 4  && a[a.length - 5].content == OPTIONAL) {
                it.isOptional = true;
            }
        }
        else {
            it.type = a[a.length - 2].content;
            if(a.length > 2  && a[a.length - 3].content == OPTIONAL) {
                it.isOptional = true;
            }
        }
        attachOptions(it);
        parent.children.push(it);
    }
    if (tokens[i].content == ')') {
        i++;
        return i;
    }
    else return parseFunctionArgument(parent, i);
}

function attachOptions(it) {
    if (options) {
        it.options = options;
        options = null;
    }
}

function attachComments(it) {
    if (comments) {
        it.comments = comments;
        comments = null;
    }
}

function parseFunction(parent, i) {
    var name = tokens[i - 1].content;
    var it = createNode(name == parent.name ? CONSTRUCTOR : METHOD);
    it.name = name;
    it.type = tokens[i - 2].content;
    i = parseFunctionArgument(it, i);
    parent.children.push(it);
    attachOptions(it);
    attachComments(it);
    i++;
    return i;
}

function parseImplements(parent, i) {
    var it = createNode(IMPLEMENTS);
    parent.children.push(it);
    it.name = tokens[i - 1].content;
    i++;
    it.member = tokens[i].content;
    i++;
    return i;
}

function parseOpperator(parent, i) {
    switch (tokens[i].content) {
        case 'implements':
            i = parseImplements(parent, i);
            break;
        case 'interface':
            i = parseInterface(parent, i);
            break;
        case '(':
            i = parseFunction(parent, i);
            break;
        case '[':
            i = parseOptionsArray(i);
            break;
        case 'attribute':
            i = parseAttribute(parent, i);
            break;
        default:
            if (tokens[i].type == COMMENT)
                i = parseComment(i);
            else i++;
            break;
    }
    return i;
}

function parseComment(i) {
    if (!comments) comments = [];
    while (tokens[i].type == COMMENT) {
        var s = tokens[i].content;
        s = s.replace('\t', " ");
        s = s.replace(/^\s+|\s+$/g, "");
        s = s.replace(/^\s*[\r\n]/g, "");
        comments.push(s);
        i++;
    }
    return i;
}

function parse(toks) {
    tokens=toks;
    var root = createNode(ROOT);
    var i = 0;
    while (i < tokens.length)
        i = parseOpperator(root, i);
    return root;
}

module.exports.parse = parse;
