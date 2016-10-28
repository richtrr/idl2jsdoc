
var generator = (require('../modules/generator.js'));

var scanner = new generator.Scanner();

var fs = require('fs');
var path = require('path');

var content = fs.readFileSync('ammo.idl');
scanner.scan(content);
console.log(scanner.toString());

