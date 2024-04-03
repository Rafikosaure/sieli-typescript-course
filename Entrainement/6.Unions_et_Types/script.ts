let code: string | number | Function | boolean
code = 5

let array: (boolean | number | string)[] = []

const foo = (arg: number | string) => {
    return arg
}

type mixNumberStr = number | string
type boolOrObject = boolean | object

const draft = (arg: mixNumberStr, arg2: boolOrObject) => {
    return ""
}

// Création de types, et exemple d'un bouton reprenant cette structure
type element = {
    x: number,
    y: number,
    id: number | string,
    visible: boolean
}
let button: element = {
    x: 1,
    y: 99,
    id: "str",
    visible: true
}

