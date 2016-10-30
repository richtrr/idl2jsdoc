
var Scanner = (require('../modules/scanner.js')).Scanner;
var Parser = (require('../modules/parser.js')).Parser;

var map_interfaces;

var INTERFACE       = 'interface';
var IMPLEMENTS      = 'implements';
var METHOD          = 'method';
var CONSTRUCTOR     = 'constructor';
var ATTRIBUTE       = 'attribute';
var ARGUMENT        = 'argument';

function linked(node) {
    map_interfaces={};

    var i, it, field, j;

    // fill map interfaces
    for (i = 0; i < node.children.length; i++) {
        it = node.children[i];
        if (it.entity == INTERFACE) {
            it.map={};
            for (j = 0; j < it.children.length; j++) {
                field = it.children[j];
                if(!it.map[field.name])
                    it.map[field.name] = 1;
                else it.map[field.name]++
            }
            map_interfaces[it.name] = it;
        }
    }

    for (i = 0; i < node.children.length; i++) {
        it = node.children[i];
        if (it.entity == IMPLEMENTS) {
            map_interfaces[it.name].implements = map_interfaces[it.member];
        }
    }
    for (i = 0; i < node.children.length; i++) {
        it = node.children[i];
        if (it.entity == INTERFACE) {
            if(it.implements){
                copyImplements(it.implements, it);
            }
            deleteOverlaps(it);
        }
    }
}

function checkImplements(it, target) {
    for (var i = 0; i < target.children.length; i++) {
        var obj = target.children[i];
        if (it.name == obj.name && it.type == obj.type && it.children.length == obj.children.length) {
            return true;
        }
    }
    return false;
}

function deleteOverlaps(it) {
    var indesies=[];
    for (var i = 0; i < it.children.length; i++) {
        if(indesies.indexOf(i)<0) {
            var a = it.children[i];
            if (a.entity == CONSTRUCTOR || a.entity == METHOD) {
                for (var j = i + 1; j < it.children.length; j++) {
                    if(indesies.indexOf(j)<0) {
                        var b = it.children[j];
                        if ((b.entity == CONSTRUCTOR || b.entity == METHOD) && a.name == b.name) {
                            if (a.children.length >= b.children.length) {
                                indesies.push(j);
                                if (a.children.length > b.children.length) {
                                    for (var u = b.children.length - 1; u < a.children.length; u++)
                                        if(a.children[u])
                                            a.children[u].isOptional = true;
                                }
                            }
                            else {
                                indesies.push(i);
                                if (a.children.length < b.children.length) {
                                    for (var u = a.children.length - 1; u < b.children.length; u++)
                                        if(b.children[u])
                                            b.children[u].isOptional = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    for (var k = 0; k < indesies.length; k++) {
        it.children.splice(indesies[k], 1);
    }
}
function copyImplements(it, target) {
    for (var i = 0; i < it.children.length; i++) {
        var obj = it.children[i];
        if(!checkImplements(obj, target)) {
            target.children.push(obj);
        }
    }
    if(it.implements){
        copyImplements(it.implements, target);
    }
}


var lib = 'Ammo'; // ???
function generateInterface(it) {

    var code = '';

   /* code += '/!**\n';
    code += '\t@interface ' + lib +'.'+ it.name + '\n';
    if (it.implements)
        code += '\t@implements ' + lib +'.'+ it.implements.name + '\n';
    if (it.comments)
        code += '\t@description ' + it.comments.join('\n');
    code += '*!/\n\n';*/

    // implement

    // todo remove ovearlap functions and constructors

    for (var i = 0; i < it.children.length; i++) {
        var node = it.children[i];
        var val;
        switch (node.entity) {
            case CONSTRUCTOR:
                val = generateMethod(node);
                code += '/**\n';
                code += '\t@constructor\n';
                if (it.implements)
                    code += '\t@implements ' + lib +'.'+ it.implements.name + '\n';
                code += val.desc;
                code += '*/\n';
                code += lib +'.'+ it.name + ' = '+val.code+';\n';
                break;
            case METHOD:
                // methods definitions
                val = generateMethod(node);
                code += '/**\n';
                code += '\t@function\n';
                code += val.desc;
                code += '*/\n';
                code += lib +'.'+ it.name + '.prototype.'+node.name+' = '+val.code + ';\n';
                break;
            case ATTRIBUTE:
                // attributes definitions

                val = generateMethod({
                    name:'get_'+node.name,
                    type:node.type,
                    children:[]
                });

                code += '/**\n';
                code += '\t@function\n';
                code += val.desc;
                code += '*/\n';
                code += lib +'.'+ it.name + '.prototype.'+'get_'+node.name+' = '+val.code + ';\n';

                val = generateMethod({
                    name:'set_'+node.name,
                    type:'void',
                    children:[{
                        name:'value',
                        children:[],
                        type:node.type,
                    }]
                });

                code += '/**\n';
                code += '\t@function\n';
                code += val.desc;
                code += '*/\n';
                code += lib +'.'+ it.name + '.prototype.'+'set_'+node.name+' = '+val.code + ';\n';



                break;
            default:
        }
    }

    return code;
}

var primitives={
    'float':'Number',
    'long':'Number',
    'short':'Number',
    'int':'Number',
    'boolean':'Boolean',
    'void':'',
}

function generateTypeDefault(it) {
    var r;
    switch (it.type) {
        case 'boolean':
            r = false;
            break;
        case 'float':
        case 'long':
        case 'short':
        case 'int':
            r = 0;
            break;
        case 'string':
            r = '""';
            break;
        default:
            r = 'null';
            break;
    }
    if (it.isArray)
        r = '[' + r + ']';
    return r;
}
function generateTypeDesc(it) {
    var type = '';

    if (primitives[it.type]) {
        type = primitives[it.type];
    }
    else {
        if (map_interfaces[it.type]) {
            type = lib +'.'+ it.type;
        }
        else {
            type = '*';
        }
    }
    if (it.isArray) {
        if (type != '')
            type = '{Array<' + type + '>}';
        else type = '{Array}';
    }
    else {
        type = '{' + type + '}';
    }

    return type;
}

function generateArgumentDescription(it) {
    var desc = '';
    var code = '';
    code += it.name;
    desc += '\t@param ';
    if (it.isOptional) {
        name = '[' + it.name + ']';
    }
    else {
        name = it.name;
    }

    desc += generateTypeDesc(it) + ' '+name;

    return {
        desc: desc,
        code: code
    };
}

function generateMethod(it) {
    var desc = '';
    var code = '';

    var args = [];
    var argNames = [];
    for (var i = 0; i < it.children.length; i++) {
        var val = generateArgumentDescription(it.children[i]);
        argNames.push(val.code);
        args.push(val.desc);
    }
    if(args.length>0) {
        desc += args.join('\n');
        desc+='\n'
    }
    if (it.type != 'void') {
        desc+='\t@return ' + generateTypeDesc(it);
        desc+='\n'
    }
    else {
    }

    code += 'function(' + argNames.join(', ') + ') {';

    if (it.type != 'void') {
        code += '\n\treturn ' + generateTypeDefault(it) + ';\n';
    }
    code += '}';

    return {
        desc: desc,
        code: code
    };
}


function generate(content) {
    var tokens = (require('../modules/scanner.js')).scan(content);
    var root = (require('../modules/parser.js')).parse(tokens);
    linked(root);

    var r = [];
    for (var s in map_interfaces) {
        r.push(generateInterface(map_interfaces[s]));
    }

    return 'var ' + lib + ' = {};\n' + r.join('\n');
}

module.exports.generate = generate;
