import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Layout } from './Layuot';
import { Section } from './Section/Section';
import { FilterName } from './Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const localStorageKey = 'contacts';

const getContacts = () => {
  const savedContacts = localStorage.getItem(localStorageKey);
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  //запис контактів в локалсторидж
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const selectedName = contacts.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  );

  const filterByName = valueName => {
    setFilter(valueName);
  };

  const addContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(elem => elem.id !== contactId));
  };

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm onAddContact={addContact}></ContactForm>
      </Section>
      <Section title="Contacts">
        <FilterName searchName={filter} onSearch={filterByName}></FilterName>
        <Contacts
          contacts={selectedName}
          onDeleteContact={deleteContact}
        ></Contacts>
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
