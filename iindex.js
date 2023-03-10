const prompt = require('prompt-sync')();
const css = []
let resp ='CSS'
while (resp != 'SAIR') {
    resp = prompt('Digite uma propriedade CSS: ').toUpperCase()
    if (resp != 'SAIR') { 
    css.push(resp)
    css.sort()
    }
}
console.log(`Propriedade CSS: ${css}`)
