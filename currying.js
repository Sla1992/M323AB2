// Change the Grade to a letter and give Feedback based on the letter Grade

const studentGrades = [
  { name: 'Joe', grade: 88 },
  { name: 'Jen', grade: 94 },
  { name: 'Steph', grade: 77 },
  { name: 'Allen', grade: 60 },
  { name: 'Gina', grade: 54 },
];

// Function to Mutate from Numbers to Letter Grades
const getLetterGrade = grade => {
  if (grade >= 90) return 'a';
  if (grade >= 80) return 'b';
  if (grade >= 70) return 'c';
  if (grade >= 60) return 'd';
  return 'f';
};

// Currying-Function for Feedback
const createFeedback = message => student => {
  const letter = getLetterGrade(student.grade);
  return `${message} ${student.name}, you got an ${letter}`;
};

// Specific Feedback-Functions for each letter grade
const feedbackMessages = {
  a: createFeedback('Excellent Job'),
  b: createFeedback('Nice Job'),
  c: createFeedback('Well done'),
  d: createFeedback('What happened'),
  f: createFeedback('Not good')
};

// Transformation
const studentFeedback = studentGrades.map(student => {
  const letter = getLetterGrade(student.grade);
  return feedbackMessages[letter](student);
});

console.log(studentFeedback);