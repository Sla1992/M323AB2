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

// new array using map to update job of user with id 2

const updatedUsers = users.map(user =>
  user.id === 2
    ? { ...user, job: "Senior Software Developer" }
    : user
);

