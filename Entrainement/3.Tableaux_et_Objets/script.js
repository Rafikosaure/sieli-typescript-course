"use strict";
// TABLEAUX
const fruits = ["orange", "pomme"];
fruits.push("fraise");
console.log(fruits);
const mix = [1, 'str', [1, 2, 3]]; // un tableau peut contenir des variables de différents types
let array; // le tableau a un type spécifique, mais n'est pas initialisé
// array.push(2) => erreur
array = [1, 2, 3]; // ici le tableau est initialisé
let array2 = [1, 2]; // ici le tableau est initialisé en même temps qu'il reçoit un type
// OBJETS
const hero = {
    name: "Deku",
    stamina: 100000,
    speed: 103
};
hero.name = "Rafik";
console.log(hero.name);
let user;
