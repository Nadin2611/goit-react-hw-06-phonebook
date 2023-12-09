import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();
  onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        >
          {name} {number}
        </ContactListItem>
      ))}
    </List>
  );
};
