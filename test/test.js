
var fs = require('fs');
var path = require('path');

var content = fs.readFileSync('ammo.idl');

//var tokens = (require('../modules/scanner.js')).scan(content);
//
//var root = (require('../modules/parser.js')).parse(tokens);
//console.log(JSON.stringify(root, null, ' '));

var result = (require('../modules/generator.js')).generate(content);
fs.writeFileSync('doc.ammo.js', result);
//console.log(result);



