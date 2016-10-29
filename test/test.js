
var Scanner = (require('../modules/scanner.js')).Scanner;
var Parser = (require('../modules/parser.js')).Parser;

var fs = require('fs');
var path = require('path');

var content = fs.readFileSync('ammo.idl');
var tokens = Scanner.scan(content);
//console.log(Scanner.toString(tokens));

var root = Parser.parse(tokens);
console.log(Parser.toString(root, 1));