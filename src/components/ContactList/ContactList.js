import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import Contact from '../Contact/Contact';

import { ContactItems, ContactItem } from './ContactList.styles';

export function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  function filterContacts() {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }
  const onDeleteContant = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ContactItems>
      {filterContacts().map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            onDeleteContant={onDeleteContant}
          />
        </ContactItem>
      ))}
    </ContactItems>
  );
}
