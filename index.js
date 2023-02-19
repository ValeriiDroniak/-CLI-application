// const argv = require("yargs").argv;
const { Command } = require("commander");
const { listContacts, getContactById, addContact, removeContact } = require('./contacts');

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await listContacts());
      break;

    case "get":
      console.log(await getContactById(id));
      break;

    case "add":
      console.log(await addContact(name, email, phone));
      console.table(await listContacts());
      break;

    case "remove":
      const removedContact = await removeContact(id);

      if (!removedContact) {
        console.log(`Contact with ID ${id} not exists!`);
        return;
      }

      console.log(removedContact);
      console.table(await listContacts());
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);