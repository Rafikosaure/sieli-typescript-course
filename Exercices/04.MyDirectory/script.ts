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

// Correction
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface Person {
  firstname: string;
  lastname: string;
  phone: string;
}

let list: Person[] = [];

const welcome = (): void => {
  console.log("Hello, I'm your directory!");
  console.log("Enter /help to display a list of commands.");
  console.log("Otherwise just enter any existing commands.");
  console.log(' ');
  command();
}

const command = (): void => {
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
}

const help = (): void => {
  console.log("Here are the details of different available commands:");
  console.log("/help : Display all the available commands");
  console.log('/stop : Quit your beloved application');
  console.log('/add : Add a new contact in your directory');
  console.log('/list : List all the contacts you have in your beloved directory');
  console.log('/delete : Delete one contact by specifying his ID');
  console.log(' ');
  command();
}

const add = async (): Promise<void> => {
  const firstname = await addFirstname();
  const lastname = await addLastname();
  const phone = await addPhone(firstname, lastname);

  const person: Person = {
    firstname,
    lastname,
    phone,
  };

  list.push(person);
  console.log('Contact added!');
  command();
};

const addFirstname = (): Promise<string> => {
  return new Promise((resolve) => {
    rl.question('What is the first name of your contact : ', (firstname: string) => {
      const firstnameValue = firstname.charAt(0).toUpperCase() + firstname.slice(1);
      resolve(firstnameValue);
    });
  });
}

const addLastname = (): Promise<string> => {
  return new Promise((resolve) => {
    rl.question('What is the last name of your contact : ', (lastname: string) => {
      const lastnameValue = lastname.charAt(0).toUpperCase() + lastname.slice(1);
      resolve(lastnameValue);
    });
  });
}

const addPhone = async(firstname: string, lastname: string): Promise<string> => {
  let numero = '';
  while (!/^(06)\d{8}$/.test(numero)) {
    numero = await new  Promise((resolve) => {
      rl.question(`What is the phone number of ${firstname} ${lastname} : `, (numero: string) => {
        resolve(numero);
      });
    });
    if (!/^(06)\d{8}$/.test(numero)) {
      console.log('the phone number must start with “06” and contain 10 digits')
    }
  }
  return numero;
}

const getList = (): void => {
  if (list.length > 0) {
    console.log('Here is the list of all your contacts:');
    list.map((person: Person, index: number) => {
      console.log(` ID : ${index} ==> ${person.firstname} ${person.lastname}`);
      console.log(` Phone number : ${person.phone}`);
    });
    command();
  } else {
    console.log('You have no contact in your directory');
    command();
  };
}

const deletePerson = (): void => {
  if (list.length > 0) {
    getList();
    rl.question('Which contact do you want to delete? ', (id: string) => {
      const idNum = parseInt(id);
      if (idNum >= 0 && idNum < list.length) {
        list.splice(idNum, 1);
        console.log('Contact deleted!');
        command();
      } else {
        console.log('Please enter a valid ID');
      }
    });
  } else {
    console.log('You have no contact in your directory');
    command();
  };
}

const stop = (): void => {
  console.log('Thank you for using our application!');
  rl.close();
}

welcome();



