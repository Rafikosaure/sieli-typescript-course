interface Personnage {
    stamina: number;
    strength: number;
    takeOff: (action: string) => void
}

class PersonnageFactory implements Personnage {
    stamina: number;
    strength: number;

    constructor(stamina: number, strength: number) {
        // this.stamina = stamina
        this.stamina = stamina
        this.strength = strength
    }

    takeOff(action: string) {
        console.log(action)
    }
}

const obj = new PersonnageFactory(1000, 200)
obj.takeOff("Tout baigne, les amis !")
console.log(`Vie : ${obj.stamina}\nForce : ${obj.strength}`)