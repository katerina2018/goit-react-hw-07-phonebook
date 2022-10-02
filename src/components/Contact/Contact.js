import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { HiOutlineUser, HiMinusCircle } from 'react-icons/hi';
import { ContactListButton } from './Contact.styles';

import { deleteContact } from 'redux/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContant = () => dispatch(deleteContact(contact.id));

  return (
    <>
      {<HiOutlineUser />}
      {contact.name}:<br /> {contact.phone}
      <ContactListButton type="button" onClick={onDeleteContant}>
        Delete {<HiMinusCircle />}
      </ContactListButton>
    </>
  );
};
Contact.propTypes = {
  contact: propTypes.object,
};

export default Contact;
