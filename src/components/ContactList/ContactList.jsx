

import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from './ContactList.module.css';
import {  selectFilter, selectIsError, selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";



import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {

 const filter = useSelector(selectFilter);


  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
const isError=useSelector(selectIsError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <p className={s.contacts}>Contacts</p>
      <ul className={s.list}>
        {filteredContacts.length === 0 ? <h2>No contacts here</h2> : filteredContacts.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
      {loading && <h1>Loading...</h1>}
      {isError && <h2>Something went wrong</h2>}
    
    </>
  );
};

export default ContactList;
