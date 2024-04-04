"use strict";
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
const readline_1 = __importDefault(require("readline"));
class Directory {
    constructor() {
        this.rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.list = [];
        this.welcome = () => {
            console.log("Hello, I'm your directory!");
            console.log("Enter /help to display a list of commands.");
            console.log("Otherwise, just enter any existing command.");
            console.log(' ');
            this.command();
        };
        this.command = () => {
            this.rl.question('Command : ', (command) => {
                switch (command) {
                    case '/help':
                        this.help();
                        break;
                    case '/stop':
                        this.stop();
                        break;
                    case '/add':
                        this.add();
                        break;
                    case '/list':
                        this.getList();
                        break;
                    case '/delete':
                        this.deletePerson();
                        break;
                    default:
                        console.log(`Unknown command ${command}.`);
                }
            });
        };
        this.help = () => {
            console.log("Here are the details of different commands:");
            console.log("/help : Display all the available commands");
            console.log('/stop : Quit your beloved application');
            console.log('/add : Add a new contact in your directory');
            console.log('/list : List all the contacts you have in your beloved directory');
            console.log('/delete : Delete one contact by specifying his ID');
            console.log(' ');
            this.command();
        };
        this.add = () => __awaiter(this, void 0, void 0, function* () {
            const firstname = yield this.addFirstname();
            const lastname = yield this.addLastname();
            const phone = yield this.addPhone(firstname, lastname);
            const person = {
                firstname,
                lastname,
                phone,
            };
            this.list.push(person);
            console.log('Contact added!');
            this.command();
        });
        this.addFirstname = () => {
            return new Promise((resolve) => {
                this.rl.question('What is the first name of your contact : ', (firstname) => {
                    const firstnameValue = firstname.charAt(0).toUpperCase() + firstname.slice(1);
                    resolve(firstnameValue);
                });
            });
        };
        this.addLastname = () => {
            return new Promise((resolve) => {
                this.rl.question('What is the last name of your contact : ', (lastname) => {
                    const lastnameValue = lastname.charAt(0).toUpperCase() + lastname.slice(1);
                    resolve(lastnameValue);
                });
            });
        };
        this.addPhone = (firstname, lastname) => __awaiter(this, void 0, void 0, function* () {
            let numero = '';
            while (!/^(06)\d{8}$/.test(numero)) {
                numero = yield new Promise((resolve) => {
                    this.rl.question(`What is the phone number of ${firstname} ${lastname} : `, (numero) => {
                        resolve(numero);
                    });
                });
                if (!/^(06)\d{8}$/.test(numero)) {
                    console.log('The phone number must start with “06” and contain 10 digits');
                }
            }
            return numero;
        });
        this.getList = () => {
            if (this.list.length > 0) {
                console.log('Here is the list of all your contacts:');
                this.list.map((person, index) => {
                    console.log(` ID : ${index} ==> ${person.firstname} ${person.lastname}`);
                    console.log(` Phone number : ${person.phone}`);
                });
                this.command();
            }
            else {
                console.log('You have no contact in your directory');
                this.command();
            }
            ;
        };
        this.deletePerson = () => {
            if (this.list.length > 0) {
                this.getList();
                this.rl.question('Which contact do you want to delete? ', (id) => {
                    const idNum = parseInt(id);
                    if (idNum >= 0 && idNum < this.list.length) {
                        this.list.splice(idNum, 1);
                        console.log('Contact deleted!');
                        this.command();
                    }
                    else {
                        console.log('Please enter a valid ID');
                    }
                });
            }
            else {
                console.log('You have no contact in your directory');
                this.command();
            }
            ;
        };
        this.stop = () => {
            console.log('Thank you for using our application!');
            this.rl.close();
        };
    }
}
const directory = new Directory();
directory.welcome();
