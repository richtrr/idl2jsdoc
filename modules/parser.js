/** (c) 2016 Igor Rybkin richtrr@ya.ru. */

function Node(entity) {
    this.children = [];
    this.Data = {
        entity:entity
    };
    this.push = (node) => {
        this.children.push(node);
    }
}

Node.ROOT='ROOT';
Node.INTERFACE='INTERFACE';
Node.IMPLEMENTS='IMPLEMENTS';
Node.METHOD='METHOD';
Node.CONSTRUCTOR='CONSTRUCTOR';
Node.ATTRIBUTE='ATTRIBUTE';
Node.ARGUMENT='ARGUMENT';

var tokens;
var options;
var comments;

function parseInterface(parent, i) {
    var it = new Node(Node.INTERFACE);
    i++;
    parent.push(it);
    it.Data.name = tokens[i].Content;
    i++;
    i = parseBlock(it, i);
    attachOptions(it);
    attachComments(it);
    return i;
}

function parseAttribute(parent, i) {
    var it = new Node(Node.ATTRIBUTE);
    i++;
    parent.push(it);
    it.Data.type = tokens[i].Content;
    i++;
    it.Data.name = tokens[i].Content;
    i++;
    attachOptions(it);
    attachComments(it);
    return i;
}

function parseBlock(parent, i) {
    i++; // {
    for (i; i < tokens.length;) {
        if (tokens[i].Content == '}') {
            i++;
            break;
        }
        i = parseOpperator(parent, i);
    }
    return i;
}

function parseOptions(i) {
    if (tokens[i].Content == '[') {
        i++;
        var a = [];
        var s = '';
        for (i; i < tokens.length;) {
            if (tokens[i].Content == ']') {
                a.push(s);
                i++;
                break;
            }
            if (tokens[i].Content == ',') {
                a.push(s);
                s = '';
                i++;
            }
            s += tokens[i].Content;
            i++;
        }

        if (a.length > 0)
            options = a;
    }
    return i;
}

function parseFunctionArgument(parent, i) {
    i++;

    i = parseOptions(i);

    var a = [];
    for (i; i < tokens.length;) {
        if (tokens[i].Content == ')' || tokens[i].Content == ',')
            break;
        a.push(tokens[i]);
        i++;
    }
    if (a.length > 0) {
        var it = new Node(Node.ARGUMENT);
        it.Data.name = a[a.length - 1].Content;
        if (a.length > 3 && a[a.length - 2].Content == ']' && a[a.length - 3].Content == '[') {
            it.Data.isArray = true;
            it.Data.type = a[a.length - 4].Content;
        }
        else {

            it.Data.type = a[a.length - 2].Content;
        }
        attachOptions(it);
        parent.push(it);
    }
    if (tokens[i].Content == ')') {
        i++;
        return i;
    }
    else return parseFunctionArgument(parent, i);
}

function attachOptions(it) {
    if (options) {
        it.Data.options = options;
        options = null;
    }
}


function attachComments(it) {
    if (comments) {
        it.Data.comments = comments;
        comments = null;
    }
}

function parseFunction(parent, i) {
    var name = tokens[i - 1].Content;
    var it = new Node(name == parent.Data.name ? Node.CONSTRUCTOR : Node.METHOD);
    it.Data.name = name;
    it.Data.type = tokens[i - 2].Content;
    i = parseFunctionArgument(it, i);
    parent.push(it);
    attachOptions(it);
    attachComments(it);
    i++;
    return i;
}

function parseImplements(parent, i) {
    var it = new Node(Node.IMPLEMENTS);
    parent.push(it);
    it.Data.name = tokens[i - 1].Content;
    i++;
    it.Data.member = tokens[i].Content;
    i++;
    return i;
}

function parseOpperator(parent, i) {
    switch (tokens[i].Content) {
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
            i = parseOptions(i);
            break;
        case 'attribute':
            i = parseAttribute(parent, i);
            break;
        default:
            if (tokens[i].Type == 'COMMENT')
                i = parseComment(i);
            else i++;
            break;
    }
    return i;
}

function parseComment(i) {
    if (!comments) comments = [];
    while (tokens[i].Type == 'COMMENT') {
        var s = tokens[i].Content;
        s = s.replace('\t', " ");
        s = s.replace(/^\s+|\s+$/g, "");
        s = s.replace(/^\s*[\r\n]/g, "");
        comments.push(s);
        i++;
    }
    return i;
}

function toString(node, depth) {
    if (!depth) depth = 0;
    var i;
    var tabs = '';
    for (i = 0; i < depth; i++)
        tabs += '   ';
    var s = '' + tabs + JSON.stringify(node.Data) + '\n';
    for (i = 0; i < node.children.length; i++)
        s += toString(node.children[i], depth + 1);
    return s;
}

function parse(toks) {
    tokens=toks;
    var root = new Node(Node.ROOT);
    var i = 0;
    while (i < tokens.length)
        i = parseOpperator(root, i);
    return root;
}


var Parser={};
Parser.parse = parse;
Parser.toString = toString;

module.exports.Parser = Parser;
module.exports.Node = Node;
