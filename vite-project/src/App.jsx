import { useState } from 'react'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import initialContacts from './date.json'
import Contact from './Contact/Contact'


export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    })
  };

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
     
      <ContactForm onAdd={ addContact} />
      <SearchBox value={filter} onFilter={ setFilter} />
      <ContactList contacts={ visibleContacts} onDelete={deleteContact} /> 
      <Contact/>
    </div>
  );
}


