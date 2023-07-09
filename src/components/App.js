
import React, { useEffect, useState } from 'react'; 
//import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState(() => {
      const retrival = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retrival == null) return []
      
      return retrival;
    });

    
  //   useEffect(() => {
  //     const retrival = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //     if(retrival) setContacts(retrival);
  // },[]);
  // const contacts =[
  //   {
  //     id:"1",
  //     name:"John",
  //     email:"john@gmail.com",
  //   },
  //   {
  //     id:"2",
  //     name:"Chris",
  //     email:"Christ@gmail.com",
  //   },
  // ];
  const AddContactHandler = (contact) => {
    console.log(contact);

    setContacts([...contacts,{ id: Math.trunc(Math.random()*1000), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) =>{ 
    return contact.id !== id;
  });

  setContacts(newContactList);
  
  }

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  return (
      <>
          <Header />
          <AddContact AddContactHandler = {AddContactHandler}/>
          <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      </>
  );
}

export default App;
