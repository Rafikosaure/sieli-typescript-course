"use strict";
// void = néant, pour quand on a des fonctions qui ne retournent rien
// ? facultatif = pas obligatoire
// void est différent de undefined, undefined est un type
const multi = (num1, num2, action) => {
    if (action)
        console.log(action);
    return num1 * num2;
};
console.log(multi(1, 2, "Je vous souhaite tout le bonheur du monde !"));
// Le type Function s'écrit avec une Majuscule
let foo;
foo = () => { };
// Fonction signature
let toto;
toto = (a, b) => a + b;
console.log(toto(39, 1));
// Callback
function greetings(fs) {
    fs('hello');
}
function printConsole(msg) {
    console.log(msg);
}
greetings(printConsole);
