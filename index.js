const contacts = require("./contacts");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

console.log(argv);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);

      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);

      break;

    case "add":
      const newContact = await contacts.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "update":
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);

      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
