const moi = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({ text: `je m'appelle ${moi.name} et mon campus est ${moi.campus}` }));