// імпорт компонент
import React from 'react';
import { Container } from './App.styled';
import PhonebookForm from 'components/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
export default App;
