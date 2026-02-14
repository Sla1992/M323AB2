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

const smallestId = Math.min(...users.map(user => user.id));
const usersWithoutSmallestId = users.filter(user => user.id !== smallestId);

// new array with random numbers

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// sum of all 

const total = reviews.reduce((sum, currentValue) => {
  return sum + currentValue;
}, 0);

// average rating

const average = total / reviews.length;

console.log("Average:", average);


function groupReviews(values) {
  return values.reduce((acc, value) => {

    if (value >= 4) {
      acc.good++;
    } else if (value >= 2.5) {
      acc.ok++;
    } else {
      acc.bad++;
    }

    return acc;
  }, {
    good: 0,
    ok: 0,
    bad: 0
  });
}

const groupedResults = groupReviews(reviews);

console.log(groupedResults);
