import './App.css';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import { ContactList } from './components/ContactList/ContactList';

export function App() {
  return (
    <Section>
      <h1 className="App">Phonebook</h1>
      <Form />
      <Filter />
      <ContactList />
    </Section>
  );
}
