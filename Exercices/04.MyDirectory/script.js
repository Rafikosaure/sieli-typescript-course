"use strict";
/* Exercice :


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


Fin de l'exercice
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Correction
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
let list = [];
const welcome = () => {
    console.log("Hello, I'm your directory!");
    console.log("Enter /help to display a list of commands.");
    console.log("Otherwise just enter any existing commands.");
    console.log(' ');
    command();
};
const command = () => {
    rl.question('Command : ', (command) => {
        switch (command) {
            case '/help':
                help();
                break;
            case '/stop':
                stop();
                break;
            case '/add':
                add();
                break;
            case '/list':
                getList();
                break;
            case '/delete':
                deletePerson();
                break;
            default:
                console.log(`Unknown command ${command}.`);
        }
    });
};
const help = () => {
    console.log("Here are the details of different available commands:");
    console.log("/help : Display all the available commands");
    console.log('/stop : Quit your beloved application');
    console.log('/add : Add a new contact in your directory');
    console.log('/list : List all the contacts you have in your beloved directory');
    console.log('/delete : Delete one contact by specifying his ID');
    console.log(' ');
    command();
};
const add = () => __awaiter(void 0, void 0, void 0, function* () {
    const firstname = yield addFirstname();
    const lastname = yield addLastname();
    const phone = yield addPhone(firstname, lastname);
    const person = {
        firstname,
        lastname,
        phone,
    };
    list.push(person);
    console.log('Contact added!');
    command();
});
const addFirstname = () => {
    return new Promise((resolve) => {
        rl.question('What is the first name of your contact : ', (firstname) => {
            const firstnameValue = firstname.charAt(0).toUpperCase() + firstname.slice(1);
            resolve(firstnameValue);
        });
    });
};
const addLastname = () => {
    return new Promise((resolve) => {
        rl.question('What is the last name of your contact : ', (lastname) => {
            const lastnameValue = lastname.charAt(0).toUpperCase() + lastname.slice(1);
            resolve(lastnameValue);
        });
    });
};
const addPhone = (firstname, lastname) => __awaiter(void 0, void 0, void 0, function* () {
    let numero = '';
    while (!/^(06)\d{8}$/.test(numero)) {
        numero = yield new Promise((resolve) => {
            rl.question(`What is the phone number of ${firstname} ${lastname} : `, (numero) => {
                resolve(numero);
            });
        });
        if (!/^(06)\d{8}$/.test(numero)) {
            console.log('the phone number must start with “06” and contain 10 digits');
        }
    }
    return numero;
});
const getList = () => {
    if (list.length > 0) {
        console.log('Here is the list of all your contacts:');
        list.map((person, index) => {
            console.log(` ID : ${index} ==> ${person.firstname} ${person.lastname}`);
            console.log(` Phone number : ${person.phone}`);
        });
        command();
    }
    else {
        console.log('You have no contact in your directory');
        command();
    }
    ;
};
const deletePerson = () => {
    if (list.length > 0) {
        getList();
        rl.question('Which contact do you want to delete? ', (id) => {
            const idNum = parseInt(id);
            if (idNum >= 0 && idNum < list.length) {
                list.splice(idNum, 1);
                console.log('Contact deleted!');
                command();
            }
            else {
                console.log('Please enter a valid ID');
            }
        });
    }
    else {
        console.log('You have no contact in your directory');
        command();
    }
    ;
};
const stop = () => {
    console.log('Thank you for using our application!');
    rl.close();
};
welcome();
