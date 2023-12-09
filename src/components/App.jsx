import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'saved_contacts';

export const App = () => {
  const savedContacts = JSON.parse(window.localStorage.getItem(LS_KEY));
  const [contacts, setContacts] = useState(savedContacts || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const isOnContacts = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === data.name.toLowerCase().trim()
    );

    if (isOnContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts(prev => [...prev, { id: nanoid(), ...data }]);
  };

  const onDeleteContact = name => {
    setContacts(prev => prev.filter(contact => contact.name !== name));
  };

  const filterHandleChange = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler}></ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={filterHandleChange}></Filter>
        <ContactList
          contacts={filteredContacts}
          onDelete={onDeleteContact}
        ></ContactList>
      </Container>
    </>
  );
};
