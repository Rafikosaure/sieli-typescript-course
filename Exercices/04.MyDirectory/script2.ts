import readline from 'readline';

interface IPerson {
  firstname: string;
  lastname: string;
  phone: string;
}

class Directory {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  list: IPerson[] = [];

  welcome = (): void => {
    console.log("Hello, I'm your directory!");
    console.log("Enter /help to display a list of commands.");
    console.log("Otherwise, just enter any existing command.");
    console.log(' ');
    this.command();
  }

  command = (): void => {
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
  }

  help = (): void => {
    console.log("Here are the details of different commands:");
    console.log("/help : Display all the available commands");
    console.log('/stop : Quit your beloved application');
    console.log('/add : Add a new contact in your directory');
    console.log('/list : List all the contacts you have in your beloved directory');
    console.log('/delete : Delete one contact by specifying his ID');
    console.log(' ');
    this.command();
  }

  add = async (): Promise<void> => {
    const firstname = await this.addFirstname();
    const lastname = await this.addLastname();
    const phone = await this.addPhone(firstname, lastname);

    const person: IPerson = {
      firstname,
      lastname,
      phone,
    };

    this.list.push(person);
    console.log('Contact added!');
    this.command();
  };

  addFirstname = (): Promise<string> => {
    return new Promise((resolve) => {
      this.rl.question('What is the first name of your contact : ', (firstname: string) => {
        const firstnameValue = firstname.charAt(0).toUpperCase() + firstname.slice(1);
        resolve(firstnameValue);
      });
    });
  }

  addLastname = (): Promise<string> => {
    return new Promise((resolve) => {
      this.rl.question('What is the last name of your contact : ', (lastname: string) => {
        const lastnameValue = lastname.charAt(0).toUpperCase() + lastname.slice(1);
        resolve(lastnameValue);
      });
    });
  }

  addPhone = async (firstname: string, lastname: string): Promise<string> => {
    let numero = '';
    while (!/^(06)\d{8}$/.test(numero)) {
      numero = await new  Promise((resolve) => {
        this.rl.question(`What is the phone number of ${firstname} ${lastname} : `, (numero: string) => {
          resolve(numero);
        });
      });
      if (!/^(06)\d{8}$/.test(numero)) {
        console.log('The phone number must start with “06” and contain 10 digits')
      }
    }
    return numero;
  }

  getList = (): void => {
    if (this.list.length > 0) {
      console.log('Here is the list of all your contacts:');
      this.list.map((person: IPerson, index: number) => {
        console.log(` ID : ${index} ==> ${person.firstname} ${person.lastname}`);
        console.log(` Phone number : ${person.phone}`);
      });
      this.command();
    } else {
      console.log('You have no contact in your directory');
      this.command();
    };
  }

  deletePerson = (): void => {
    if (this.list.length > 0) {
      this.getList();
      this.rl.question('Which contact do you want to delete? ', (id: string) => {
        const idNum = parseInt(id);
        if (idNum >= 0 && idNum < this.list.length) {
          this.list.splice(idNum, 1);
          console.log('Contact deleted!');
          this.command();
        } else {
          console.log('Please enter a valid ID');
        }
      });
    } else {
      console.log('You have no contact in your directory');
      this.command();
    };
  }

  stop = (): void => {
    console.log('Thank you for using our application!');
    this.rl.close();
  }
}

const directory = new Directory();
directory.welcome();

