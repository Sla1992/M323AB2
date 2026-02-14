// mutable object
let person = {
name: "Anna",
alter: 25
};

//immutable object
person.alter = 26; 

 const person = {
 name: "Anna",
 alter: 25
 };
 const neuePerson = {
 ...person,
 alter: 26
 };

 // primitive datatype
 const alter = 30;

 // object with 3 properties
 const user = {
  name: "Lukas",
  age: 28,
  job: "Information Technologist"
};

const benutzerMitStadt = {
  ...benutzer,
  city: "Bern"
};

const updatedUser = {
  ...user,
  age: 29
};
