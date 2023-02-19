const fs = require('fs').promises;
const path = require('path');
const { uid } = require('uid');
const contactsPath = path.resolve('./db/contacts.json');

const readFile = async (filePath) => {
  const data = (await fs.readFile(filePath, 'utf8'));
  return JSON.parse(data);
}

const writeFile = async (filePath, data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  return data;
}

async function listContacts() {
  try {
    const res = await readFile(contactsPath);
    return res;
  } catch (err) {
    console.error(err.message);
  }
}

async function getContactById(contactId) {
  try {
    const res = await readFile(contactsPath);
    const сontact = res.find(({ id }) => id === contactId);

    if (!сontact) {
      return console.error(`Contact with ID ${contactId} not found!`);
    };

    return сontact;
  } catch (err) {
    console.error(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const res = await readFile(contactsPath);
    const сontact = res.find(({ id }) => id === contactId);

    if (!сontact) {
      return;
    };

    const filteredContacts = res.filter(({ id }) => id !== contactId);

    writeFile(contactsPath, filteredContacts);

    return сontact;
  } catch (err) {
    console.error(err.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const res = await readFile(contactsPath);
    const newContact = {
      id: uid(8),
      name,
      email,
      phone
    };
    const findContact = res.find(({ name }) => name === newContact.name);

    if (findContact) {
      return;
    }

    res.push(newContact);
    writeFile(contactsPath, res);

    return newContact;
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}