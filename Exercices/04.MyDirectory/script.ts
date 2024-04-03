import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Création d'un tableau de contacts
let contactList: object[] = []

// Modèle d'un objet "contact"
interface contactModel {
    firstName: string,
    lastName: string,
    tel: string
}
// constitution d'un contact par défaut
let contact: contactModel = {
    firstName: "",
    lastName: "",
    tel: ""
}

function getContactDatas(contact: contactModel, word: string) {
    rl.question(`Quel est ton ${word} ? `, (answer) => {
        if (word === "prénom") {
            contact.firstName = answer
            getContactDatas(contact, "nom")
        } else if (word === "nom") {
            contact.lastName = answer
            getContactDatas(contact, "tel")
        } else if (word === "tel") {
            contact.tel = answer
            contactList.push(contact)
            console.log(contactList)
        }
    })
}

getContactDatas(contact, "prénom")


