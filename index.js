const argv = require("yargs").argv;
const contacts = require('./contacts');

const invokeAction=async({ action, id, name, email, phone })=> {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.table(allContacts);
        case "get":
            const oneContact = await contacts.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contacts.addContact(name, email, phone);
            return console.log(newContact);
        case "remove":
            const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact);
    }
}
invokeAction(argv);