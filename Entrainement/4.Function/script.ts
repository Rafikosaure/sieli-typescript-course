// void = néant, pour quand on a des fonctions qui ne retournent rien
// ? facultatif = pas obligatoire
// void est différent de undefined, undefined est un type

const multi = (num1: number, num2: number, action?: string) => {
    if (action) console.log(action)
    return num1 * num2
}
console.log(multi(1, 2, "Je vous souhaite tout le bonheur du monde !"))

// Le type Function s'écrit avec une Majuscule
let foo: Function
foo = () => {}

// Fonction signature
let toto: (a: number, b: number) => number
toto = (a, b) => a + b
console.log(toto(39, 1))

// Callback
function greetings(fs: (a: string) => void) {
    fs('hello')
}

function printConsole(msg: string) {
    console.log(msg);
}

greetings(printConsole)