import { FaTrashAlt } from 'react-icons/fa';
import { ContactItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts?.map(({ name, email, phone, _id }) => {
        return (
          <ContactItem key={_id}>
            <span
              style={{
                flexGrow: '2',
              }}
            >
              {name}
            </span>
            <span
              style={{
                marginRight: '10px',
              }}
            >
              {phone}
            </span>
            <span
              style={{
                marginRight: '10px',
              }}
            >
              {email}
            </span>

            <FaTrashAlt
              aria-label="delete-icon"
              style={{
                cursor: 'pointer',
                color: 'crimson',
              }}
              onClick={() => {
                handleDelete(_id);
              }}
            />
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;
