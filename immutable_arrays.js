// array with two objects

const users = [
  {
    id: 1,
    name: "Lukas",
    job: "Information Technologist"
  },
  {
    id: 2,
    name: "Anna",
    job: "Software Developer"
  }
];

// new array with additional user object

const usersWithNewUser = [
  ...users,
  {
    id: 3,
    name: "Mark",
    job: "Data Analyst"
  }
];
