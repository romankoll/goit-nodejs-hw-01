// const argv = require("yargs").argv;

const contacts = require("./contacts");

// // TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      // ...
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      // ... id
      break;

    case "add":
      const newContact = await contacts.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      // ... name email phone
      break;

    case "update":
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      // ... id
      break;
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({ action: "add", name: "12", email: "12", phone: "12" });

// invokeAction({
//   action: "update",
//   id: "DhhOREwdPsGmee2f066dQ",
//   name: "32",
//   email: "32",
//   phone: "32",
// });
invokeAction({ action: "remove", id: "Z-rkf-GjZcqtl3iWc2NLC" });
