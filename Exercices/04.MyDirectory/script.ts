import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Quel est votre prénom ? ", (answer) => {
    console.log(answer)
})