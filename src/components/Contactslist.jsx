
import React, { useState, useEffect } from 'react';
import '../App.css';
import Contact from './Contact.jsx'


function Contactslist({ contacts }) {

//Create our state that should store the array of users
const [users, setUsers] = useState([]);
 //UseEffect used to fetch users from the api.
  useEffect(() => {
  
    //Create an async function that fetches the users.
    const fetchUsers = async () => {
      //Use a try catch block here to handle async data.
      try {
        //We will call our fetch in the try. Make sure to use await keyword.
        await fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => {
            //The res parameter holds the raw data returned from the api.
            //We need to format the raw data into a json format.
            return res.json();
            //Now that the response is formatted into json we can use another .then() to set call our setUsers function from our useState.
          })
          .then((formattedData) => {
            //formattedData stores the json we returned from the previous .then()
            //This is where we are calling our setUsers function from the useState we created.
            return setUsers(formattedData);
          });
      } catch (err) {
        //err holds any error if our promise is rejected.
        //We can just print out the error here.
        console.log(err);
      }
    };
    //Because the function is declared but never called we need to call it at the bottom of our useEffect.
    fetchUsers();
  }, []);
  //Print the state variable holding our fetched users to make sure everything works.
  console.log(users);
  return (

    <div className="Contactslist">
      <div className="title">
        <h1>Contacts  </h1>
        <p>Number of Array Elements is {users.length}</p>      {/* datasource one   */}
      </div>

      {users.map((user) => {     //  When opening curly bvraces from map you need a return 

      // {contacts.map((contact, objKey) => {
        console.log(user); // contact is gettin the data one at a time.
        return (

          <Contact
          // img= {.}
              name={user.name}                              //   {/* datasource two   */}
              tel={user.phone}                              //   {/* datasource three */}
          />
        );
      })}
    </div>
  );
}

export default Contactslist;
