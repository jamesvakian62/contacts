import './App.css';
import Contactslist from './components/Contactslist';
import Sidebar from './components/Sidebar';

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/
let contactsArr = [
  {
   img: "/images/1.png",
     name: 'John Diggins',
     tel: '(213) 654-8909',
   },
   {
     img: "/images/k.png",
     name: 'Stev Trey',
     tel: '(215) 345-5565',
   },
   {
     img: "/images/3.png",
     name: 'Joey Gibbin',
     tel: '(210) 345-8909',
   },
   {
     img: "/images/a.png",
     name: 'Lance Knight',
     tel: '(212) 345-8909',
   },
   {
     img: "/images/j.png",
     name: 'King Of Sweeden',
     tel: '(213) 345-8909',
   },
   {
     img: "/images/b.png",
     name: 'Cars 4 Sale',
     tel: '(213) 345-4409',
   },
 ]; 



function App() {
  return (
    <div className="App">
      <Sidebar />
      <Contactslist contacts = {contactsArr}  />
    </div>
  );
}

export default App;
