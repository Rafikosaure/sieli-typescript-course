"use strict";
class PersonnageFactory {
    constructor(stamina, strength) {
        // this.stamina = stamina
        this.stamina = stamina;
        this.strength = strength;
    }
    takeOff(action) {
        console.log(action);
    }
}
const obj = new PersonnageFactory(1000, 200);
obj.takeOff("Tout baigne, les amis !");
console.log(`Vie : ${obj.stamina}\nForce : ${obj.strength}`);
