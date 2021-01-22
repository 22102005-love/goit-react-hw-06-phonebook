import s from "./ContactList.module.css";
import { useEffect } from 'react';
import actions from "../../redux/contacts/contacts-actions.js";
// import { connect } from "react-redux";
import { useSelector, useDispatch} from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onRemove = (id) => dispatch(actions.removeContact(id));
   useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  if (contacts.length === 0) return null;
  return (
    <ul className={s.listContact}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}:{contact.phone}
          <button onClick={() => onRemove(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
// const visibleContacts = (allContacts, filter) => {
//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: visibleContacts(items, filter),
// });
// const mapDispatchToProps = (dispatch) => ({
//   onRemove: (id) => dispatch(actions.removeContact(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

