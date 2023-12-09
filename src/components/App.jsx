import { useState, useEffect } from 'react';
import { Container } from './Container.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'saved_contacts';

export const App = () => {
  const savedContacts = JSON.parse(window.localStorage.getItem(LS_KEY));
  const [contacts] = useState(savedContacts || []);

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);
  console.log(contacts);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList contacts={contacts}></ContactList>
      </Container>
    </>
  );
};
