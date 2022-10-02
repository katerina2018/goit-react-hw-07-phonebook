import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

import Contact from '../Contact/Contact';

import { ContactItems, ContactItem } from './ContactList.styles';

export function ContactList() {
  // const filter = '';
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  function filterContacts() {
    console.log(contacts);

    console.log(filter);

    if (contacts.length !== 0) {
      const normalizeFilter = filter.toLowerCase().trim();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      );
    }
  }
  return (
    <ContactItems>
      {!filterContacts()
        ? 'contact missing'
        : filterContacts().map(contact => (
            <ContactItem key={contact.id}>
              <Contact contact={contact} />
            </ContactItem>
          ))}
    </ContactItems>
  );
}
